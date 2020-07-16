import React from "react";

import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import InputDropdown from "../../components/inputDropdown/InputDropdown";

const PostSettings = () => {
  return (
    <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
      <div className="mb-10">
        <ButtonToggleInput
          className="text-gray-600 w-9/12 text-sm"
          title="AdminSettings"
          body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
        />
        <ButtonToggleInput
          className="text-gray-600 w-9/12 text-sm"
          title="AdminSettings"
          body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
        />
        <ButtonToggleInput
          className="text-gray-600 w-9/12 text-sm"
          title="AdminSettings"
          body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
        />
        <ButtonToggleInput
          className="text-gray-600 w-9/12 text-sm"
          title="AdminSettings"
          body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
        />
      </div>
      <div className="grid grid-cols-12 gap-4 row-gap-5 mt-10">
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
          <span className="text-2xl">Max Post Characters</span>
          <InputField type="text" className="input w-full border flex-1" />
          <span className="text-gray-500">
            The Maximum allowed post xharacters length (0 for unlimited)
          </span>
        </div>
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
          <span className="text-2xl">Max Post Characters</span>
          <InputField type="text" className="input w-full border flex-1" />
          <span className="text-gray-500">
            The Maximum allowed post xharacters length (0 for unlimited)
          </span>
        </div>
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
          <span className="text-2xl">Max Post Characters</span>
          <InputField type="text" className="input w-full border flex-1" />
          <span className="text-gray-500">
            The Maximum allowed post xharacters length (0 for unlimited)
          </span>
        </div>
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
          <span className="text-2xl">Max Post Characters</span>
          <InputField type="text" className="input w-full border flex-1" />
          <span className="text-gray-500">
            The Maximum allowed post xharacters length (0 for unlimited)
          </span>
        </div>
        <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
          <span className="text-2xl">Max Post Characters</span>
          <InputDropdown
            type="text"
            className="input w-full border flex-1"
            dropdownElements=""
          />
          <span className="text-gray-500">
            The Maximum allowed post xharacters length (0 for unlimited)
          </span>
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
};

export default PostSettings;
