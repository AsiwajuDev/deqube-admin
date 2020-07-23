import React from "react";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
// import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

// const data = {
//   start: "Content On Demand",
//   links: [
//     {
//       label: "CoD Settingss",
//       url: "/cod/cod-settings",
//     },
//   ],
// };

const CoDSettings = () => {
  return (
    <div>
      {/* <CustomBreadcrumb data={data} /> */}
      <div className="pl-4">
        <ButtonToggleInput
          title="Enable Ads"
          body="Enable the directory for better SEO results"
          bodyText="Make the website public to allow non logged users to view website content"
        />
      </div>
      <div className="side-nav__devider my-6 border-t-2"></div>
      <div class="col-span-12 mt-8">
        <div style={{ marginTop: "50px" }}>
          <CustomTable pagination search pagerows />
        </div>
      </div>
      <div className="side-nav__devider my-6 border-t-2"></div>
      <div className="mb-16">
        <p className="text-xl font-bold mb-5">Payment Method</p>
        <div className="flex">
          <span className="mr-16">
            <InputField type="checkbox" />
            <label className="text-lg p-2">PayStack</label>
          </span>
          <span className="mr-16">
            <InputField type="checkbox" />
            <label className="text-lg p-2">Credit Card</label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoDSettings;
