import React from "react";

import RouterPage from "../../pages/RouterPage";
import TopBar from "../topbar/TopBar";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";
import BreadCrumbs from "../breadcrumb/BreadCrumbs";

function MainBody() {
  return (
    <div className="content">
      <BreadCrumbs />
      {/* <TopBar /> */}
      {/* <CustomBreadcrumb /> */}
      <hr className="mb-3" />
      <RouterPage />
    </div>
  );
}

export default MainBody;
