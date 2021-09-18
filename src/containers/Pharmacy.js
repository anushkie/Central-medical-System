import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Select } from "antd";
import CIcon from "@coreui/icons-react";
import TheLayout2 from "./TheLayout2";
const { Option } = Select;

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];

const Pharmacy = () => {
  return (
    <TheLayout2>
      <div className="margin-top w-100 text-center mb-3 ">
        <h2>Pharmacy</h2>
        <br />
        <div className="d-inline-flex">
          <CIcon name="cif-in" />

          <CIcon name="cif-pk" />
          <CIcon name="cif-bd" />
          <CIcon name="cif-jo" />

          <Select
            defaultValue="Select a country"
            style={{ width: 240 }}
            // onChange={handleChange}
            // value={selectedState}
          >
            <Option value="Andaman and Nicobar Islands">
              {" "}
              Andaman and Nicobar Islands
            </Option>
            <Option value="Andhra Pradesh"> Andhra Pradesh </Option>
            <Option value="Arunachal Pradesh">Arunachal Pradesh</Option>
            <Option value="Assam">Assam</Option>
            <Option value="Bihar">Bihar</Option>
            <Option value="Chandigarh">Chandigarh</Option>
            <Option value="Chhattisgarh">Chhattisgarh</Option>
            <Option value="Dadra n Nagar Haveli">Dadra and Nagar Haveli</Option>
            <Option value="Daman and Diu"> Daman and Diu</Option>
            <Option value="Delhi">Delhi</Option>
            <Option value="Goa">Goa</Option>
            <Option value="Gujarat">Gujarat</Option>
            <Option value="Haryana">Haryana</Option>
            <Option value="Himachal Pradesh">Himachal Pradesh</Option>
            <Option value="Jammu and Kashmir">Jammu and Kashmir</Option>
            <Option value="Jharkhand">Jharkhand</Option>
            <Option value="Karnataka">Karnataka</Option>
            <Option value="Kerala">Kerala</Option>
            <Option value="Ladakh">Ladakh</Option>
            <Option value="Lakshadweep">Lakshadweep</Option>
            <Option value="Madhya Pradesh">Madhya Pradesh</Option>
            <Option value="Maharashtra">Maharashtra</Option>
            <Option value="Manipur">Manipur</Option>
            <Option value="Meghalaya">Meghalaya</Option>
            <Option value="Mizoram">Mizoram</Option>
            <Option value="Nagaland">Nagaland</Option>
            <Option value="Odisha">Odisha</Option>
            <Option value="Puducherry">Puducherry</Option>
            <Option value="Punjab">Punjab</Option>
            <Option value="Rajasthan">Rajasthan</Option>
            <Option value="Sikkim">Sikkim</Option>
            <Option value="Tamil Nadu">Tamil Nadu</Option>
            <Option value="Telengana">Telengana</Option>
            <Option value="Tripura">Tripura</Option>
            <Option value="Uttar Pradesh">Uttar Pradesh</Option>
            <Option value="Uttarakhand">Uttarakhand</Option>
            <Option value="West Bengal">West Bengal</Option>
          </Select>

          <div className="margin-bet"> </div>
          <Select defaultValue="Select a State">
            <Option value="Tamil Nadu">Tamil Nadu</Option>
            <Option value="Telengana">Telengana</Option>
            <Option value="Tripura">Tripura</Option>
          </Select>
        </div>
      </div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
      ,
    </TheLayout2>
  );
};
export default Pharmacy;
