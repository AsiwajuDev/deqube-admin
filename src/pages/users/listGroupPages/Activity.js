import React from "react";
import CustomTable from "../../../components/table/CustomTable";

export default function Activity() {
  return (
    <div>
      <div className="mt-10">
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
}
