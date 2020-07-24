import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/button/Button";
import InputTextArea from "../../../components/inputTextArea/InputTextArea";
import TextField from "../../../components/TextField/TextField";
import CustomTable from "../../../components/table/CustomTable";
import InputDropdown from "../../../components/inputDropdown/InputDropdown";

export default function Profile() {
  return (
    <div>
      <div className="">
        <div className="intro-y box col-span-12 pb-6">
          <div className="p-5" id="new-products">
            <div>
              <h4 className="uppercase">Last Professional Activity</h4>
              <InputTextArea className="outline-none h-20 w-full" />
            </div>

            <div className="my-6">
              <div className="w-full py-3 capitalize text-xl text-black">
                Members
              </div>
              <CustomTable pagination search pagerows />
            </div>
            <div>
              <h4 className="uppercase">bio</h4>
              <InputTextArea className="h-40 w-full rounded-md border border-gray-700" />
            </div>
            <div className="grid grid-cols-12 gap-4 row-gap-5 mt-16">
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 mr-4">
                <span className="text-xl font-bold">Dance Genre</span>
                <InputDropdown
                  type="text"
                  className="input w-full border flex-1"
                  dropdownElements=""
                />
              </div>
              <div className="intro-y col-span-12 sm:col-span-6 mb-3 ml-4">
                <span className="text-xl font-bold">Dance Genre Expertise</span>
                <InputDropdown
                  type="text"
                  className="input w-full border flex-1"
                  dropdownElements=""
                />
              </div>
            </div>
            <div className="side-nav__devider my-6 border-t-2"></div>
            <div className="">
              <div className="m-8">
                <span className="text-red-600 capitalize my-5">Events</span>
              </div>
              <div className="m-8">
                <CustomTable pagination search pagerows />
              </div>
              <div className="mt-8">
                <div className="m-8">
                  <span className="text-red-600 capitalize my-5">class</span>
                </div>
                <div className="m-8">
                  <CustomTable pagination search pagerows />
                </div>
              </div>
            </div>
            <div className="side-nav__devider my-6 border-t-2"></div>
            <div className="">
              <div className="m-8">
                <span className="text-red-600 capitalize my-5">Albums</span>
              </div>
              <div className="m-8">
                <CustomTable pagination search pagerows />
              </div>
              <div className="mt-8">
                <div className="m-8">
                  <span className="text-red-600 capitalize my-5">class</span>
                </div>
                <div className="m-8">
                  <CustomTable pagination search pagerows />
                </div>
              </div>
            </div>
            <div className="side-nav__devider my-6 border-t-2"></div>
            <div>
              <div className="mt-8">
                <span className="text-red-600 capitalize my-5 px-4">
                  Review & Recommendation
                </span>
              </div>
              <div class="col-span-12">
                <div class="grid grid-cols-9 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src=""
                            alt="avatar"
                          />
                        </div>
                        <h2 class="text-sm tracking-tighter text-blue-400">
                          <a href="#">Lagbaja</a>
                        </h2>
                      </div>
                      <p class="text-sm text-gray-700 mb-3 px-2 mr-1">
                        lorem ipsum dolor sit amet lorem ipsum again lorem ipsum
                        dolor sit amet lorem ipsum again
                      </p>
                      <p>
                        <span class="ml-2 text-black">19/06/2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src=""
                            alt="avatar"
                          />
                        </div>
                        <h2 class="text-sm tracking-tighter text-blue-400">
                          <a href="#">Lagbaja</a>
                        </h2>
                      </div>
                      <p class="text-sm text-gray- mb-3 px-2 mr-1">
                        lorem ipsum dolor sit amet lorem ipsum again lorem ipsum
                        dolor sit amet lorem ipsum again
                      </p>
                      <p>
                        <span class="ml-2 text-black">19/06/2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src=""
                            alt="avatar"
                          />
                        </div>
                        <h2 class="text-sm tracking-tighter text-blue-400">
                          <a href="#">Lagbaja</a>
                        </h2>
                      </div>
                      <p class="text-sm text-gray-700 mb-3 px-2 mr-1">
                        lorem ipsum dolor sit amet lorem ipsum again lorem ipsum
                        dolor sit amet lorem ipsum again
                      </p>
                      <p>
                        <span class="ml-2 text-black">19/06/2020</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="side-nav__devider my-6 border-t-2"></div>
            <div>
              <div className="mt-8">
                <span className="text-red-600 capitalize my-5 px-4">
                  Achievements
                </span>
              </div>
              <div class="col-span-12">
                <div class="grid grid-cols-9 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <p class="text-sm text-gray-700 mb-3 px-2 mr-1">
                        Professional Abilities (Name, Count of Endorsement, list
                        of users that gave the endorsement with date) Vacancies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="mt-8">
                <span className="text-red-600 capitalize my-5 px-4">
                  Awards
                </span>
              </div>
              <div class="col-span-12">
                <div class="grid grid-cols-9 gap-6 mt-5">
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src=""
                            alt="avatar"
                          />
                        </div>
                        <h2 class="text-sm tracking-tighter text-blue-400">
                          <a href="#">Lagbaja</a>
                        </h2>
                      </div>
                      <p class="text-sm text-gray-700 mb-3 px-2 mr-1">
                        lorem ipsum dolor sit amet lorem ipsum again lorem ipsum
                        dolor sit amet lorem ipsum again
                      </p>
                      <p>
                        <span class="ml-2 text-black">19/06/2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src=""
                            alt="avatar"
                          />
                        </div>
                        <h2 class="text-sm tracking-tighter text-blue-400">
                          <a href="#">Lagbaja</a>
                        </h2>
                      </div>
                      <p class="text-sm text-gray- mb-3 px-2 mr-1">
                        lorem ipsum dolor sit amet lorem ipsum again lorem ipsum
                        dolor sit amet lorem ipsum again
                      </p>
                      <p>
                        <span class="ml-2 text-black">19/06/2020</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <div class="px-4 py-2 mt-2">
                      <div class="author flex items-center -ml-3 my-3">
                        <div class="user-logo">
                          <img
                            class="w-12 h-12 object-cover rounded-full mx-4  shadow"
                            src=""
                            alt="avatar"
                          />
                        </div>
                        <h2 class="text-sm tracking-tighter text-blue-400">
                          <a href="#">Lagbaja</a>
                        </h2>
                      </div>
                      <p class="text-sm text-gray-700 mb-3 px-2 mr-1">
                        lorem ipsum dolor sit amet lorem ipsum again lorem ipsum
                        dolor sit amet lorem ipsum again
                      </p>
                      <p>
                        <span class="ml-2 text-black">19/06/2020</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10">
              <div className="mb-4">
                <div className="mt-8">
                  <span className="text-red-600 capitalize my-5 px-4">
                    Professional Abilities
                  </span>
                </div>
                <div class="col-span-12">
                  <div class="grid grid-cols-9 gap-6 mt-5">
                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                      <div class="px-4 py-2 mt-2">
                        <div class="author flex items-center -ml-3 my-3">
                          <h2 class="text-sm px-4 tracking-tighter text-black">
                            Ability 1
                          </h2>
                        </div>
                        <div class="author flex items-center -ml-3 my-3">
                          <h2 class="text-sm px-4 tracking-tighter text-black">
                            Ability 2
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                      <div class="px-4 py-4 mt-2">
                        <div class="author flex items-center -ml-3"></div>
                        <p class="text-sm text-gray- mb-3 px-2 mr-1">
                          Category
                        </p>
                        <p>
                          <span class="ml-2 text-black">19/06/2020</span>
                          <p className="ml-2">
                            lorem ipsum dolor sit amet lorem ipsum again lorem
                            ipsum dolor sit amet lorem ipsum again
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-y col-span-12 flex items-center m-10 pr-16">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Save Changes"
        />
      </div>
    </div>
  );
}
