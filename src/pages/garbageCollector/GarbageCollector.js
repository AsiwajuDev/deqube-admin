import React from "react";

import BannerInfo from "../../components/bannerInfo/BannerInfo";
import InputDropdown from "../../components/inputDropdown/InputDropdown";
import Button from "../../components/button/Button";

const GarbageCollector = () => {
  return (
    <div className="mt-10">
      <div className="mb-10">
        <BannerInfo
          svgClassName="fill-current h-6 w-6 text-white-500 mr-4"
          bannerBody="Garbage collector will remove all selected data and might take some time"
        />
      </div>
      <div className="mt-8">
        <span className="text-lg">What you want to delete</span>
        <InputDropdown
          type="text"
          className="input w-full border flex-1 mb-6"
          dropdownElements=""
        />
        <Button
          className="bg-red-700 my-8 text-white font-bold py-2 px-4 rounded"
          value="Run"
        />
      </div>
    </div>
  );
};

export default GarbageCollector;
