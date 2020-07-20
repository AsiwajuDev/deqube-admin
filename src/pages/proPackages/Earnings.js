import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";

const Earnings = () => {
  return (
    <div class="col-span-12 mt-8">
      <div class="grid grid-cols-9 gap-6 mt-5">
        <Card cardTitle="116,000" cardBody="Total Earnings" />
        <Card cardTitle="116,000" cardBody="This Month Earnings" />
      </div>
    </div>
  );
};

export default Earnings;
