import React from "react";

import RouterPage from "../../pages/RouterPage";
import Dashboard from "../../pages/dashboard/Dashboard";

function MainBody() {
  return (
    <div className="content">
      <div className="mt-10">
        {/* <Dashboard /> */}
        <RouterPage />
      </div>
    </div>
  );
}

export default MainBody;
