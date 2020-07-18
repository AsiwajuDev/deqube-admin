import React from "react";

const InputDropdown = ({ dropdownElements }) => {
  return (
    <div class="options md:flex md:space-x-6 text-sm items-center text-gray-700 mt-4">
      <select class="w-full border text-lg border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:border-gray-500">
        <option value="select" selected>
          Select an option
        </option>
        {dropdownElements}
        <option value="bug">report a bug</option>
        <option value="feature">Request a feature</option>
        <option value="feedback">Feedback</option>
      </select>
    </div>
  );
};

export default InputDropdown;
