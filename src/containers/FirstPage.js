import React, { useState } from "react";
import TheLayout2 from "../containers/TheLayout2";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useHistory } from "react-router-dom";
import Carousels from "../views/base/carousels/Carousels";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PanToolIcon from "@material-ui/icons/PanTool";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";

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
import { CButton } from "@coreui/react";
import { Collapse } from "antd";
import { Grid } from "@material-ui/core/";

function callback(key) {
  console.log(key);
}

const { Panel } = Collapse;
const { Option } = Select;

const FirstPage = () => {
  const [primary, setPrimary] = useState(false);
  const history = useHistory();
  const history1 = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleEmergency = () => {
    history.push("/Emergency");
  };
  const text = `
Some news ... some news
`;

  return (
    <TheLayout2>
      <div className="margin-top container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div class="card text-center">
                  <div class="card-body">
                    <h5 class="card-title">
                      {" "}
                      <PriorityHighIcon />
                      Emergency <PriorityHighIcon />
                    </h5>
                    <p class="card-text"></p>

                    <Button type="primary" ghost onClick={handleEmergency}>
                      Click me
                    </Button>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div class="card text-center">
                  <div class="card-body">
                    <h5 class="card-title">
                      <DateRangeIcon /> Book an appointment
                    </h5>
                    <p class="card-text">{/* <DateRangeIcon /> */}</p>
                    <Button type="primary" ghost onClick={handleLogin}>
                      Click me
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
        </div>
      </div>

      <h3 class=" display-4 text-primary ml-3 my-3 text-center">Departments</h3>

      {/* <div className="row">
        <section id="icon-boxes" class="py-3 mt-3 text-center">
          <div className="col-md-3">
            <div class="card ">
              <div class="card-body">
                <h3>
                  <FavoriteBorderIcon />
                  Cardiology
                </h3>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div class="card ">
              <div class="card-body">
                <h3>
                  {" "}
                  <VisibilityIcon /> Ophthalmology
                </h3>
              </div>
            </div>
          </div>

          <div class="card ">
            <div class="card-body">
              <i class="fa fa-pencil-square mb-3 text-dark"></i>
              <h3>
                {" "}
                <PanToolIcon /> Orthopaedy
              </h3>
            </div>
          </div>

          <div class="card ">
            <div class="card-body">
              <i class="fa fa-pencil-square mb-3 text-dark"></i>
              <h3>
                <PregnantWomanIcon /> Gynaecology
              </h3>
            </div>
          </div>
        </section>
      </div> */}

      <Grid container spacing={24}>
        <Grid item md={3}>
          <div class="card ">
            <div class="card-body">
              <h3>
                <FavoriteBorderIcon />
                Cardiology
              </h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div class="card ">
            <div class="card-body">
              <h3>
                {" "}
                <VisibilityIcon /> Ophthalmology
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
                <PanToolIcon /> Orthopaedy
              </h3>
            </div>
          </div>
        </Grid>
        <Grid item md={3}>
          <div class="card ">
            <div class="card-body">
              <i class="fa fa-pencil-square mb-3 text-dark"></i>
              <h3>
                <PregnantWomanIcon /> Gynaecology
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>

      <div className="w-100 text-center mb-3 ">
        <div className="d-inline-flex">
          <Select
            className="ml-5"
            defaultValue="Select a department"
            style={{ width: 240 }}
            // onChange={handleChange}
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
    </TheLayout2>
  );
};

export default FirstPage;
