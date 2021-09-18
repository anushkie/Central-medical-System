import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Home",
    to: "/dashboard",
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon" />,
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
    icon: "cil-calendar",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Change your appointment",
    to: "/change",
    icon: "cil-calendar",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["PERSONAL INFORMATION"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Prescriptions",
    to: "/prescription",
    icon: "cil-notes",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Address",
    to: "/address",
    icon: "cil-house",
  },

  {
    _tag: "CSidebarNavItem",
    name: "Admissions",
    to: "/admission",
    icon: "cil-hospital",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Your Profile",
    to: "/aboutUs",
    icon: "cil-hospital",
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
];

export default _nav;
