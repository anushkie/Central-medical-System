import React from "react";
import CIcon from "@coreui/icons-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPrescription } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Home",
    to: "/dashboard",
    icon: <FontAwesomeIcon icon={faHome} />,
    badge: {
      color: "info",
      text: "Welcome",
    },
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["BOOK AN APPOINTMENT"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Plan a visit",
    to: "/plan",
    icon: <FontAwesomeIcon icon={faCalendar} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "  Change your appointment",
    to: "/change",
    icon: <FontAwesomeIcon icon={faCalendarTimes} />,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["PERSONAL INFORMATION"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Prescriptions",
    to: "/prescription",
    icon: <FontAwesomeIcon icon={faPrescription} />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "        Address",
    to: "/address",
    icon: <FontAwesomeIcon icon={faMapMarker} />,
  },

  {
    _tag: "CSidebarNavItem",
    name: "Admissions",
    to: "/admission",
    icon: <FontAwesomeIcon icon={faHospitalUser} />,
  },
  {
    _tag: "CSidebarNavItem",
    name: "Your Profile",
    to: "/aboutUs",
    icon: <FontAwesomeIcon icon={faUser} />,
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
];

export default _nav;
