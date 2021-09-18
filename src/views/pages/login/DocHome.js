import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Popover, Button } from "antd";
import { Alert } from "antd";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import { Select } from "antd";
import DocLayout from "../../../containers/DocLayout";
/* eslint-disable react/destructuring-assignment */
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  DragDropProvider,
  EditRecurrenceMenu,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";

const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const recurrenceAppointments = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 9, 15),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 100,
    rRule: "FREQ=DAILY;COUNT=3",
    exDate: "20180628T063500Z,20180626T061500Z",
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 101,
    rRule: "FREQ=DAILY;COUNT=4",
    exDate: "20180627T091100Z",
    allDay: true,
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 102,
    rRule: "FREQ=DAILY;COUNT=5",
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: "Room 2",
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 27, 11, 45),
    endDate: new Date(2018, 5, 27, 13, 20),
    id: 4,
    location: "Room 2",
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 5, 26, 14, 40),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2",
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 5, 28, 9, 45),
    endDate: new Date(2018, 5, 28, 11, 15),
    id: 6,
    location: "Room 1",
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 5, 29, 11, 45),
    endDate: new Date(2018, 5, 29, 13, 5),
    id: 7,
    location: "Room 3",
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: "Room 2",
  },
];

const dragDisableIds = new Set([3, 8, 10, 12]);

const allowDrag = ({ id }) => !dragDisableIds.has(id);
const appointmentComponent = (props) => {
  if (allowDrag(props.data)) {
    return <Appointments.Appointment {...props} />;
  }
  return (
    <Appointments.Appointment
      {...props}
      style={{ ...props.style, cursor: "not-allowed" }}
    />
  );
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: recurrenceAppointments,
      currentDate: new Date("2018-06-27"),
    };

    this.onCommitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <DocLayout>
        <div className="margin-top">
          <Paper>
            <Scheduler data={data} height={660}>
              <ViewState defaultCurrentDate={currentDate} />
              <EditingState onCommitChanges={this.onCommitChanges} />
              <EditRecurrenceMenu />
              <WeekView startDayHour={9} endDayHour={16} />
              <Appointments appointmentComponent={appointmentComponent} />
              <AllDayPanel />
              <DragDropProvider allowDrag={allowDrag} />
            </Scheduler>
          </Paper>

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
              <CCol sm="7">
                <CCardHeader>
                  {" "}
                  <h3 class=" display-4 text-primary ml-3 my-3 text-center">
                    Patients Log
                  </h3>
                </CCardHeader>
                <CCardBody>
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
                </CCardBody>
              </CCol>
            </CRow>
          </CCard>
        </div>
      </DocLayout>
    );
  }
}
