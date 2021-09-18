import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
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
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
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

const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
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
  { path: "/main", exact: true, name: "Home" },
  { path: "/userAuthen", exact: true, name: "userAuth" },

  { path: "/covid", exact: true, name: "CovidPage", component: CovidPage },
  { path: "/rnd", exact: true, name: "RnD", component: RnD },
  { path: "/pharmacy", exact: true, name: "Pharmacy", component: Pharmacy },
  { path: "/pregnancy", exact: true, name: "Pregnancy", component: Pregnancy },
  { path: "/aboutUs", exact: true, name: "Your Profile", component: AboutUs },
  { path: "/home", exact: true, name: "Home Page", component: FirstPage },
  // {
  //   path: "/address",
  //   exact: true,
  //   name: "Address",
  //   render: (props) => <Address {...props} />,
  // },
  { path: "/admission", exact: true, name: "Admission", component: Admission },
  { path: "/address", exact: true, name: "Address", component: Address },
  { path: "/emergency", exact: true, name: "Address", component: Emergency },

  {
    path: "/docProfile",
    exact: true,
    name: "About You",
    component: DocProfile,
  },
  {
    path: "/issuePrescription",
    exact: true,
    name: "Prescription",
    component: IssuePrescription,
  },
  {
    path: "/leaves",
    exact: true,
    name: "Apply for a leave",
    component: Leaves,
  },
  {
    path: "/patientLog",
    exact: true,
    name: "Patient Log",
    component: PatientLog,
  },
  { path: "/pension", exact: true, name: "Pension", component: Pension },
  { path: "/salary", exact: true, name: "Salary", component: Salary },
  {
    path: "/appointmentRequest",
    exact: true,
    name: "Appointment Requests",
    component: Appointment,
  },
  {
    path: "/benefits",
    exact: true,
    name: "Employee Benefits",
    component: Benefits,
  },
  { path: "/profile", exact: true, name: "About you ", component: Profile },
  { path: "/userLogin", exact: true, name: "Login Page ", component: HomePage },

  {
    path: "/docHome",
    exact: true,
    name: "DoctorDashboard",
    component: DocHome,
  },

  {
    path: "/change",
    exact: true,
    name: "Change your appointment",
    component: Change,
  },
  { path: "/insurance", exact: true, name: "Insurance", component: Insurance },
  { path: "/plan", exact: true, name: "Plan visit", component: Plan },
  {
    path: "/prescription",
    exact: true,
    name: "Prescription",
    component: Prescription,
  },

  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/settings", name: "Settings", component: Settings },

  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
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
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;
