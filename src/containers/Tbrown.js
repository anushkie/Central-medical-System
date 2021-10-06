import React from "react";
import GenericLayout from "../containers/AccessibleLAyout";

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
        <div class="lastColor margin-top col d-flex justify-content-center">
          <h2>
            <center className="lastColor">Investigación y desarrollo</center>
          </h2>
        </div>
      </CRow>
      <center className="changeSize lastColor">
        La investigación y el desarrollo estudia las enfermedades y las mejores
        formas de tratarlas. La investigación clínica es cuando busca una mejor
        manera de curar una enfermedad. Esta página le brinda información sobre
        las diferentes áreas de Investigar.
      </center>{" "}
      <br /> <br />
      <CRow>
        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center className="lastColor">
                  Desarrollar el futuro{" "}
                </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize lastColor">
                Somos un grupo de médicos dedicados a mejorar resultados sobre
                la salud a través de la investigación. Cubrimos muchas áreas
                patológico, incluyendo: cáncer, diabetes, accidente
                cerebrovascular, asma, enfermedades infecciosas, enfermedades
                patológicas riñón, hígado, gastroenterología, manejo del dolor y
                muchos otros. La investigación es la única forma de mejorar la
                nuestra comprender la enfermedad y reunir pruebas para
                desarrollar mejores tratamientos para el futuro. Nuestra
                investigación incluye nuevos medicamentos y tratamientos, nuevos
                dispositivos o procedimientos e incluso estudios de encuestas
                simples. Para hacer todo esto tenemos necesito tu ayuda. Hemos
                desarrollado una base de datos segura llamado 'Consent4Consent'
                (C4C), este es un registro de voluntarios a los que les gustaría
                ser contactados para proyectos futuros Investigar. La
                investigación nos permite aprender más sobre la enfermedad,
                mejorar la calidad de nuestra atención al paciente e Desarrollar
                mejores tratamientos. Pero estos importantes proyectos solo
                pueden avanzar con el apoyo de los participantes a la
                investigación. Estos voluntarios suelen tener problemas de
                salud. conocidos, pero algunos proyectos se basan en miembros
                sanos del público y participar.
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center className="lastColor">Estudios y pruebas</center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize lastColor">
                Participamos en diferentes tipos de estudios de investigación en
                salud: <br />
                <i> Estudios clínicos</i>. Están investigando una droga, cirugía
                o dispositivo médico en pacientes voluntarios sanos o personas
                con enfermedades específicas. <br />
                <i>Estudios genéticos. </i> Su objetivo es encontrar el papel de
                los genes en diferentes enfermedades.
                <br />
                <i> Estudios de comportamiento . </i> Estos prueban cómo la
                gente actúa de diferentes formas. <br /> {""}
                <i> Estudios observacionales. </i> Aquí es donde un montón de le
                se observa a las personas (a veces durante muchos años). {""}
                <br /> <i> Estudios fisiologicos. </i>
                Estos tienen como objetivo comprender mejor cómo funciona el
                cuerpo humano.. <br />
                <i> Estudios de prevención. </i> Estos métodos de prueba para
                prevenir condiciones o enfermedades. <br /> {""}
                <i> Investigación en salud pública. </i>Este tipo de
                investigación tiene como objetivo mejorar la salud y el
                bienestar de las personas desde Punto de vista de la población.{" "}
                <br />
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center className="lastColor">
                  Nuestras áreas de investigación
                </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize lastColor">
                Nuestras áreas de investigación se basan en lo siguiente: {""}
                <br />
                Ciencias de la sangre
                <br />
                Cardiología
                <br />
                Cáncer de mama <br />
                Investigación sobre mieloma <br />
                Investigación sobre linfomas <br />
                Investigación sobre linfomas <br />
                Leucemia / MDS / MPN <br />
                Tumor sólido <br />
                Dermatología <br />
                Investigación en gastrohepatología <br />
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
            <CButton className="w-50 lastColor" block color="light">
              Mettiti in contatto
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
