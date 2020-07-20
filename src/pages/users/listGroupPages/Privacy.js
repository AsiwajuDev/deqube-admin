import React from "react";
import ButtonToggleInput from "../../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../../components/button/Button";
import InputDropdown from "../../../components/inputDropdown/InputDropdown";

const Privacy = () => {
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
          <div className="intro-y col-span-12 flex items-center m-8 pr-16">
            <Button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
          </div>
        </div>
        <div className="side-nav__devider my-10 border-t-2"></div>
        <div className="px-10 m-8">
          <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-2xl">Max Post Characters</span>
              <span className="text-gray-500 py-6 block">
                The Maximum allowed post xharacters length (0 for unlimited)
              </span>
              <InputDropdown
                type="text"
                className="input w-full border flex-1"
                dropdownElements=""
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-2xl">Max Post Characters</span>
              <span className="text-gray-500 py-6 block">
                The Maximum allowed post xharacters length (0 for unlimited)
              </span>
              <InputDropdown
                type="text"
                className="input w-full border flex-1"
                dropdownElements=""
              />
            </div>
          </div>
          <div className="intro-y col-span-12 flex items-center mt-10">
            <Button
              className="bg-red-700 text-white font-bold py-2 px-4 rounded"
              value="Save Changes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
