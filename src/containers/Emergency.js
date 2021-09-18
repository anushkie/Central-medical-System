import React from "react";
import TheLayout2 from "../containers/TheLayout2";
import { Select } from "antd";
import { Input, Space } from "antd";
import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import { List, Card } from "antd";

const { Option } = Select;
const { Search } = Input;

const handleChange = (value) => {
  console.log("Selected value:", value);
};

const onSearch = (value) => console.log(value);

const data = [
  {
    title: "Hospital-A",
  },
  {
    title: "Hospital-B",
  },
  {
    title: "Clinic-A",
  },
  {
    title: "Hospital-C",
  },
  {
    title: "Clinic-D",
  },
  {
    title: "Hospital-D",
  },
];

const Emergency = () => {
  return (
    <TheLayout2>
      <CCard>
        <CCardTitle>
          <h3 class=" margin-top display-6 text-primary ml-3 my-3 text-center">
            {" "}
            Ambulance Services
          </h3>
        </CCardTitle>
        <CCardBody>
          <div className="w-100 text-center mb-3 ">
            <Select
              defaultValue="Select a country"
              style={{ width: 240 }}
              onChange={handleChange}
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
            </Select>

            <Space direction="vertical">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </Space>
          </div>
        </CCardBody>
      </CCard>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Tel: 01234566</Card>
          </List.Item>
        )}
      />
      ,
    </TheLayout2>
  );
};
export default Emergency;
