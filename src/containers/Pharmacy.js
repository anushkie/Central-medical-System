import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Select } from "antd";
import { Input, Space } from "antd";

import CIcon from "@coreui/icons-react";
import GenericLayout from "./GenericLayout";
const { Option } = Select;
const { Search } = Input;

const columns = [
  { title: "Pharmacy Name", dataIndex: "name", key: "name" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Quantity", dataIndex: "age", key: "age" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Buy</a>,
  },
];

const data = [
  {
    key: 1,
    name: "Allwell Medicos",
    age: 12,
    address: "12 woltan street",
    description: "Opening Timings : 10:00 - 22:00 pm",
  },
  {
    key: 2,
    name: "Health Green",
    age: 22,
    address: "1/23 Chawri bazar",
    description: "Opening Timings : 12:00 -18:00 ",
  },

  {
    key: 3,
    name: "Sai Medical",
    age: 3,
    address: "Sidney No. 2 Lake Park",
    description: "Opening Timings : 10:00 am -10:00 pm",
  },
];
const DisplayTable = () => {
  console.log("this is calling yayy");
};
const Pharmacy = () => {
  const [visible1, updateVisibility1] = React.useState(false);

  const hide1 = () => {
    updateVisibility1(false);
  };

  const handleVisibleChange1 = (visible1) => {
    console.log(visible1);
    updateVisibility1(visible1);
  };

  return (
    <GenericLayout>
      <div className="margin-top w-100 text-center mb-3 ">
        <h2>Pharmacy</h2>
        <br />
        <div className="d-inline-flex">
          <Select
            defaultValue="Select a country"
            style={{ width: 240 }}
            // onChange={handleChange}
            // value={selectedState}
          >
            <Option value="India"> India</Option>
            <Option value="Africa"> Africa </Option>
            <Option value="Bangladesh ">Bangladesh</Option>
            <Option value="Cambodia">Cambodia</Option>
            <Option value="Bhutan">Bhutan</Option>

            <Option value="Bhutan">Brazil</Option>
            <Option value="Pakistan">Pakistan</Option>
          </Select>

          <div className="margin-bet"> </div>
          <Select defaultValue="Select a State">
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
        </div>
      </div>
      <div className="w-100 text-center mb-3 ">
        <Space direction="vertical">
          <Search
            placeholder="Medicine name"
            style={{ width: 200 }}
            onSearch={() => handleVisibleChange1(true)}
          />
        </Space>
      </div>
      {visible1 && (
        <Table
          className="big-size"
          columns={columns}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data}
        />
      )}
    </GenericLayout>
  );
};
export default Pharmacy;
