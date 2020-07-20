import React from "react";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";

const EventCategory = () => {
  return (
    <div>
      <div class="col-span-12 mt-8"></div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default EventCategory;
