import React from "react";
import { Link } from "react-router-dom";

import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

// const data = {
//   start: "Ads",
//   links: [
//     {
//       label: "System Ads",
//       url: "/ads/system-ads",
//     },
//   ],
// };

const SystemAds = () => {
  return (
    <div>
      {/* <CustomBreadcrumb data={data} /> */}
      <div className="flex justify-end mt-3">
        <div className="intro-y flex justify-center col-span-12 items-center">
          <Link
            to="/ads/create-system-ads"
            className="bg-red-700 text-white font-bold py-2 mr-3 px-4 rounded"
            value="Add New System Ads"
          >
            Add New System Ads
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default SystemAds;
