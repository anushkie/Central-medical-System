import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const handleLogin = () => {
  console.log("CAlled");
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

// const [primary, setPrimary] = useState(false);
// const history = useHistory();
// const history1 = useHistory();

// const handleLogin = () => {
//   history.push("/plan");
// };
class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Name",
        dataIndex: "name",
        width: "30%",
        editable: true,
      },
      {
        title: "Age",
        dataIndex: "age",
      },
      {
        title: "Location",
        dataIndex: "address",
      },
      {
        title: "Time Slot",
        dataIndex: "time",
      },
      {
        title: "Operation",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a>
                Delete
                <FontAwesomeIcon icon={faTrashAlt} />
              </a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          name: "Anushka Bhatnagar",
          age: "24",
          address: "Nursing Home - Alpha",
          time: "12:00-12:40",
        },
        {
          key: "1",
          name: "Tom Brown",
          age: "32",
          address: "Clinic - A123",
          time: "18:00-19:00",
        },
        {
          key: "2",
          name: "Edward King",
          age: "65",
          address: "Royal blue Hospital",
          time: "10:00-10:30",
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  // handleLogin = () => {
  //   history = useHistory();

  //   history.push("/login");
  // };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        {/* <EditableTable />, */}
        {/* <div className="col-md-4">
          <Button type="primary" onClick={handleLogin()}>
            Book an appointment
          </Button>
        </div> */}

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <center>
              <Button type="primary" onClick={handleLogin()}>
                <FontAwesomeIcon icon={faCalendar} /> Book an new appointment
              </Button>
            </center>
          </div>

          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default EditableTable;
