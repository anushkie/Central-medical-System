import React from "react";

import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CIcon from "@coreui/icons-react";

const { Option } = Select;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div className="margin-top">
          {/* <CButton
            color="primary"
            onClick={() => setPrimary(!primary)}
            className="mr-1"
          >
            Primary modal
          </CButton>
          <CModal
            show={primary}
            onClose={() => setPrimary(!primary)}
            color="primary"
          ></CModal> */}
          <Button
            type="primary"
            shape="round"
            size="large"
            onClick={this.showDrawer}
          >
            <PlusOutlined /> New account
          </Button>
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <div class="card text-center">
                      <div class="card-body">
                        <h5 class="card-title">Emergency</h5>
                        <p class="card-text">
                          {/* <PriorityHighIcon />
                         <PriorityHighIcon />
                         <PriorityHighIcon /> */}
                        </p>
                        <a href="#" class="btn btn-primary">
                          {" "}
                          {/* <TouchAppIcon /> */}
                          Click Me
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div class="card text-center">
                      <div class="card-body">
                        <h5 class="card-title">Book an appointment</h5>
                        <p class="card-text">{/* <DateRangeIcon /> */}</p>
                        <a href="#" class="btn btn-primary">
                          {/* <TouchAppIcon /> */}
                          Click Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Drawer
            title="Create a new account"
            width={720}
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  Cancel
                </Button>
                <Button onClick={this.onClose} type="primary">
                  Submit
                </Button>
              </div>
            }
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      { required: true, message: "Please enter user name" },
                    ]}
                  >
                    <Input placeholder="Please enter user name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="url"
                    label="Url"
                    rules={[{ required: true, message: "Please enter url" }]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="Please enter url"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="owner"
                    label="Owner"
                    rules={[
                      { required: true, message: "Please select an owner" },
                    ]}
                  >
                    <Select placeholder="Please select an owner">
                      <Option value="xiao">Xiaoxiao Fu</Option>
                      <Option value="mao">Maomao Zhou</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="type"
                    label="Type"
                    rules={[
                      { required: true, message: "Please choose the type" },
                    ]}
                  >
                    <Select placeholder="Please choose the type">
                      <Option value="private">Private</Option>
                      <Option value="public">Public</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="approver"
                    label="Approver"
                    rules={[
                      { required: true, message: "Please choose the approver" },
                    ]}
                  >
                    <Select placeholder="Please choose the approver">
                      <Option value="jack">Jack Ma</Option>
                      <Option value="tom">Tom Liu</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="dateTime"
                    label="DateTime"
                    rules={[
                      { required: true, message: "Please choose the dateTime" },
                    ]}
                  >
                    <DatePicker.RangePicker
                      style={{ width: "100%" }}
                      getPopupContainer={(trigger) => trigger.parentElement}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: "please enter url description",
                      },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="please enter url description"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </div>
      </>
    );
  }
}

export default DrawerForm;
