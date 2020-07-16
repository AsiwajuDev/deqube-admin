import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

const AdSettings = () => {
  return (
    <div className="mt-6">
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="Ad Settings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />
      <div className="side-nav__devider my-6 border-t-2"></div>
      <div className="intro-y box py-3 px-10 sm:py-8 mt-5 mb-5">
        <div className="mb-16">
          <p className="text-xl font-bold">Users can Promote</p>
          <div className="flex">
            <span className="mr-16">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Posts</label>
            </span>
            <span className="mr-16">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Content on Demand</label>
            </span>
            <span className="">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Vaccancies</label>
            </span>
          </div>
        </div>
        <div className="mb-12">
          <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
              <span className="text-lg font-bold">Price</span>
              <InputField type="text" className="input w-full border flex-1" />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
              <span className="text-lg font-bold">Duration</span>
              <InputField type="text" className="input w-full border flex-1" />
            </div>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-xl font-bold">Payment Methods</p>
          <div className="flex">
            <span className="mr-16">
              <InputField type="checkbox" />
              <label className="text-lg p-2">PayStack</label>
            </span>
            <span className="mr-16">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Cube</label>
            </span>
            <span className="">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Credit Card</label>
            </span>
          </div>
        </div>
        <div className="mb-12">
          <p className="text-xl font-bold">Audience Type</p>
          <div className="flex">
            <span className="mr-16">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Country</label>
            </span>
            <span className="mr-16">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Gender</label>
            </span>
            <span className="">
              <InputField type="checkbox" />
              <label className="text-lg p-2">Relationship</label>
            </span>
          </div>
        </div>
      </div>
      <Button
        className="bg-red-700 m-8 text-white font-bold py-2 px-4 rounded"
        value="Save Changes"
      />
    </div>
  );
};

export default AdSettings;
