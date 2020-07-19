import React from "react";
import ButtonToggleInput from "../buttonToggleInput/ButtonToggleInput";
import Card from "../card/Card";
import Button from "../button/Button";

export default function Account() {
  return (
    <div className="">
      <div class="intro-y tab-content mt-5">
        <div class="tab-content__pane active" id="dashboard">
          <div class="grid grid-cols-12 gap-6">
            <div class="intro-y box col-span-12 lg:col-span-6">
              <div class="flex items-center p-5 border-b-2 border-gray-200">
                <h2 class="font-medium text-base mr-auto">Account</h2>
              </div>
              <div class="px-5 pb-4">
                <div class="flex flex-col sm:flex-row mt-2">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Verified User
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center">
                      <ButtonToggleInput />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Banned
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center">
                      <ButtonToggleInput />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Account Activated
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center">
                      <ButtonToggleInput />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Email Verified
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center">
                      <ButtonToggleInput />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="intro-y box col-span-12 lg:col-span-6">
              <div class="flex items-center p-5 border-b-2 border-gray-200">
                <h2 class="font-medium text-base mr-auto">Account</h2>
              </div>
              <div class="px-5 pb-4">
                <div class="flex flex-col sm:flex-row mt-2">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      User Group
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center my-2">Admin</div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Username
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center my-2 text-blue-300">
                      <a>/deqube.dance/johnDoe</a>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Email Address
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center my-2 text-blue-300">
                      loremipsum@gmail.com
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row mt-5">
                  <div class="mr-auto my-2">
                    <a href="#" class="text-lg font-medium">
                      Password
                    </a>
                  </div>
                  <div class="flex">
                    <div class="text-center my-2">Password</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Team" />
          <Card cardTitle="116,000" cardBody="Male" />
          <Card cardTitle="116,000" cardBody="Female" />
        </div>
      </div>

      <div className="intro-y col-span-12 flex items-center m-8 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
}
