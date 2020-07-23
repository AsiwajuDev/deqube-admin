import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";

import Button from "../../components/button/Button";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";
// import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

// const data = {
//   start: "Events",
//   links: [
//     {
//       label: "Event Category",
//       url: "/events/event-category",
//     },
//   ],
// };

const EventCategory = () => {
  return (
    <div>
      {/* <CustomBreadcrumb data={data} /> */}
      <div className="flex justify-between">
        <Link
          to="/system-ads"
          className="text-red-700 flex mb-4 hover:text-red-700"
        >
          <Icon.ChevronLeft className="text-red-700" />
          Go Back
        </Link>
        <div className="intro-y flex justify-center col-span-12 items-center">
          <Button
            className="bg-red-700 text-white font-bold py-2 mr-3 px-4 rounded"
            value="Add Category"
          />
        </div>
      </div>
      <div class="col-span-12 mt-8"></div>
      <div className="mt-10">
        <CustomTable pagination search pagerows />
      </div>
    </div>
  );
};

export default EventCategory;
