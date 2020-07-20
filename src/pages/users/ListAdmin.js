import React from "react";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";

const ListAdmin = () => {
  return (
    <div>
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Admin" />
          <Card cardTitle="116,000" cardBody="Director" />
          <Card cardTitle="116,000" cardBody="Other Roles" />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default ListAdmin;
