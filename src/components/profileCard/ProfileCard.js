import React, { useState } from "react";
import * as Icon from "react-feather";

import profileImage from "../../assets/dist/images/preview-3.jpg";
import Account from "./Account";
import Privacy from "./Privacy";

const ProfileCard = ({
  userImage,
  userId,
  joined,
  lastLogin,
  lastLoginAdmin,
  members,
  followers,
  agencyViews,
  likes,
}) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="intro-y box px-5 pt-5 mt-5 mb-5">
        <div className="flex flex-col lg:flex-row border-b border-gray-200 pb-5 -mx-5">
          <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
              <img
                alt="DeQube User Image"
                className="rounded-full"
                src={userImage || profileImage}
              />
            </div>
            <div className="ml-5">
              <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                User ID
              </div>
              <div className="text-gray-600">
                {`/${userId}` || "DevOps Engineer"}
              </div>
            </div>
          </div>
          <div className="flex mt-6 lg:mt-0 items-center lg:items-start flex-1 flex-col justify-center text-gray-600 px-5 border-l border-r border-gray-200 border-t lg:border-t-0 pt-5 lg:pt-0">
            <div className="flex mb-8 mt-4">
              <div className="truncate sm:whitespace-normal items-center">
                {"Joined"}
              </div>
              <div className="truncate sm:whitespace-normal ml-32 text-blue-400 underline">
                17 May, 2020
              </div>
            </div>
            <div className="flex mb-8">
              <div className="truncate sm:whitespace-normal mr-3 items-center">
                Last Login
              </div>
              <div className="truncate sm:whitespace-normal ml-24 text-blue-400 underline">
                17 May, 2020
              </div>
            </div>
            <div className="flex">
              <div className="truncate sm:whitespace-normal items-center">
                Qubed Level
              </div>
              <div className="truncate sm:whitespace-normal ml-24 text-blue-400 underline">
                Expert
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-gray-200 pt-5 lg:pt-0">
            <div className="flex my-4 mt-2">
              <div className="truncate sm:whitespace-normal items-center">
                {"Joined"}
              </div>
              <div className="truncate sm:whitespace-normal ml-32 text-blue-400 underline">
                17 May, 2020
              </div>
            </div>
            <div className="flex my-4">
              <div className="truncate sm:whitespace-normal items-center">
                {"Joined"}
              </div>
              <div className="truncate sm:whitespace-normal ml-32 text-blue-400 underline">
                17 May, 2020
              </div>
            </div>
            <div className="flex my-4">
              <div className="truncate sm:whitespace-normal items-center">
                {"Joined"}
              </div>
              <div className="truncate sm:whitespace-normal ml-32 text-blue-400 underline">
                17 May, 2020
              </div>
            </div>
            <div className="flex my-4">
              <div className="truncate sm:whitespace-normal items-center">
                {"Joined"}
              </div>
              <div className="truncate sm:whitespace-normal ml-32 text-blue-400 underline">
                17 May, 2020
              </div>
            </div>
          </div>
        </div>
        <div class="nav-tabs flex flex-col sm:flex-row justify-between lg:justify-between">
          <a
            data-toggle="tab"
            data-target="#account"
            href="#account"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 1 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(1);
            }}
          >
            {openTab === 1 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Account
          </a>
          <a
            data-toggle="tab"
            data-target="#profile"
            href="#profile"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 2 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            {openTab === 2 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Profile
          </a>
          <a
            data-toggle="tab"
            data-target="#privacy"
            href="#privacy"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 3 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(3);
            }}
          >
            {openTab === 3 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Privacy
          </a>
          <a
            data-toggle="tab"
            data-target="#activity"
            href="#activity"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 4 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
          >
            {openTab === 4 ? <Icon.Activity className="w-4 h-4 mr-2" /> : ""}
            Activity
          </a>
          <a
            data-toggle="tab"
            data-target="#membership"
            href="#membership"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 5 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(5);
            }}
          >
            {openTab === 5 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Membership
          </a>
          <a
            data-toggle="tab"
            data-target="#extra"
            href="#extra"
            className={
              "p-4 sm:mr-8 flex items-center " + (openTab === 6 ? "active" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(6);
            }}
          >
            {openTab === 6 ? <Icon.User className="w-4 h-4 mr-2" /> : ""}
            Extras
          </a>
        </div>
      </div>
      <div className="py-5 flex-auto">
        <div className="tab-content tab-space">
          <div className={openTab === 1 ? "block" : "hidden"} id="account">
            <Account />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"} id="profile">
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </p>
          </div>
          <div className={openTab === 3 ? "block" : "hidden"} id="privacy">
            <Privacy />
          </div>
          <div className={openTab === 4 ? "block" : "hidden"} id="activity">
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </p>
          </div>
          <div className={openTab === 5 ? "block" : "hidden"} id="membership">
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits.
              <br />
              <br /> Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
          </div>
          <div className={openTab === 6 ? "block" : "hidden"} id="extra">
            <p>
              Efficiently unleash cross-media information without cross-media
              value. Quickly maximize timely deliverables for real-time schemas.
              <br />
              <br /> Dramatically maintain clicks-and-mortar solutions without
              functional solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
