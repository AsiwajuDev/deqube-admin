import React from "react";
import * as Icon from "react-feather";

const ProfileCard = ({
  userImage,
  userId,
  created,
  lastLogin,
  lastLoginAdmin,
  members,
  followers,
  agencyViews,
  likes,
}) => {
  return (
    <div class="intro-y box px-5 pt-5 mt-5">
      <div class="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
        <div class="flex flex-1 px-5 items-center justify-center lg:justify-start">
          <div class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
            <img
              alt="User Profile Image"
              class="rounded-full"
              src="dist/images/profile-15.jpg"
            />
          </div>
          <div class="ml-5">
            <div class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
              Johnny Depp
            </div>
            <div class="text-gray-600">DevOps Engineer</div>
          </div>
        </div>
        <div class="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col justify-center text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
          <div class="truncate sm:whitespace-normal flex">
            <div class="text-gray-600">Joined</div>
            <span class="ml-auto justify-end">17 May, 2020</span>
          </div>
          <div class="truncate sm:whitespace-normal flex items-center mt-3">
            {" "}
            <i data-feather="instagram" class="w-4 h-4 mr-2"></i> Instagram
            Johnny Depp{" "}
          </div>
          <div class="truncate sm:whitespace-normal flex items-center mt-3">
            {" "}
            <i data-feather="twitter" class="w-4 h-4 mr-2"></i> Twitter Johnny
            Depp{" "}
          </div>
        </div>
        <div class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0">
          <div class="text-center rounded-md w-20 py-3">
            <div class="font-semibold text-theme-1 text-lg">201</div>
            <div class="text-gray-600">Orders</div>
          </div>
          <div class="text-center rounded-md w-20 py-3">
            <div class="font-semibold text-theme-1 text-lg">1k</div>
            <div class="text-gray-600">Purchases</div>
          </div>
          <div class="text-center rounded-md w-20 py-3">
            <div class="font-semibold text-theme-1 text-lg">492</div>
            <div class="text-gray-600">Reviews</div>
          </div>
        </div>
      </div>
      <div class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start">
        <a
          data-toggle="tab"
          data-target="#profile"
          href="javascript:;"
          class="py-4 px-6 sm:mr-8 flex items-center active"
        >
          <Icon.User class="w-4 h-4 mr-2" /> Account
        </a>
        <a
          data-toggle="tab"
          data-target="#account"
          href="javascript:;"
          class="py-4 px-6 sm:mr-8 flex items-center"
        >
          Profile
        </a>
        <a
          data-toggle="tab"
          data-target="#change-password"
          href="javascript:;"
          class="py-4 px-6 sm:mr-8 flex items-center"
        >
          Privacy
        </a>
        <a
          data-toggle="tab"
          data-target="#settings"
          href="javascript:;"
          class="py-4 px-6 sm:mr-8 flex items-center"
        >
          Activity
        </a>
        <a
          data-toggle="tab"
          data-target="#settings"
          href="javascript:;"
          class="py-4 px-6 sm:mr-8 flex items-center"
        >
          Membership
        </a>
        <a
          data-toggle="tab"
          data-target="#settings"
          href="javascript:;"
          class="py-4 px-6 sm:mr-8 flex items-center"
        >
          Extra
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
