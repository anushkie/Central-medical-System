import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import UserLayout from "./containers/UserLayout";
import Dashboard from "./views/pages/login/Dashboard";
import Settings from "./pages/Settings";
import routes from "./routes";
import Address from "./containers/Address";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
// const TheLayout = React.lazy(() => import("./containers/TheLayout"));
const TheHome = React.lazy(() => import("./containers/FirstPage"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./containers/ManageRegistration"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

// const pages = [
//   {
//     path: "/dashboard",
//     exact: true,
//     name: "Dashboard",
//     render: (props) => <Dashboard {...props} />,
//   },
//   {
//     path: "/admision",
//     exact: true,
//     name: "Admission",
//     render: (props) => <Admission {...props} />,
//   },
//   // {
//   //   path: "/settings",
//   //   exact: true,
//   //   name: "Settings",
//   //   render: (props) => <Settings {...props} />,
//   // },
//   {
//     path: "/add",
//     exact: true,
//     name: "Address Test",
//     render: (props) => <Address {...props} />,
//   },
// ];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              exact
              path="/userAuthen"
              name="userAuth"
              render={(props) => <UserLayout {...props} />}
            />
            {routes.map((page) => (
              <Route
                exact
                path={page.path}
                name={page.name}
                component={page.component}
              />
            ))}
            <Route path="/" render={(props) => <TheHome {...props} />} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
