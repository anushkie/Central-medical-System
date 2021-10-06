import React from "react";
import GenericLayout from "../containers/GenericLayout";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
} from "@coreui/react";

const RnD = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showCard, setShowCard] = React.useState(true);

  return (
    <GenericLayout>
      <CRow>
        <div class=" margin-top col d-flex justify-content-center">
          <h2>
            <center>Research and Develop</center>
          </h2>
        </div>
      </CRow>
      <center className="changeSize">
        Research and Development is studying diseases and better ways the treat
        them. Clinical Research is when we are looking for a better way to treat
        an illness. This page gives you information about the different areas of
        research.
      </center>{" "}
      <br /> <br />
      <CRow>
        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Developing the future </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                We are a group pf doctors dedicated to improving health outcomes
                through research. We cover many disease areas including: Heart
                disease, cancer, diabetes, stroke, asthma, infectious diseases,
                kidney disease, liver disease, gastroenterology, pain management
                and many others. Research is the only way to improve our
                understanding of illness and gather evidence to develop better
                treatments for the future. Our research includes complex new
                drugs and treatments, new devices or procedures and even simple
                questionnaire studies. To do all this we need your help. We have
                developed a secure database called 'Consent4Consent' (C4C), this
                is a registry of volunteers who are willing to be contacted
                about future research projects. Research enables us to learn
                more about disease, improve the quality of our patient care and
                develop better treatments. But these important projects can only
                go ahead with the support of research participants. These
                volunteers often have a known health-condition but some projects
                rely upon healthy members of the public to take part.
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Studies and trials </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                We are involved with different types of health research studies:{" "}
                <br />
                <i>Clinical trials</i>. These investigate a drug, surgery or
                medical device in healthy volunteers or people who have a
                specific disease. <br />
                <i>Genetic studies.</i> These aim to find the role of genes in
                different diseases. <br />
                <i>Behavioural studies.</i> These test how people act in
                different ways. <br /> <i>Observational studies. </i> This is
                where a group of people is observed (sometimes for many years).{" "}
                <br /> <i>Physiological studies.</i>
                These aim to better understand how the human body functions.{" "}
                <br />
                <i>Prevention studies.</i> These test ways to prevent specific
                conditions or diseases. <br /> <i>Public health research.</i>{" "}
                This type of research aims to improve the health and well-being
                of people from a population-level perspective. <br />
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Our Areas of Research</center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Our reserach areas are based on the following: <br />
                Blood sciences
                <br />
                Cardiology
                <br />
                Breast cancer <br />
                Myeloma Research <br />
                Lymphoma Research <br />
                Lymphoma Research <br />
                Leukaemia /MDS/MPN <br />
                Solid Tumour <br />
                Dermatology <br />
                Gastro Hepatologyresearch <br />
              </center>
            </CCardBody>
          </CCard>
        </div>
      </CRow>
      {/* <div className="col-md-12 text-center">
          <div className="w-100">
            <CButton className="w-50" block color="primary">
              Get in touch
            </CButton>
          </div>
        </div> */}
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <center>
            <CButton className="w-50" block color="primary">
              Get in touch
            </CButton>
          </center>
        </div>

        <div className="col-md-4"></div>
      </div>
      {/* <CCol col="3" sm="1" md="2" xl className="mb-3 mb-xl-0"></CCol> */}
    </GenericLayout>
  );
};
export default RnD;
