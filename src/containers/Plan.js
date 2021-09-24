import React, { useState } from "react";
import UserLayout from "../containers/UserLayout";

import { Form, Input, Radio, Select, Cascader, TreeSelect, Switch } from "antd";

import { Popconfirm, message, Button } from "antd";
import { InputNumber } from "antd";

import { DatePicker, Space } from "antd";
const { Option } = Select;

const handleChange = (value) => {
  console.log(value);
};

const handleDateChange = (value) => {
  console.log(value);
};

const text = "Are you sure you want to book?";

function confirm() {
  message.info("Clicked on Yes.");
}
const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <UserLayout>
      <div className="margin-top">
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Date of Birth">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Select Locations">
            <TreeSelect
              treeData={[
                {
                  title: "Clinic-A24",
                  value: "Clinic-A24",
                },
                {
                  title: "Clinic-B76",
                  value: "Clinic-B76",
                },
                {
                  title: "XYZ Hospital",
                  value: "XYZ Hospital",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Available doctors">
            <Cascader
              options={[
                {
                  value: "Physician",
                  label: "Physician",
                  children: [
                    {
                      value: "Dr. Tom Hage",
                      label: "Dr. Tomb Hage",
                    },
                    {
                      value: "Dr. Sneh  Mosby",
                      label: "Dr. Sneh Tekriwal",
                    },
                    {
                      value: "Dr. Otis Milburn",
                      label: "Dr. Nuri Dagasan",
                    },
                  ],
                },
                {
                  value: "Surgeons",
                  label: "Surgeons",
                  children: [
                    {
                      value: "Dr. Tom Hage",
                      label: "Dr. Jake Brigham",
                    },
                    {
                      value: "Dr. Ted Mosby",
                      label: "Dr. Halden Mosby",
                    },
                    {
                      value: "Dr. Otis Milburn",
                      label: "Dr. Rome Tara",
                    },
                  ],
                },
                {
                  value: "Cardiologist",
                  label: "Cardiologist",
                  children: [
                    {
                      value: "Dr. Tom Hage",
                      label: "Dr. Nidhi Ashok",
                    },
                    {
                      value: "Dr. Ted Mosby",
                      label: "Dr. Mohat Kilgi",
                    },
                    {
                      value: "Dr. Otis Milburn",
                      label: "Dr. Toh Lage",
                    },
                  ],
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="Appointment Date">
            <DatePicker />
          </Form.Item>

          <Form.Item label="Need assistance?">
            <Switch />
          </Form.Item>
          <center>
            <Form.Item>
              <Popconfirm
                placement="bottom"
                title={text}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
              >
                <Button>Book</Button>
              </Popconfirm>{" "}
            </Form.Item>
          </center>
        </Form>
      </div>
    </UserLayout>
  );
};
export default FormSizeDemo;
