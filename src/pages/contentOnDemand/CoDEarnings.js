import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";

const CoDEarnings = () => {
  return (
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
  );
};

export default CoDEarnings;
