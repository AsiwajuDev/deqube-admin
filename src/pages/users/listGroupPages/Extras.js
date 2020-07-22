import React from "react";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../../components/button/Button";
import CustomTable from "../../../components/table/CustomTable";

export default function Extras() {
  return (
    <div>
      <div className="intro-y box py-4">
        <div className="px-10">
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="m-8">
            <ButtonToggleInput
              className="text-gray-600 text-sm"
              title="Download User Information"
              body="Allow users to download their account information from settings page"
            />
          </div>
          <div className="intro-y col-span-12 flex items-center m-8">
            <Button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
          </div>
        </div>
      </div>
      {/* <div className="intro-y box my-4">
        <div className="mt-10">
          <span className="text-red-600 capitalize my-5">ads</span>
          <CustomTable pagination search pagerows />
        </div>
      </div> */}
      <div className="intro-y box py-4 my-8">
        <div className="px-10">
          <div className="m-8">
            <span className="text-red-600 capitalize my-5">ads</span>
          </div>
          <div className="m-8">
            <CustomTable pagination search pagerows />
          </div>
        </div>
      </div>
      <div className="intro-y box py-4 my-8">
        <div className="px-10">
          <div className="m-8">
            <span className="text-red-600 capitalize my-5">paid contents</span>
          </div>
          <div className="m-8">
            <CustomTable pagination search pagerows />
          </div>
        </div>
      </div>
    </div>
  );
}
