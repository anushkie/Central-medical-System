import React, { useState } from "react";
import GenericLayout from "../containers/GenericLayout";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useHistory } from "react-router-dom";
import Carousels from "../views/base/carousels/Carousels";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PanToolIcon from "@material-ui/icons/PanTool";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { Tabs } from "antd";
import { BackTop } from "antd";
import { Button, Select } from "antd";
import { Collapse } from "antd";
import { Grid } from "@material-ui/core/";

function callback1(key) {
  console.log(key);
}
const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};
const { Panel } = Collapse;
const { Option } = Select;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const FirstPage = () => {
  const [dept_num, updatedeptNumber] = React.useState("5");

  const history = useHistory();
  const history1 = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleEmergency = () => {
    history.push("/Emergency");
  };

  const selectDept = (value) => {
    updatedeptNumber(value);
    console.log(value);
  };

  const text1 = `
  The COVID-19 pandemic has reshaped our health care system. Health care workers have, for the last year and a half, put time and effort into coping with the rising numbers of COVID-19 patients. Many have also dealt with a shortage of personal protective equipment and had to quickly adjust to offering care virtually. The next challenge is navigating the limit to the services our health care system will be able to offer — especially as provinces and territories work through the backlog of surgeries and screenings that were postponed because of the pandemic and deal with the increased need for mental health services and chronic disease care.

`;

  const text2 = `
A 4D flow MRI scan is being used to pinpoint heart valve leaks in patients with heart disease for the first time in the UK, a hospital has said.
`;

  const text3 = `
In rare cases, adults who have recovered from COVID-19 may develop multisystem inflammatory syndrome, and clinicians should consider this possibility in adults with specific symptoms, as physicians describe in a case published in CMAJ (Canadian Medical Association Journal).

A 60-year-old man, who had tested positive for SARS-CoV-2 four weeks before, visited hospital for a range of symptoms, including prolonged shortness of breath, high fever, swelling and severe fatigue. Testing found an enlarged heart and lung swelling as well as other issues.`;

  return (
    <GenericLayout>
      <div style={{ height: "100vh", padding: 8 }}>
        <div className="margin-top container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <div class="card text-center">
                    <div class="cardcolor card-body">
                      <h5 class="card-title">
                        {" "}
                        <PriorityHighIcon />
                        <b>Emergency </b>
                        <PriorityHighIcon />
                      </h5>
                      <p class="card-text"></p>

                      <Button type="primary" ghost onClick={handleEmergency}>
                        Click me
                        <FontAwesomeIcon icon={faHandPointer} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div class="card text-center">
                    <div class="cardcolor  card-body">
                      <h5 class="size card-title">
                        <DateRangeIcon /> Book an appointment
                      </h5>
                      <p class="card-text">{/* <DateRangeIcon /> */}</p>
                      <Button type="primary" ghost onClick={handleLogin}>
                        Click me
                        <FontAwesomeIcon icon={faHandPointer} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <center>
              <Carousels />
            </center>
          </div>
          <div className="col-md-6">
            <h3 class=" display-4 text-primary ml-3 my-3 text-center">News</h3>
            <Collapse defaultActiveKey={["1"]} onChange={callback("1")}>
              <Panel
                header=" Overused and low-value: What to leave behind after COVID-19"
                key="1"
              >
                <p>{text1}</p>
              </Panel>
              <Panel
                header="Cutting-edge' 4D heart scan a UK hospital 'first'"
                key="2"
              >
                <p>{text2}</p>
              </Panel>
              <Panel
                header="COVID-19-related multisystem inflammatory syndrome in adults: rare but possible
"
                key="3"
              >
                <p>{text3}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
        <h3 class=" display-4 text-primary ml-3 my-3 text-center">
          Departments
        </h3>
        <div className="w-100 text-center mb-3 ">
          <div className="d-inline-flex">
            <Select
              className="ml-5"
              defaultValue="Select a department"
              style={{ width: 240 }}
              onChange={(event) => selectDept(event)}
              // onChange={handleChange}
            >
              <Option value="5">Anaesthetics </Option>
              <Option value="6">Chaplaincy</Option>
              <Option value="7">Diagnostic imaging</Option>
              <Option value="8">Gastroenterology</Option>
              <Option value="9">Nephrology</Option>
              <Option value="10">Neurology</Option>
              <Option value="11">Oncology</Option>
              <Option value="12">Physiotherapy</Option>
              <Option value="13">Radiotherapy</Option>
              <Option value="14">Sexual health (genitourinary medicine)</Option>
            </Select>
          </div>
        </div>
        <Grid container spacing={24}>
          <Grid item md={3}>
            <div class="card">
              <div class="card-body">
                <h3>
                  <FavoriteBorderIcon />
                  <a onClick={() => selectDept("1")}> Cardiology</a>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div class="card ">
              <div class="card-body">
                <h3>
                  {" "}
                  <VisibilityIcon />{" "}
                  <a onClick={() => selectDept("2")}>Ophthalmology</a>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div class="card ">
              <div class="card-body">
                <i class="fa fa-pencil-square mb-3 text-dark"></i>
                <h3>
                  {" "}
                  <PanToolIcon />
                  <a onClick={() => selectDept("3")}> Orthopaedy </a>
                </h3>
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div class="card ">
              <div class="card-body">
                <i class="fa fa-pencil-square mb-3 text-dark"></i>
                <h3>
                  <PregnantWomanIcon />
                  <a onClick={() => selectDept("4")}> Gynaecology </a>
                </h3>
              </div>
            </div>
          </Grid>
        </Grid>
        {dept_num == "5" && (
          <h5>
            For more option on your country wise departments,{" "}
            <Button danger type="text" onClick={handleLogin}>
              Login{" "}
            </Button>
            to your account
          </h5>
        )}

        {dept_num == "1" && (
          <div className="data">
            <div className="headings">
              <h3>
                <b>Department of Cardiology</b>{" "}
              </h3>
            </div>
            Cardiology is a medical specialty and a branch of internal medicine
            concerned with disorders of the heart. It deals with the diagnosis
            and treatment of such conditions as congenital heart defects,
            coronary artery disease, electrophysiology, heart failure and
            valvular heart disease.
          </div>
        )}

        {dept_num == "2" && (
          <div className="data">
            <div className="headings">
              <h3>
                <b>Department of Ophthalmology</b>{" "}
              </h3>
            </div>
            Ophthalmology is a branch of medicine dealing with the diagnosis,
            treatment and prevention of diseases of the eye and visual system.
            The eye, its surrounding structures and the visual system can be
            affected by a number of clinical conditions. Ophthalmology involves
            diagnosis and therapy of such conditions, along with microsurgery.
          </div>
        )}

        {dept_num == "3" && (
          <div className="data">
            <div className="headings">
              <h3>
                <b>Department of Orthopaedy</b>{" "}
              </h3>
            </div>
            The branch of surgery concerned with disorders of the spine and
            joints and the repair of deformities of these parts. Orthopaedic
            surgeons specialise in surgical treatments for problems caused by
            disease and injury (trauma) in the bones, joints and other
            structures involved in making the body move. Most orthopaedic
            surgeons specialise in particular procedures or areas of the body.
          </div>
        )}

        {dept_num == "4" && (
          <div className="data">
            <div className="headings">
              <h3>
                <b>Department of Gynaecology</b>{" "}
              </h3>
            </div>
            A gynecologist is a doctor who specializes in female reproductive
            health. They diagnose and treat issues related to the female
            reproductive tract. This includes the uterus, fallopian tubes, and
            ovaries and breasts. Anyone with female organs may see a
            gynecologist. 80% of those who see one are between 15 to 45 years
            old. Gynecologists give reproductive and sexual health services that
            include pelvic exams, Pap tests, cancer screenings, and testing and
            treatment for vaginal infections. They diagnose and treat
            reproductive system disorders such as endometriosis, infertility,
            ovarian cysts, and pelvic pain. They may also care for people with
            ovarian, cervical, and other reproductive cancers.
          </div>
        )}

        {dept_num == "8" && (
          <div className="data">
            <div className="headings">
              <h3>
                <b>Department of Gastroenterology</b>{" "}
              </h3>
            </div>
            Gastroenterology is the medical speciality that investigates and
            treats problems with the gut (gastro-intestinal tract), including
            the oesophagus (gullet), stomach, small bowel, colon (large bowel),
            pancreas, liver and gallbladder. Common reasons to be referred to
            the department. Trained gastroenterologists develop and run
            endoscopy services for diagnostic, therapeutic and screening
            endoscopy. All specialists are competent at upper gastrointestinal
            (GI) endoscopy. Most will be trained in lower GI endoscopy (flexible
            sigmoidoscopy and colonoscopy). Some will have had additional
            training in hepatobiliary endoscopy (ERCP) or small bowel endoscopy
            (wireless capsule endoscopy or enteroscopy). Most will participate
            in acute gastroenterology admissions and manage a broad range of
            gastrointestinal disease, either in outpatients or following
            admission.
          </div>
        )}
      </div>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </GenericLayout>
  );
};

export default FirstPage;
