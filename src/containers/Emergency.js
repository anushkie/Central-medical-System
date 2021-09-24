import React, { useState } from "react";
import TheLayout2 from "../containers/GenericLayout";
import { Select } from "antd";
import { Input, Space } from "antd";
import { CCard, CCardBody, CCardTitle } from "@coreui/react";
import { List, Card, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

const { Option } = Select;
const { Search } = Input;

const handleChange = (value) => {
  console.log("Selected value:", value);
};

const onSearch = () => console.log("hello");

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
  const [visible1, updateVisibility1] = React.useState(false);

  const hide1 = () => {
    updateVisibility1(false);
  };

  const handleVisibleChange1 = (visible1) => {
    updateVisibility1(visible1);
  };

  return (
    <TheLayout2>
      <div className="margin-top ">
        <CCard>
          <CCardTitle>
            <h3 class=" display-6 text-primary ml-3 my-3 text-center">
              {" "}
              Ambulance Services
            </h3>
          </CCardTitle>
          <CCardBody>
            <div className="w-100 text-center mb-3  div_aligns">
              <Select
                defaultValue="Select a country"
                style={{ width: 240 }}
                onChange={handleChange}
              >
                <Option value="India"> India</Option>
                <Option value="Africa"> Africa </Option>
                <Option value="Bangladesh ">Bangladesh</Option>
                <Option value="Cambodia">Cambodia</Option>
                <Option value="Bhutan">Bhutan</Option>
                <Option value="Pakistan">Pakistan</Option>
                <Option value="Pakistan">Brazil</Option>
              </Select>

              <Search
                className="ml-5"
                placeholder="Enter post code"
                onSearch={handleVisibleChange1}
                style={{ width: 240 }}
              />
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
            <div class="card-headcolor">
              <List.Item>
                <Card title={item.title}>
                  Tel: 01234566
                  <FontAwesomeIcon icon={faPhone} />{" "}
                </Card>
              </List.Item>
            </div>
          )}
        />
      </div>
    </TheLayout2>
  );
};
export default Emergency;
