import React from "react";
import CIcon from "@coreui/icons-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

import { faCalendarTimes } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { faDeaf } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const _navDoctor = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["DOCTOR'S PANEL"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Home",
    to: "/docHome",
    icon: <FontAwesomeIcon icon={faHome} />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Appointment Requests",
    to: "/appointmentRequest",
    icon: <FontAwesomeIcon icon={faCalendarPlus} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Patient Log",
    to: "/patientLog",
    icon: <FontAwesomeIcon icon={faUserFriends} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Prescriptions",
    to: "/issuePrescription",
    icon: <FontAwesomeIcon icon={faPrescription} />,
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["BOUQUET OF BENEFITS"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Apply for Leaves",
    to: "/leaves",
    icon: <FontAwesomeIcon icon={faUmbrellaBeach} />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Salary Slip",
    to: "/salary",
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Benefits",
    to: "/benefits",
    icon: <FontAwesomeIcon icon={faUmbrella} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Pension",
    to: "/pension",
    icon: <FontAwesomeIcon icon={faMoneyCheck} />,
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["LIST OF DEPARTMENTS"],
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Departments",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Cardiology",
        to: "/dashboard",
        icon: <FontAwesomeIcon icon={faHeartbeat} />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Gynaecology",
        to: "/dashboard",
        icon: <FontAwesomeIcon icon={faBabyCarriage} />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Paediatrics",
        to: "/dashboard",
        icon: <FontAwesomeIcon icon={faBaby} />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Psychiatry",
        to: "/dashboard",
        icon: <FontAwesomeIcon icon={faBrain} />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dental",
        to: "/dashboard",
        icon: <FontAwesomeIcon icon={faTooth} />,
      },
      {
        _tag: "CSidebarNavItem",
        name: "ENT",
        to: "/dashboard",
        icon: <FontAwesomeIcon icon={faDeaf} />,
      },
    ],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Your Profile",
    to: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];

export default _navDoctor;
