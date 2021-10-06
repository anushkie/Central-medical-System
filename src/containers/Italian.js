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
        <div class=" margin-top col d-flex justify-content-center">
          <h2>
            <center>Ricerca e sviluppo</center>
          </h2>
        </div>
      </CRow>
      <center className="changeSize">
        Ricerca e sviluppo studia le malattie e le migliori modi di affrontarli.
        La ricerca clinica è quando si ricerca un modo migliore per curare una
        malattia. Questa pagina ti dà informazioni sui diversi ambiti di
        ricerca.
      </center>{" "}
      <br /> <br />
      <CRow>
        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Sviluppare il futuro </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Siamo un gruppo di medici dediti al miglioramento risultati
                sulla salute attraverso la ricerca. Ne copriamo molti aree
                patologiche, tra cui: cancro, diabete, incidente
                cerebrovascolare, asma, malattie infettive, malattia malattie
                renali, epatiche, gastroenterologia, gestione di dolore e molti
                altri. La ricerca è l'unico modo migliorare la nostra
                comprensione della malattia e raccogliere prove per sviluppare
                meglio i trattamenti per il futuro. I nostri la ricerca include
                nuovi farmaci e trattamenti, nuovi dispositivi o procedure e
                anche semplici studi di indagine. Per fare tutto questo abbiamo
                bisogno del tuo Aiuto. Abbiamo sviluppato un database sicuro
                chiamato 'Consent4Consent' (C4C), questo è un registro di
                volontari che desidera essere contattato per futuri progetti di
                ricerca. La ricerca ci permette di saperne di più sulla
                malattia, migliorare la qualità della nostra cura del paziente e
                sviluppare trattamenti migliori. Ma questi importanti progetti
                non possono che andando avanti con il sostegno dei partecipanti
                al Ricerca. Questi volontari hanno spesso un problema di salute
                noto ma alcuni progetti si basano su membri sani del pubblico a
                partecipare.
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Studi e prove </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Siamo coinvolti in diversi tipi di studi di ricerca sanitaria:{" "}
                <br />
                <i> Studi clinici </i>. Stanno indagando su un farmaco,
                intervento chirurgico o dispositivo medico nei pazienti
                volontari sani o persone con malattie specifiche. <br />
                <i> Studi genetici. </i> Mirano a trovare il ruolo di geni in
                diverse malattie. <br />
                <i> Studi comportamentali. </i> Questi mettono alla prova come
                le persone agiscono in modi diversi. <br /> {""}
                <i> Studi osservazionali. </i> Qui è dove un gruppo di le
                persone vengono osservate (a volte per molti anni). {""}
                <br /> <i> Studi fisiologici. </i>
                Questi mirano a capire meglio come funziona il corpo umano.{" "}
                <br />
                <i> Studi di prevenzione. </i> Questi metodi di prova per
                prevenire condizioni o malattie. <br /> {""}
                <i> Ricerca sulla salute pubblica. </i> Questo tipo di ricerca
                mira a migliorare la salute e il benessere delle persone dal
                punto di vista Popolazione. <br />
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Le nostre aree di ricerca</center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Le nostre aree di ricerca si basano su quanto segue: {""}
                <br />
                Scienze del sangue
                <br />
                Cardiologia
                <br />
                Cancro al seno <br />
                Ricerca sul mieloma <br />
                Ricerca sul linfoma <br />
                Ricerca sul linfoma <br />
                Leucemia / MDS / MPN <br />
                Tumore solido <br />
                Dermatologia <br />
                Ricerca in gastroepatologia <br />
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
