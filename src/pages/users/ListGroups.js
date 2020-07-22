import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";

const ListGroups = () => {
  return (
    <div>
      <div className="col-span-12 mt-8">
        <div className="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Groups" />
          <Card cardTitle="116,000" cardBody="Banned" />
          <Card cardTitle="116,000" cardBody="Published" />
        </div>
      </div>
      <div className="mt-20">
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default ListGroups;
