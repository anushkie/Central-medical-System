import React from "react";
import CIcon from "@coreui/icons-react";

const _navDoctor = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["DOCTOR'S PANEL"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Home",
    to: "/docHome",
    icon: "cil-notes",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Appointment Requests",
    to: "/appointmentRequest",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Patient Log",
    to: "/patientLog",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Prescriptions",
    to: "/issuePrescription",
    icon: "cil-notes",
  },

  {
    _tag: "CSidebarNavTitle",
    _children: ["BOUQUET OF BENEFITS"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Apply for Leaves",
    to: "/leaves",
    icon: "cil-notes",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Salary Slip",
    to: "/salary",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Benefits",
    to: "/benefits",
    icon: "cil-notes",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Pension",
    to: "/pension",
    icon: "cil-notes",
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
        icon: "cil-heart",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Gynaecology",
        to: "/dashboard",
        icon: "cil-heart",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Paediatrics",
        to: "/dashboard",
        icon: "cil-heart",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Psychiatry",
        to: "/dashboard",
        icon: "cil-heart",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Dental",
        to: "/dashboard",
        icon: "cil-heart",
      },
      {
        _tag: "CSidebarNavItem",
        name: "ENT",
        to: "/dashboard",
        icon: "cil-heart",
      },
    ],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Your Profile",
    to: "/profile",
    icon: "cil-heart",
  },
];

export default _navDoctor;
