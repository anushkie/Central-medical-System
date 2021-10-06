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
            <center>Recherche et développement</center>
          </h2>
        </div>
      </CRow>
      <center className="changeSize">
        La recherche et le développement étudient les maladies et les meilleures
        façons de les traiter. La recherche clinique, c'est quand nous cherchons
        une meilleure façon de traiter une maladie. Cette page vous donne des
        informations sur les différents domaines de recherche.
      </center>{" "}
      <br /> <br />
      <CRow>
        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Développer l'avenir </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Nous sommes un groupe de médecins dédiés à l'amélioration des
                résultats de santé par la recherche. Nous couvrons de nombreux
                domaines pathologiques, notamment : cancer, diabète, accident
                vasculaire cérébral, asthme, maladies infectieuses, maladie
                rénale, maladie du foie, gastro-entérologie, gestion de la
                douleur et plein d'autres. La recherche est le seul moyen
                d'améliorer notre compréhension de la maladie et recueillir des
                preuves pour mieux développer traitements pour l'avenir. Notre
                recherche comprend de nouvelles médicaments et traitements,
                nouveaux dispositifs ou procédures et même de simples études par
                questionnaire. Pour faire tout cela, nous avons besoin de votre
                aide. Nous avons développé une base de données sécurisée appelée
                'Consent4Consent' (C4C), cette est un registre de bénévoles qui
                souhaitent être contactés sur les futurs projets de recherche.
                La recherche nous permet d'apprendre plus sur la maladie,
                améliorer la qualité de nos soins aux patients et développer de
                meilleurs traitements. Mais ces projets importants ne peuvent
                que aller de l'avant avec le soutien des participants à la
                recherche. Ces les volontaires ont souvent un problème de santé
                connu mais certains projets compter sur des membres sains du
                public pour y participer.
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Études et essais </center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Nous sommes impliqués dans différents types d'études de
                recherche en santé : <br />
                <i>Essais cliniques</i>. Ceux-ci enquêtent sur un médicament,
                une intervention chirurgicale ou dispositif médical chez des
                volontaires sains ou des personnes maladie spécifique. <br />
                <i>Études génétiques.</i> Elles visent à trouver le rôle des
                gènes dans différentes maladies. <br />
                <i>Études comportementales.</i> Celles-ci testent comment les
                gens agissent dans différentes façons. <br />{" "}
                <i>Études observationnelles. </i> C'est où un groupe de
                personnes est observé (parfois pendant de nombreuses années).{" "}
                <br /> <i>Études physiologiques.</i>
                Ceux-ci visent à mieux comprendre le fonctionnement du corps
                humain. <br />
                <i>Études de prévention.</i> Ces méthodes de test pour prévenir
                des conditions ou maladies. <br />{" "}
                <i>Recherche en santé publique.</i> Ce type de recherche vise à
                améliorer la santé et le bien-être des personnes du point de vue
                de la population. <br />
              </center>
            </CCardBody>
          </CCard>
        </div>

        <div className="col-md-4">
          <CCard>
            <CCardHeader>
              <h2>
                {" "}
                <center>Nos domaines de recherche</center>{" "}
              </h2>
            </CCardHeader>
            <CCardBody>
              <center className="changeSize">
                Nos domaines de recherche sont basés sur les éléments suivants :{" "}
                <br />
                Sciences du sang
                <br />
                Cardiologie
                <br />
                Cancer du sein <br />
                Recherche sur le myélome <br />
                Recherche sur le lymphome <br />
                Recherche sur le lymphome <br />
                Leucémie /SMD/MPN <br />
                Tumeur solide <br />
                Dermatologie <br />
                Recherche Gastro Hépatologie <br />
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
              Entrer en contact
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
