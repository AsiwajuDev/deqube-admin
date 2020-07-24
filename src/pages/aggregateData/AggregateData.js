import React from "react";
import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";

export default function AggregateData() {
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">Aggregate Data</div>
      <hr className="mb-3" />
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Mark All As Safe"
        />
      </div>
      <div className="">
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
}
