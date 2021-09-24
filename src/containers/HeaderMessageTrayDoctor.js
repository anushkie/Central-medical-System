import React from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdownMssg = () => {
  const itemsCount = 4;
  return (
    <CDropdown inNav className="c-header-nav-item mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <CIcon name="cil-envelope-open" />
        <CBadge shape="pill" color="info">
          {itemsCount}
        </CBadge>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light">
          <strong>You have {itemsCount} messages</strong>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/dp.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-success"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Billie Johnson</small>
              <small className="text-muted float-right mt-1">Just now</small>
            </div>
            <div className="text-truncate font-weight-bold">
              <span className="fa fa-exclamation text-danger"></span> Question
              regarding the medicine
            </div>
            <div className="small text-muted text-truncate">
              I have a question regarding the medicine you have prescribed, am I
              supposed to take it BD or TDS? Thank you.
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/dp.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-warning"></span>
              </div>
            </div>
            <div>
              <small className="text-muted"> Charlie Puth</small>
              <small className="text-muted float-right mt-1">
                5 minutes ago
              </small>
            </div>
            <div className="text-truncate font-weight-bold">
              Not feeling well
            </div>
            <div className="small text-muted text-truncate">
              Hello Doc, I am not feeling well from last 2 days and cannot visit
              the clinic in person. Could you please spare a few
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/dp.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-danger"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Alex Kyson</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">
              Covid-19 Vaccination
            </div>
            <div className="small text-muted text-truncate">
              Dear Dan, I got my second jab 2 days back and I have started
              showing some corona virus symptoms. Please advice.
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/gora.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-info"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Dr. Matt</small>
              <small className="text-muted float-right mt-1">4:03 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">
              Cocktail making event
            </div>
            <div className="small text-muted text-truncate">
              Hey Doc! I am inviting you to the annual Cocktail making event
              which is held on the 31st of October. We would app
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#" className="text-center border-top">
          <strong>View all messages</strong>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdownMssg;
