import React from "react";
import { Link } from "react-router-dom";

import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";

export default function Reaction() {
  return (
    <div>
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end">
        <Link
          to="/reactions/add-reaction"
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Reaction
        </Link>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
}
