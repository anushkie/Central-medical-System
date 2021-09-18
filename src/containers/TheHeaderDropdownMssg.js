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
                  src={"imgs/d3.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-success"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Dr. Pretie Zinta</small>
              <small className="text-muted float-right mt-1">Just now</small>
            </div>
            <div className="text-truncate font-weight-bold">
              <span className="fa fa-exclamation text-danger"></span> Important
              message
            </div>
            <div className="small text-muted text-truncate">
              This is regarding your last vaccination for flu allergy. As per
              our records, you are due a booster shot.
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/d1.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-warning"></span>
              </div>
            </div>
            <div>
              <small className="text-muted"> Pratyush Ban</small>
              <small className="text-muted float-right mt-1">
                5 minutes ago
              </small>
            </div>
            <div className="text-truncate font-weight-bold">
              Your profile with our clinic
            </div>
            <div className="small text-muted text-truncate">
              As per our records, we would like to confirm your address details.
              There were a few changes in our system.
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/d4.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-danger"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Vaishali Buttan</small>
              <small className="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div className="text-truncate font-weight-bold">
              Covid-19 Vaccination
            </div>
            <div className="small text-muted text-truncate">
              Dear Patient, it has already been 8 weeks from your 1st shot of
              Pfizer. When would you like a 2nd shot?
            </div>
          </div>
        </CDropdownItem>

        <CDropdownItem href="#">
          <div className="message">
            <div className="pt-3 mr-3 float-left">
              <div className="c-avatar">
                <CImg
                  src={"imgs/d2.jpg"}
                  className="c-avatar-img"
                  alt="Doctor's image"
                />
                <span className="c-avatar-status bg-info"></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Dr. Hrithik Roshan</small>
              <small className="text-muted float-right mt-1">4:03 AM</small>
            </div>
            <div className="text-truncate font-weight-bold">
              Your blood test reports
            </div>
            <div className="small text-muted text-truncate">
              I have recieved your reports from the lab and would like to
              discuss it it person. When
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
