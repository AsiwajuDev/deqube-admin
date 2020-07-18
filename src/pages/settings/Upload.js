import React from "react";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import InputDropdown from "../../components/inputDropdown/InputDropdown";

export default function Upload() {
  return (
    <div>
      <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
        <div className="mt-8">
          <div>
            <span className="text-lg">Upload Directory</span>
            <InputDropdown
              type="text"
              className="input w-full border flex-1 mb-6"
              dropdownElements=""
            />
            <span className="text-gray-500">
              The path of uploads local directory
            </span>
          </div>

          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-2xl">Max Profile Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of profile photo in kilobytes (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-2xl">Max Banner Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of banner photo in kilobytes (!M = 1024KB)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
        <div>
          <ButtonToggleInput
            className="text-gray-600 w-9/12 text-sm"
            title="Cencored Words Enabled"
            body="Enable or disable words to be censored"
          />
          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-2xl">Max Profile Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of profile photo in kilobytes (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-2xl">Max Banner Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of banner photo in kilobytes (!M = 1024KB)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
        <div>
          <ButtonToggleInput
            className="text-gray-600 w-9/12 text-sm"
            title="Cencored Words Enabled"
            body="Enable or disable words to be censored"
          />
          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-2xl">Max Profile Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of profile photo in kilobytes (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-2xl">Max Banner Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of banner photo in kilobytes (!M = 1024KB)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
        <div>
          <ButtonToggleInput
            className="text-gray-600 w-9/12 text-sm"
            title="Cencored Words Enabled"
            body="Enable or disable words to be censored"
          />
          <div className="grid grid-cols-12 gap-4 row-gap-5 my-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-2xl">Max Profile Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of profile photo in kilobytes (!M = 1024KB)
              </span>
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-2xl">Max Banner Photo Size</span>
              <InputField type="text" className="input w-full border flex-1" />
              <span className="text-gray-500">
                The maximum size of banner photo in kilobytes (!M = 1024KB)
              </span>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
        </div>
      </div>
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end m-8 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
}
