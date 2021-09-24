import React from "react";
import GenericLayout from "../containers/GenericLayout";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const AboutUs = () => {
  return (
    <GenericLayout>
      <div className=" margin-top w-100 text-center mb-3 ">
        <h2>About Us </h2>
        <center>
          <Card
            style={{ width: 500 }}
            // cover={<img alt="Developer Image" src="nush_img.png" />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="E-Healthcare Platform by Anushka Bhatnagar"
              description="This platform is created for low-connectivity, accessibility and low literacy as a dissertation project for M.S Advanced Computing Science in University of East Anglia, UK.
              For any further details, please contact the supervisor: Dr. Dan Smith, dan.smith@uea.ac.uk"
            />
          </Card>
        </center>
      </div>
    </GenericLayout>
  );
};
export default AboutUs;
