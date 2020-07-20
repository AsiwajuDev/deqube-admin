import React from "react";
import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";

const SystemAds = () => {
  return (
    <div>
      <div
        className="intro-y col-span-12 flex items-center m-8 pr-16"
        style={{ float: "right" }}
      >
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Add New System Ad"
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default SystemAds;
