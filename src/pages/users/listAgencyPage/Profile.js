import React from "react";

import Button from "../../../components/button/Button";
import InputTextArea from "../../../components/inputTextArea/InputTextArea";
import TextField from "../../../components/TextField/TextField";

export default function Profile() {
  return (
    <div className="pb-6">
      <div class="intro-y box col-span-12">
        <div class="flex items-center px-5 py-3 border-b-2 border-gray-200">
          <h2 class="font-medium text-base mr-auto">Basic</h2>
        </div>
        <div class="py-5" id="new-products">
          <div className="px-5">
            <div>
              <div class="flex mb-12">
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
              </div>
            </div>
            <div>
              <div class="flex mb-12">
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="uppercase">bio</h4>
              <InputTextArea className="outline-none h-20 w-full" />
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div>
              <div class="w-full h-12 mb-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
              </div>
              <div class="flex mb-12">
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div>
              <div class="w-full h-12 uppercase text-xl text-gray-900">
                Events
              </div>
              <div class="flex mb-12">
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div class="flex mb-12">
              <div class="w-1/2 h-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
              </div>
              <div class="w-1/2 h-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div>
              <div class="flex mb-12">
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
              </div>
              <div class="flex mb-12">
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div class="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          {/* <div className="px-5">
            <div class="flex mb-12">
              <div class="w-1/2 h-12 flex">
                <div className="w-20 h-20 py-4 text-center sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                  <img
                    alt="DeQube User Image"
                    className="rounded-lg"
                    src={profileImage}
                  />
                </div>
                <div className="w-20 h-20 py-4 text-center sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                  <img
                    alt="DeQube User Image"
                    className="rounded-lg"
                    src={profileImage}
                  />
                </div>
                <div className="w-20 h-20 py-4 text-center sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                  <img
                    alt="DeQube User Image"
                    className="rounded-lg"
                    src={profileImage}
                  />
                </div>
              </div>
              <div class="w-1/2 h-12">{/* To do *</div>
            </div> */}
          <div className="px-5 flex">
            <div class="w-1/2 h-12">
              <div class="flex items-start">
                <div class="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div class="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div class="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
              </div>
            </div>
            <div class="w-1/2 h-12">
              <div class="flex items-start">
                <div class="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div class="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div class="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav__devider my-6 border-t-2"></div>
        <div className="px-5">
          <div>
            <div class="flex mb-12">
              <div class="w-1/2 h-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
              </div>
              <div class="w-1/2 h-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
              </div>
            </div>
            <div class="flex mb-12">
              <div class="w-1/2 h-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
              </div>
              <div class="w-1/2 h-12">
                <TextField textTitle="First Name" textBody="Lagbaja" />
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
    </div>
  );
}
