import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
// import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

// const data = {
//   start: "Ads",
//   links: [
//     {
//       label: "User Ads",
//       url: "/ads/user-ads",
//     },
//   ],
// };

const UserAds = () => {
  return (
    <div>
      {/* <CustomBreadcrumb data={data} />{" "} */}
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Ads" />
          <Card cardTitle="116,000" cardBody="Ads Running" />
          <Card cardTitle="116,000" cardBody="Inactive Ads" />
        </div>
        <div className="mt-10">
          <CustomTable pagination search pagerows />
        </div>
      </div>
    </div>
  );
};

export default UserAds;
