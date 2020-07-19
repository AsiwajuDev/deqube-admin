import React from "react";
import ButtonToggleInput from "../buttonToggleInput/ButtonToggleInput";

const Privacy = () => {
  return (
    <div>
      <div className="intro-y box px-10 sm:py-1">
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
      </div>
    </div>
  );
};
export default Privacy;
