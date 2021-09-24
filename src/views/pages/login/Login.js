import React from "react";
import { useEffect, useState } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "react-router-dom";
import dashboard from "./Dashboard";
import docDashboard from "./DocHome";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [primary, setPrimary] = useState(false);
  const history = useHistory();
  const [form_values, setState] = React.useState({
    username: "",
    password: "",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();

    var username = form_values.username;

    if (username == "anushka") {
      history.push("/dashboard");
      console.log(username);
    } else if (username == "dan") {
      history.push("/docHome");
    } else {
      history.push("/login");
    }
    console.log(form_values.password);
  };

  const changeName = (event) => {
    const values = form_values;
    values.username = event.target.value;
    setState(values);
  };

  const changePassword = (event) => {
    const values = form_values;
    values.password = event.target.value;
    setState(values);
  };
  return (
    <div className=" margin-top c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    /* onSubmit={HandleSubmit} */
                    onSubmit={(event) => HandleSubmit(event)}
                    // method="post"
                    // encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(event) => changeName(event)}
                        id="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(event) => changePassword(event)}
                        id="pwd"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          color="primary"
                          className="px-4"
                          // onClick={(event) => HandleSubmit(event)}
                          type="submit"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="big-size text-white bg-warning py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Don't have an account?
                      <AccountBoxIcon /> <ClearIcon />
                    </p>
                    <Link to="/register">
                      <CButton
                        color="danger"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
