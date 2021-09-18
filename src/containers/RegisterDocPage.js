import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { ManageReg } from "./ManageRegistration";
import CIcon from "@coreui/icons-react";

const Register = (props) => {
  const initialFieldValue = {
    fullname: " ",
    email: "",
    password: "",
  };

  var [values, setValues] = useState(initialFieldValue);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    props.addOrEdit(values);
  };
  // const[user, setUser] = useState({
  //   name: " ",
  //   email: "",
  //   password: "",
  // });

  // let name, value;

  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUser({...user, [name] : value});
  // }

  // const postData = async(e) => {
  //   e.preventDefault();

  //   const {
  //     name,
  //     email,
  //     password,
  //   } = user;

  //   const response = await fetch("https://central-medical-services-db-default-rtdb.firebaseio.com/UserData.json",
  //   method="POST",
  //   headers= {
  //       "Content-Type": "application/json",
  //   },
  //   body= JSON.stringify({
  //     name,
  //     email,
  //     password,
  //   }),
  //   );
  // }

  return (
    <div className=" margin-top c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleFormSubmit}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="fullname"
                      placeholder="Username"
                      // value={user.name}
                      autoComplete="username"
                      value={values.fullname}
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      name="email"
                      placeholder="Email"
                      // value={user.email}
                      value={values.email}
                      autoComplete="email"
                      onChange={handleInputChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      autoComplete="new-password"
                      onChange={handleInputChange}
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
                      name="repPassword"
                      placeholder="Repeat password  "
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CButton color="success" block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton
                      className="btn-twitter mb-1"
                      block
                      // onClick={postData}
                    >
                      <span>twitter</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
