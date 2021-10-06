import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem,
} from "@coreui/react";
import TheLayout2 from "../containers/GenericLayout";

const CovidPage = ({ match }) => {
  return (
    <TheLayout2>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CJumbotron className=" margin-top border">
                <h1 className="display-3">Covid-19</h1>
                <p className="lead">
                  COVID-19 is an illness caused by a virus called coronavirus.
                </p>
                <hr className="lead " />
                <p className="lead">
                  Most people infected with the COVID-19 virus will experience
                  mild to moderate respiratory illness and recover without
                  requiring special treatment. Older people, and those with
                  underlying medical problems like cardiovascular disease,
                  diabetes, chronic respiratory disease, and cancer are more
                  likely to develop serious illness. The best way to prevent and
                  slow down transmission is to be well informed about the
                  COVID-19 virus, the disease it causes and how it spreads.
                  Protect yourself and others from infection by washing your
                  hands or using an alcohol based rub frequently and not
                  touching your face. The COVID-19 virus spreads primarily
                  through droplets of saliva or discharge from the nose when an
                  infected person coughs or sneezes, so it’s important that you
                  also practice respiratory etiquette (for example, by coughing
                  into a flexed elbow).
                </p>
                <p className="lead">
                  <CButton color="primary" size="lg">
                    Learn More
                  </CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardBody>
              <CJumbotron fluid>
                <CContainer fluid>
                  <h6 className="display-4">
                    Self-isolation and treating symptoms of coronavirus
                    (COVID-19)
                  </h6>
                  <p className="lead">
                    Self-isolate immediately if: you have any symptoms of
                    COVID-19 (a high temperature, a new, continuous cough or a
                    loss or change to your sense of smell or taste) you've
                    tested positive for COVID-19 – this means you have the virus
                    someone you live with has symptoms or tested positive. To{" "}
                    <b>prevent</b> infection and to slow transmission of
                    COVID-19, do the following:
                    <ul>
                      <li>
                        Wash your hands regularly with soap and water, or clean
                        them with alcohol-based hand rub.
                      </li>
                      <li>
                        {" "}
                        Maintain at least 1 metre distance between you and
                        people coughing or sneezing.
                      </li>
                      <li>
                        Cover your mouth and nose when coughing or sneezing.
                      </li>
                      <li>Stay home if you feel unwell.</li>
                      <li>
                        Refrain from smoking and other activities that weaken
                        the lungs.
                      </li>
                      <li>
                        Practice physical distancing by avoiding unnecessary
                        travel and staying away from large groups of people.
                      </li>{" "}
                    </ul>
                    <CButton color="primary" size="lg">
                      Learn More
                    </CButton>
                  </p>
                </CContainer>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardBody>
              <CEmbed>
                <CEmbedItem src="https://www.youtube.com/embed/sHP0UIdZyI4?rel=0" />
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </TheLayout2>
  );
};
export default CovidPage;
