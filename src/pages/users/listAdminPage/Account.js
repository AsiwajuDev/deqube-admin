import React from "react";
import ToggleButton from "../../../components/buttonToggleInput/ToggleButton";
import InputDropdown from "../../../components/inputDropdown/InputDropdown";
import CustomTable from "../../../components/table/CustomTable";

export default function Account() {
  return (
    <div className="">
      <div class="intro-y tab-content mt-5">
        <div class="tab-content__pane active" id="dashboard">
          <div class="intro-y box pb-4 col-span-12 mb-6">
            <div className="grid grid-cols-12 gap-4 row-gap-5">
              <div className="intro-y col-span-12 sm:col-span-6 mr-4">
                <div class="flex items-center py-3 px-5">
                  <h2 class="font-bold text-lg mr-auto">Admin Type</h2>
                </div>
                <div class="px-5">
                  <InputDropdown
                    type="text"
                    className="input w-full border flex-1"
                    dropdownElements=""
                  />
                </div>
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mr-4">
                <div class="flex items-center py-3 px-5">
                  <h2 class="font-bold text-lg mr-auto block">Group Founder</h2>
                </div>
                <div class="px-5">
                  <InputDropdown
                    type="text"
                    className="input w-full border flex-1"
                    dropdownElements=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="intro-y box pb-4 col-span-12">
            <div class="flex items-center py-3 px-5 border-b-2 border-gray-200">
              <h2 class="font-medium text-xl mr-auto">Permission</h2>
            </div>
            <div className="grid grid-cols-12 gap-4 row-gap-5">
              <div className="intro-y col-span-12 sm:col-span-6 mr-4">
                <div className="border-r-2 border-gray-200 my-2">
                  <div class="px-5 py-2">
                    <div class="flex flex-col sm:flex-row mt-2">
                      <div class="mr-auto my-2">
                        <a href="#" class="text-lg font-medium">
                          Admin can delete member
                        </a>
                      </div>
                      <div class="text-center">
                        <ToggleButton />
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row mt-5">
                      <div class="mr-auto my-2">
                        <a href="#" class="text-lg font-medium">
                          Admin can send invites
                        </a>
                      </div>
                      <div class="text-center">
                        <ToggleButton />
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row mt-5">
                      <div class="mr-auto my-2">
                        <a href="#" class="text-lg font-medium">
                          Admin can ban a member
                        </a>
                      </div>
                      <div class="text-center">
                        <ToggleButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <div class="px-5 py-2 my-2">
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div class="mr-auto my-2">
                      <a href="#" class="text-lg font-medium">
                        Admin can delete Post
                      </a>
                    </div>
                    <div class="text-center">
                      <ToggleButton />
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row mt-5">
                    <div class="mr-auto my-2">
                      <a href="#" class="text-lg font-medium">
                        Admin can ban a member
                      </a>
                    </div>
                    <div class="text-center">
                      <ToggleButton />
                    </div>
                  </div>
                  <div class="flex flex-col sm:flex-row mt-5">
                    <div class="mr-auto my-2">
                      <a href="#" class="text-lg font-medium">
                        Admin can delete Post
                      </a>
                    </div>
                    <div class="text-center">
                      <ToggleButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div class="flex items-center py-3 border-b-2 border-gray-200">
              <h2 class="font-medium text-xl mr-auto">Members</h2>
            </div>
            <CustomTable pagination search pagerows />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="intro-y col-span-12 flex items-center m-8 pr-16">
<Button
  className="bg-red-700 text-white font-bold py-2 px-4 rounded"
  value="Save Changes"
/>
</div> */
}
