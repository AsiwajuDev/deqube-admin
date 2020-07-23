import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";

const ListSubscribers = () => {
  return (
    <div class="col-span-12 mt-8">
      <div class="grid grid-cols-6 gap-6 mt-5">
        <Card cardTitle="116,000" cardBody="Total Subscribers" />
        <Card cardTitle="116,000" cardBody="This Month Subscribers" />
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default ListSubscribers;
