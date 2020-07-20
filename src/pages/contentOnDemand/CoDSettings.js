import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";

const CoDSettings = () => {
  return (
    <div class="col-span-12 mt-8">
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default CoDSettings;
