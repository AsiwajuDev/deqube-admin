import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
// import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

// const data = {
//   start: "Content On Demand",
//   links: [
//     {
//       label: "CoD Earnings",
//       url: "/cod/cod-settings",
//     },
//   ],
// };

const CoDEarnings = () => {
  return (
    <div>
      {/* <CustomBreadcrumb data={data} /> */}
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Total Earnings" />
          <Card cardTitle="116,000" cardBody="Earnings This Month" />
          <Card cardTitle="116,000" cardBody="Average" />
        </div>
        <div style={{ marginTop: "50px" }}>
          <CustomTable />
        </div>
      </div>
    </div>
  );
};

export default CoDEarnings;
