import React from "react";
import TheLayout2 from "../containers/TheLayout2";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";

const RnD = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);

  return (
    <TheLayout2>
      <CRow>
        <div class=" margin-top col d-flex justify-content-center">
          <CCard>
            <CCardHeader>
              {" "}
              <h2>
                <center>Research and Develop</center>
              </h2>
            </CCardHeader>
            <CCardBody>
              {" "}
              <center className="changeSize">
                Research and Development is studying diseases and better ways
                the treat them. Clinical Research is when we are looking for a
                better way to treat an illness. This page gives you information
                about the different areas of research.
              </center>
            </CCardBody>
          </CCard>
        </div>

        <CCard>
          <CCardHeader>Developing the future</CCardHeader>
          <CCardBody>
            <center className="changeSize">
              We are a group pf doctors dedicated to improving health outcomes
              through research. We cover many disease areas including: Heart
              disease, cancer, diabetes, stroke, asthma, infectious diseases,
              kidney disease, liver disease, gastroenterology, pain management
              and many others. Research is the only way to improve our
              understanding of illness and gather evidence to develop better
              treatments for the future. Our research includes complex new drugs
              and treatments, new devices or procedures and even simple
              questionnaire studies. To do all this we need your help. We have
              developed a secure database called 'Consent4Consent' (C4C), this
              is a registry of volunteers who are willing to be contacted about
              future research projects.
              <br /> <br />
              Our reserach areas are based on the following:
              <ul>
                <li>Blood sciences</li>
                <li>Cardiology</li>
                <li>Breast cancer</li>
                <li>Myeloma Research</li>
                <li> Lymphoma Research</li>
                <li> Lymphoma Research</li>
                <li>Leukaemia /MDS/MPN</li>
                <li>Solid Tumour</li>
                <li>Dermatology</li>
                <li>Gastro Hepatologyresearch </li>
                <li>Infectious diseases</li>
                <li>Eye Research</li>
                <li> Pain Management</li>
                <li> Research Renal</li>
                <li>Research Rheumatology</li>
                <li> Musculo Skeletal</li>
                <li>Research Stroke Research</li>
              </ul>
            </center>
          </CCardBody>
          <CCol col="6" sm="1" md="2" xl className="mb-3 mb-xl-0">
            <CButton block color="primary">
              Get in touch
            </CButton>
          </CCol>
        </CCard>
      </CRow>
    </TheLayout2>
  );
};
export default RnD;
