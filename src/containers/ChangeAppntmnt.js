import React from "react";
import UserLayout from "../containers/UserLayout";
import Change from "../views/UserPages/Change";

const DashboardPage = () => {
  return (
    <UserLayout>
      <div className="margin-top">
        <Change />{" "}
      </div>
    </UserLayout>
  );
};

export default DashboardPage;
