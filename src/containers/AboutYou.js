import React from "react";
import { Card, Avatar } from "antd";
import DocLayout from "../containers/DocLayout";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const AboutUs = () => {
  return (
    <DocLayout>
      <div className=" margin-top w-100 text-center mb-3 ">
        <h2>Dr. Parukh Gera </h2>
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
              title="Department of Gastroenterology"
              description="Dr. Gera has 10+ working "
            />
          </Card>
        </center>
      </div>
    </DocLayout>
  );
};
export default AboutUs;
