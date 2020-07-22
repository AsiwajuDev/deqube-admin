import React from "react";

import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";

const Directory = () => {
  return (
    <div>
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Directory" />
          <Card cardTitle="116,000" cardBody="Attributes" />
        </div>
        <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end m-8 mr-0">
          <Button
            className="bg-red-700 text-white font-bold py-2 px-4 rounded"
            value="Create New Directory"
          />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default Directory;
