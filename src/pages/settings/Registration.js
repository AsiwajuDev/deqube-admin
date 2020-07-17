import React from "react";
import BannerInfo from "../../components/bannerInfo/BannerInfo";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";

const Registration = () => {
  return (
    <div className="intro-y box py-10 px-10 sm:py-16 mt-5">
      <div className="mb-10">
        <BannerInfo
          svgClassName="fill-current h-6 w-6 text-white-500 mr-4"
          bannerBody="If registration is Free and pro package enabled they will be be used as an optional upgrading plans"
        />
      </div>

      <ButtonToggleInput
        className="text-gray-600 text-sm"
        title="Social Logins"
        body="Turn registration/login via socail media (Google, Facebook  Twitter) On and Off"
      />
      <div className="side-nav__devider my-6 border-t-2"></div>
      <div>
        <ButtonToggleInput
          className="text-gray-600 text-sm"
          title="Facebook"
          body="Turn registration/login via Facebook On and Off"
        />
      </div>
    </div>
  );
};

export default Registration;
