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

const text1 = `
A defunct luxury hotel in Cambodia's capital finished conversion into a 500-room coronavirus hospital on Monday (Mar 8), as authorities enforced a new law imposing criminal punishments for violating health rules and infections continued to rise in the Southeast Asian country.

The Great Duke Phnom Penh has not been in operation for two years, and is now set up to treat virus patients amid a third wave of the pandemic in Cambodia. 

Prime Minister Hun Sen assigned General Hun Manet, his eldest son and a powerful army chief, to lead the two-day effort to turn the hotel into a temporary hospital.
`;

const text2 = `
Kantha Bopha installed a unit focusing on pediatric cardiac surgery and interventional cardiology in Siem Reap in 2011. Over the past nine years, the hospital’s surgeons have regularly used cardiac catheterization to diagnose and treat cardiovascular conditions such as septal defects, or “hole in the heart,” coarctation of the aorta, which is when the body’s main artery is narrower than normal, and underdeveloped hearts, which is when the organ struggles to pump enough blood to the lungs or around the body.`;

const text3 = `
The Ministry of Health of Cambodia (MoH) has permitted registered private hospitals in Phnom Penh capital to treat COVID-19 patients.

According to the ministry’s announcement dated April 25, the interested private hospitals must request for a legal permission from the Ministry of Health through the Department of Hospital Services.

The hospitals considered qualified for the treatment of coronavirus patients are those with adequate location and parking, ambulances with enough medical equipment, appropriate and safe patient rooms, and emergency room with adequate medical materials.`;

const recurrenceAppointments = [
  {
    title: "UN Health Awareness Conference",
    startDate: new Date(2018, 5, 25, 9, 15),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 100,
    rRule: "FREQ=DAILY;COUNT=3",
    exDate: "20180628T063500Z,20180626T061500Z",
  },
  {
    title: "Follow-up for the vaccine ",
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 101,
    rRule: "FREQ=DAILY;COUNT=4",
    exDate: "20180627T091100Z",
    allDay: true,
  },
  {
    title: "Clinic-2",
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
    title: "Equipment Meeting",
    startDate: new Date(2018, 5, 26, 14, 40),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2",
  },
  {
    title: "Surgery D165AQR",
    startDate: new Date(2018, 5, 28, 9, 45),
    endDate: new Date(2018, 5, 28, 11, 15),
    id: 6,
    location: "Room 1",
  },
  {
    title: "Board of Directors Coffee Catch up",
    startDate: new Date(2018, 5, 29, 11, 45),
    endDate: new Date(2018, 5, 29, 13, 5),
    id: 7,
    location: "Room 3",
  },
  {
    title: "Surgery Y183DWS",
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
                    <Panel
                      header="Cambodia turns hotel into hospital as COVID-19 cases rise"
                      key="1"
                    >
                      <p>{text1}</p>
                    </Panel>
                    <Panel
                      header="Legendary Children’s Hospital In Cambodia Is Now Using MRI For Young Cardiac Patients"
                      key="2"
                    >
                      <p>{text2}</p>
                    </Panel>
                    <Panel
                      header="Cambodia allows private hospitals in Phnom Penh to treat COVID-19 patients
"
                      key="3"
                    >
                      <p>{text3}</p>
                    </Panel>
                  </Collapse>
                </CCardBody>
              </CCol>
              <CCol sm="7">
                <CCardHeader>
                  {" "}
                  <h3 class=" display-4 text-primary ml-3 my-3 text-center">
                    Doctors Log
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

                        <th className="text-center">Department</th>
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

                        <td className="text-center">Homeopathy</td>

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
                        <td className="text-center">Obstetrics</td>

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
                        <td className="text-center">Paediatrics</td>

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
                        <td className="text-center">Plastic surgery</td>

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
                        <td className="text-center">Neurology</td>
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
