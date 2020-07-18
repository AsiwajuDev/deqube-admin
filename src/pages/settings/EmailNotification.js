import React from "react";
import Button from "../../components/button/Button";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";

export default function EmailNotification() {
  return (
    <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="GeneralSettings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="GeneralSettings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="GeneralSettings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="GeneralSettings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="GeneralSettings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />
      <ButtonToggleInput
        className="text-gray-600 w-9/12 text-sm"
        title="GeneralSettings"
        body="If you’re thinking of doing data visualization in React, take a look at Semiotic, a data visualization framework I developed for React."
      />

      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end m-8 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
}
