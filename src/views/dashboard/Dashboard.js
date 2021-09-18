import React, { useState, lazy } from "react";
import { Popover, Button } from "antd";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import { Select } from "antd";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PanToolIcon from "@material-ui/icons/PanTool";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import { Input } from "antd";

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCardTitle,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout,
  CCollapse,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import MainChartExample from "../charts/MainChartExample.js";
import { PanTool } from "@material-ui/icons";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const onClose = (e) => {
  console.log(e, "I was closed.");
};

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const handleChange = (value) => {
  console.log("Selected value:", value);
};

const text = `
  Some news ... some news
`;

const Dashboard = () => {
  const [visible1, updateVisibility1] = React.useState(false);

  const hide1 = () => {
    updateVisibility1(false);
  };

  const handleVisibleChange1 = (visible1) => {
    updateVisibility1(visible1);
  };

  const [visible2, updateVisibility2] = React.useState(false);

  const hide2 = () => {
    updateVisibility2(false);
  };

  const handleVisibleChange2 = (visible2) => {
    updateVisibility2(visible2);
  };

  const [visible3, updateVisibility3] = React.useState(false);

  const hide3 = () => {
    updateVisibility3(false);
  };

  const handleVisibleChange3 = (visible3) => {
    updateVisibility3(visible3);
  };

  const [visible4, updateVisibility4] = React.useState(false);

  const hide4 = () => {
    updateVisibility4(false);
  };

  const handleVisibleChange4 = (visible4) => {
    updateVisibility4(visible4);
  };

  return (
    <>
      <CCard>
        <CCardBody>
          <div className="margin-top w-100 text-center mb-3 ">
            <div className="d-inline-flex"></div>
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

            <div className="d-inline-flex">
              <Select
                className="ml-5"
                defaultValue="Select a state"
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
            </div>
          </div>
          <table className="table table-hover table-outline mb-0 d-none d-sm-table">
            <thead>
              <tr>
                <th className="text-center">
                  <CIcon name="cil-people" />
                </th>
                <th>Doctors</th>
                <th>Experience </th>

                <th>Contact </th>

                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <div className="c-avatar">
                    <img
                      src={"imgs/11.jpg"}
                      className="c-avatar-img"
                      alt="ayushmann@ecentralhealth.com"
                    />
                    <span className="c-avatar-status bg-success"></span>
                  </div>
                </td>
                <th>Ayushmann Khurana</th>
                <th>5+ </th>

                <th>123, c-2 qwerty </th>

                <th>
                  <Popover
                    content={
                      <>
                        <center>
                          <Input placeholder="Type here.." />
                          <a color onClick={hide1}>
                            High BP
                          </a>{" "}
                          <a color onClick={hide1}>
                            Urgent!
                          </a>{" "}
                          <a color onClick={hide1}>
                            Help!
                          </a>{" "}
                        </center>
                      </>
                    }
                    title="Message"
                    trigger="click"
                    visible={visible1}
                    onVisibleChange={handleVisibleChange1}
                  >
                    <Button type="primary">Click me</Button>
                  </Popover>
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="c-avatar">
                    <img
                      src={"imgs/22.jpg"}
                      className="c-avatar-img"
                      alt="shahrukh@ecentralhealth.com"
                    />
                    <span className="c-avatar-status bg-success"></span>
                  </div>
                </td>
                <th>Shahrukh Khan</th>
                <th>10+ </th>

                <th>353, FortHill </th>

                <th>
                  <Popover
                    content={
                      <>
                        <center>
                          <Input placeholder="Type here.." />
                          <a color onClick={hide2}>
                            High BP
                          </a>{" "}
                          <a color onClick={hide2}>
                            Urgent!
                          </a>{" "}
                          <a color onClick={hide2}>
                            Help!
                          </a>{" "}
                        </center>
                      </>
                    }
                    title="Message"
                    trigger="click"
                    visible={visible2}
                    onVisibleChange={handleVisibleChange2}
                  >
                    <Button type="primary">Click me</Button>
                  </Popover>
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="c-avatar">
                    <img
                      src={"imgs/44.jpg"}
                      className="c-avatar-img"
                      alt="Madhav@ecentralhealth.com"
                    />
                    <span className="c-avatar-status bg-success"></span>
                  </div>
                </td>
                <th>Madhav D'souza</th>
                <th>2+ </th>

                <th>98, Chitra Vihar </th>

                <th>
                  <Popover
                    content={
                      <>
                        <center>
                          <Input placeholder="Type here.." />
                          <a color onClick={hide3}>
                            High BP
                          </a>{" "}
                          <a color onClick={hide3}>
                            Urgent!
                          </a>{" "}
                          <a color onClick={hide3}>
                            Help!
                          </a>{" "}
                        </center>
                      </>
                    }
                    title="Message"
                    trigger="click"
                    visible={visible3}
                    onVisibleChange={handleVisibleChange3}
                  >
                    <Button type="primary">Click me</Button>
                  </Popover>
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="c-avatar">
                    <img
                      src={"imgs/33.jpg"}
                      className="c-avatar-img"
                      alt="Kartik@ecentralhealth.com"
                    />
                    <span className="c-avatar-status bg-success"></span>
                  </div>
                </td>
                <th>Kartik Aryan Khan</th>
                <th>7+ </th>

                <th>15, Angad Nagar </th>

                <th>
                  <Popover
                    content={
                      <>
                        <center>
                          <Input placeholder="Type here.." />
                          <a color onClick={hide4}>
                            High BP
                          </a>{" "}
                          <a color onClick={hide4}>
                            Urgent!
                          </a>{" "}
                          <a color onClick={hide4}>
                            Help!
                          </a>{" "}
                        </center>
                      </>
                    }
                    title="Message"
                    trigger="click"
                    visible={visible4}
                    onVisibleChange={handleVisibleChange4}
                  >
                    <Button type="primary">Click me</Button>
                  </Popover>
                </th>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>

      <CCard>
        <CRow>
          <CCol sm="5">
            <CCardHeader>
              {" "}
              <h3 class=" display-4 text-primary ml-3 my-3 text-center">
                News
              </h3>
            </CCardHeader>
            <CCardBody>
              <Collapse defaultActiveKey={["1"]} onChange={callback}>
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </CCardBody>
          </CCol>
          <CCol sm="5">
            <CCardHeader>
              {" "}
              <h3 class=" display-4 text-primary ml-3 my-3 text-center">
                Quick Links
              </h3>
            </CCardHeader>
            <CCardBody>
              <section id="icon-boxes" class="py-3 mt-3 text-center">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <a
                        href="https://learn.uea.ac.uk/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_327_1"
                        target="_blank"
                        class="nounderline"
                      >
                        <div class="card ">
                          <div class="card-body">
                            <i class="fa fa-pencil-square mb-3 text-dark"></i>
                            <h3>
                              <FavoriteBorderIcon />
                              Cardiology
                            </h3>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div class="col-md-6">
                      <a
                        href="https://www.office.com/?auth=2&wa=wsignin1.0"
                        target="_blank"
                        class="nounderline"
                      >
                        <div class="card ">
                          <div class="card-body">
                            <i class="fa fa-file-word-o mb-3 text-primary"></i>
                            <h3>
                              {" "}
                              <VisibilityIcon /> Ophthalmology
                            </h3>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div class="col-md-6">
                      <a
                        href="https://learn.uea.ac.uk/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_327_1"
                        target="_blank"
                        class="nounderline"
                      >
                        <div class="card ">
                          <div class="card-body">
                            <i class="fa fa-pencil-square mb-3 text-dark"></i>
                            <h3>
                              {" "}
                              <PanToolIcon /> Orthopaedy
                            </h3>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div class="col-md-6">
                      <a
                        href="https://learn.uea.ac.uk/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_327_1"
                        target="_blank"
                        class="nounderline"
                      >
                        <div class="card ">
                          <div class="card-body">
                            <i class="fa fa-pencil-square mb-3 text-dark"></i>
                            <h3>
                              <PregnantWomanIcon /> Gynaecology
                            </h3>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>

      <CRow>
        <CCol>
          <CCard>
            {/* <CCardHeader>Traffic {" & "} Sales</CCardHeader> */}
            <CCardBody>
              <CRow>
                <CCol xs="12" md="6" xl="6"></CCol>

                <CCol xs="12" md="6" xl="6">
                  <div className="divider text-center"></div>
                </CCol>
              </CRow>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">
                      <CIcon name="cil-people" />
                    </th>
                    <th>Doctors</th>
                    <th className="text-center">Country</th>

                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"imgs/1.jpg"}
                          className="c-avatar-img"
                          alt="shantanu.chaudhary@ecentralhealth.com"
                        />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Shantanu Chaudhary</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: May 13 , 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td>

                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-mastercard" />
                    </td>

                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                    <td>
                      {/* <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button type="primary">Click me</Button>
                      </Popover> */}{" "}
                      Message
                    </td>
                  </tr>

                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"imgs/2.jpg"}
                          className="c-avatar-img"
                          alt="Nisha.Tarasios@ecentralhealthcare.com"
                        />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Nisha Tarasios</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jun 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>

                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                    <td>
                      {/* <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button type="primary">Click me</Button>
                      </Popover> */}{" "}
                      Message
                    </td>
                  </tr>

                  {/*  */}

                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"imgs/3.jpg"}
                          className="c-avatar-img"
                          alt="ankur.suman@ecentralhealthcare.com"
                        />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Ankur Suman</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Apr 26, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-stripe" />
                    </td>

                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>

                    <td>
                      {/* <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button type="primary">Click me</Button>
                      </Popover> */}{" "}
                      Message
                    </td>
                  </tr>

                  {/*  */}
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"imgs/4.jpg"}
                          className="c-avatar-img"
                          alt="vivek.bhatnagar@ecentralhealthcare.com"
                        />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Vivek Bhatnagar</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jul 15, 2021{" "}
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>

                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                    <td>
                      {/* <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button type="primary">Click me</Button>
                      </Popover> */}{" "}
                      Message
                    </td>
                  </tr>

                  {/* 
                  
                  */}

                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img
                          src={"imgs/5.jpg"}
                          className="c-avatar-img"
                          alt="arushee.ecentralhealthcare.com"
                        />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Arushee Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: May 29, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-es" title="es" id="es" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-google-pay" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                    <td>
                      {/* <Popover
                        content={<a onClick={this.hide}>Close</a>}
                        title="Title"
                        trigger="click"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                      >
                        <Button type="primary">Click me</Button>
                      </Popover> */}{" "}
                      Message
                    </td>
                  </tr>

                  {/*  */}
                </tbody>
              </table>

              <hr className="mt-0" />
              <div className="row">
                <div className="col-md-6">
                  <div className="progress-group mb-4">
                    <div className="progress-group-header">
                      <CIcon className="progress-group-icon" name="cil-user" />
                      <span className="title">Male</span>
                      <span className="ml-auto font-weight-bold">43%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="warning"
                        value="43"
                      />
                    </div>
                  </div>
                  <div className="progress-group mb-5">
                    <div className="progress-group-header">
                      <CIcon
                        className="progress-group-icon"
                        name="cil-user-female"
                      />
                      <span className="title">Female</span>
                      <span className="ml-auto font-weight-bold">37%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="warning"
                        value="37"
                      />
                    </div>
                  </div>

                  <div className="progress-group mb-2">
                    <div className="progress-group-header">
                      <CIcon
                        className="progress-group-icon"
                        name="cil-user-female"
                      />
                      <span className="title">Other</span>
                      <span className="ml-auto font-weight-bold">12%</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="warning"
                        value="12"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  {/* <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        className="progress-group-icon"
                        name="cil-globe-alt"
                      />
                      <span className="title">Organic Search</span>
                      <span className="ml-auto font-weight-bold">
                        191,235 <span className="text-muted small">(56%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="56"
                      />
                    </div>
                  </div> */}

                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        name="cib-facebook"
                        className="progress-group-icon"
                      />
                      <span className="title">Facebook</span>
                      <span className="ml-auto font-weight-bold">
                        51,223 <span className="text-muted small">(15%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="15"
                      />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        name="cib-twitter"
                        className="progress-group-icon"
                      />
                      <span className="title">Twitter</span>
                      <span className="ml-auto font-weight-bold">
                        37,564 <span className="text-muted small">(11%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="11"
                      />
                    </div>
                  </div>
                  <div className="progress-group">
                    <div className="progress-group-header">
                      <CIcon
                        name="cib-linkedin"
                        className="progress-group-icon"
                      />
                      <span className="title">LinkedIn</span>
                      <span className="ml-auto font-weight-bold">
                        27,319 <span className="text-muted small">(8%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress
                        className="progress-xs"
                        color="success"
                        value="8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;