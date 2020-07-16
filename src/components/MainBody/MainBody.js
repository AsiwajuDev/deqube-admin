import React from "react";

import RouterPage from "../../pages/RouterPage";
import TopBar from "../topbar/TopBar";

function MainBody() {
  return (
    <div className="content">
      <TopBar />
      <hr className="mb-3" />
      <RouterPage />
    </div>
  );
}

export default MainBody;
