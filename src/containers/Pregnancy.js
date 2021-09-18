import React from "react";
import {
  CBadge,
  CCard,
  CButton,
  CTooltip,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import { Card, Col, Row } from "antd";
import { Button } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import TheLayout2 from "./TheLayout2";

const placements = ["top-end"];

const Pregnancy = () => {
  return (
    <TheLayout2>
      <div className=" margin-top w-100 text-center mb-3 ">
        <h2>Pregnancy</h2>
      </div>
      <div className="my-0">
        {placements.map((placement) => {
          return (
            <CCol md="4" className="py-4 text-center" key={placement}>
              <CTooltip
                content={`Labour Pain? Call on 1231234`}
                placement={placement}
              >
                <CButton color="primary">{"Emergency"}</CButton>
              </CTooltip>
            </CCol>
          );
        })}
      </div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Trying for a baby"
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              Advice about trying for a baby, including planning a pregnancy and
              LGBT+ routes into parenthood.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Finding out you're pregnant"
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              What happens and things to think about when you're first pregnant.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Your pregnancy care
              "
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              Read about the scans, tests and antenatal care you can have.
            </Card>
          </Col>
        </Row>
      </div>
      ,
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Keeping well in pregnancy
              "
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              How to look after yourself and your baby while you're pregnant.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Pregnancy week-by-week"
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              Find out what to expect from every week of your pregnancy.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Pregnancy-related conditions
              "
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              What to do about common symptoms, complications and existing
              conditions.
            </Card>
          </Col>
        </Row>
      </div>
      ,
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title="Labour and birth
              "
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              How to tell if you're in labour and what happens during labour and
              birth.
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Due date calculator"
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              Calculate your delivery date here.{" "}
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title=" Support"
              bordered={false}
              extra={
                <Button type="primary">
                  {" "}
                  Click me
                  <RightCircleFilled />
                </Button>
              }
            >
              Advice for things you might need support with during pregnancy.
            </Card>
          </Col>
        </Row>
      </div>
      ,
    </TheLayout2>
  );
};
export default Pregnancy;
