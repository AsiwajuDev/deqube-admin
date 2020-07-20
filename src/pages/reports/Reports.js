import React from "react";

import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import TopBar from "../../components/topbar/TopBar";
import Button from "../../components/button/Button";

const Reports = () => {
  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">Reports</div>
      <hr className="mb-3" />
      <div class="col-span-12 mt-8">
        <div
          className="intro-y col-span-12 flex items-center m-8 pr-16"
          style={{ float: "right" }}
        >
          <Button
            className="bg-red-700 text-white font-bold py-2 px-4 rounded"
            value="Mark All As Save"
          />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default Reports;
