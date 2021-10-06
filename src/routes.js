import React from "react";

const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));

const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/pages/login/Dashboard"));
const Settings = React.lazy(() => import("./pages/Settings"));

const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));

const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const CovidPage = React.lazy(() => import("./containers/CovidPage"));
const RnD = React.lazy(() => import("./containers/RnD"));
const Pharmacy = React.lazy(() => import("./containers/Pharmacy"));
const Pregnancy = React.lazy(() => import("./containers/Pregnancy"));
const AboutUs = React.lazy(() => import("./containers/AboutUs"));
const Address = React.lazy(() => import("./containers/Address"));
const Admission = React.lazy(() => import("./containers/Admission"));
const Change = React.lazy(() => import("./containers/ChangeAppntmnt"));
const Insurance = React.lazy(() => import("./views/UserPages/Insurance"));
const Plan = React.lazy(() => import("./containers/Plan"));
const Prescription = React.lazy(() => import("./containers/Prescription"));
const Benefits = React.lazy(() => import("./containers/Benefits"));
const DocHome = React.lazy(() => import("./views/pages/login/DocHome"));
const DocProfile = React.lazy(() => import("./containers/DocProfile"));
const IssuePrescription = React.lazy(() =>
  import("./containers/IssuePrescription")
);
const Leaves = React.lazy(() => import("./containers/Leaves"));
const PatientLog = React.lazy(() => import("./containers/PatientLog"));
const Pension = React.lazy(() => import("./containers/Pension"));
const Salary = React.lazy(() => import("./containers/salary"));
const Appointment = React.lazy(() =>
  import("./containers/AppointmentRequests")
);
const Profile = React.lazy(() => import("./containers/AboutYou"));
const FirstPage = React.lazy(() => import("./containers/FirstPage"));
const HomePage = React.lazy(() => import("./containers/Home"));
const Emergency = React.lazy(() => import("./containers/Emergency"));

const routes = [
  { path: "/main", exact: true },
  { path: "/userAuthen", exact: true },

  { path: "/covid", exact: true, component: CovidPage },
  { path: "/rnd", exact: true, component: RnD },
  { path: "/pharmacy", exact: true, component: Pharmacy },
  { path: "/pregnancy", exact: true, component: Pregnancy },
  { path: "/aboutUs", exact: true, component: AboutUs },
  { path: "/home", exact: true, component: FirstPage },
  // {
  //   path: "/address",
  //   exact: true,
  //   name: "Address",
  //   render: (props) => <Address {...props} />,
  // },
  { path: "/admission", exact: true, component: Admission },
  { path: "/address", exact: true, component: Address },
  { path: "/emergency", exact: true, component: Emergency },

  {
    path: "/docProfile",
    exact: true,
    component: DocProfile,
  },
  {
    path: "/issuePrescription",
    exact: true,
    component: IssuePrescription,
  },
  {
    path: "/leaves",
    exact: true,
    component: Leaves,
  },
  {
    path: "/patientLog",
    exact: true,
    component: PatientLog,
  },
  { path: "/pension", exact: true, component: Pension },
  { path: "/salary", exact: true, component: Salary },
  {
    path: "/appointmentRequest",
    exact: true,
    component: Appointment,
  },
  {
    path: "/benefits",
    exact: true,
    component: Benefits,
  },
  { path: "/profile", exact: true, component: Profile },
  { path: "/userLogin", exact: true, component: HomePage },

  {
    path: "/docHome",
    exact: true,
    component: DocHome,
  },

  {
    path: "/change",
    exact: true,
    component: Change,
  },
  { path: "/insurance", exact: true, component: Insurance },
  { path: "/plan", exact: true, component: Plan },
  {
    path: "/prescription",
    exact: true,
    component: Prescription,
  },

  { path: "/dashboard", component: Dashboard },
  { path: "/settings", component: Settings },

  { path: "/theme", component: Colors, exact: true },
  { path: "/theme/colors", component: Colors },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },

  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/modals", name: "Modals", component: Modals },

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
