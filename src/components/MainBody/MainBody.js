import React from "react";

import RouterPage from "../../pages/RouterPage";
import TopBar from "../topbar/TopBar";
import CustomBreadcrumb from "../breadcrumb/CustomBreadcrumb";

function MainBody() {
  return (
    <div className="content">
      {/* <TopBar /> */}
      {/* <CustomBreadcrumb /> */}
      <hr className="mb-3" />
      <RouterPage />
    </div>
  );
}

export default MainBody;
