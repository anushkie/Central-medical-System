import "antd/dist/antd.css";
import React, { useState } from "react";
import Home2 from "./HomePg2";
import Login from "src/views/pages/login/Login";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { Link } from "react-router-dom";
import { Button, Radio } from "antd";
import { useHistory } from "react-router-dom";
import TheLayout2 from "../containers/GenericLayout";

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

const Modals = () => {
  const [primary, setPrimary] = useState(false);
  const history = useHistory();
  const history1 = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };
  const handleRegister = () => {
    history1.push("/register");
  };

  return (
    <TheLayout2>
      {/* <div className="margin-top w-100 text-center mb-3 ">
        <CButton
          color="primary"
          onClick={() => setPrimary(!primary)}
          className="mr-1"
        >
          {" "}
          Medic
        </CButton>

        <CButton
          component={Link}
          to="/login"
          color="primary"
          onClick={() => setPrimary(!primary)}
          className="mr-1"
        >
          {" "}
          Patient
        </CButton> */}

      <CModal
        show={primary}
        onClose={() => setPrimary(!primary)}
        color="primary"
      >
        <CModalHeader closeButton>
          <CModalTitle>
            <TouchAppIcon /> Please select
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="site-button-ghost-wrapper">
            {" "}
            <center>
              <Button type="primary" ghost onClick={handleLogin}>
                Login
              </Button>
              <Button type="primary" ghost onClick={handleRegister}>
                Register
              </Button>
            </center>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setPrimary(!primary)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </TheLayout2>
  );
};

export default Modals;
