import React from "react";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../../components/button/Button";

export default function Extras() {
  return (
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
  );
}
