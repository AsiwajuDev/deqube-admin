import React from "react";

import Button from "../../../components/button/Button";
import InputTextArea from "../../../components/inputTextArea/InputTextArea";
import TextField from "../../../components/TextField/TextField";

export default function Profile() {
  return (
    <div className="pb-6">
      <div className="intro-y box col-span-12">
        <div className="flex items-center px-5 py-3 border-b-2 border-gray-200">
          <h2 className="font-medium text-base mr-auto">Basic</h2>
        </div>
        <div className="py-5" id="new-products">
          <div className="px-5">
            <div>
              <div className="flex mb-12">
                <div className="w-1/2 h-12">
                  <TextField textTitle="First Name" textBody="Lagbaja" />
                </div>
                <div className="w-1/2 h-12">
                  <TextField textTitle="Last Name" textBody="Lagbaja" />
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-12">
                <div className="w-1/2 h-12">
                  <TextField textTitle="Languages" textBody="Lagbaja" />
                </div>
                <div className="w-1/2 h-12">
                  <TextField textTitle="BirthDate" textBody="16/3/2020" />
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
              <div className="w-full h-12 mb-12">
                <TextField
                  textTitle="User Group"
                  textBody="Professional Dancer"
                />
              </div>
              <div className="flex mb-12">
                <div className="w-1/2 h-12">
                  <TextField textTitle="Dance Genre" textBody="Ballet" />
                </div>
                <div className="w-1/2 h-12">
                  <TextField
                    textTitle="Dance Genre Expertise"
                    textBody="Professional Dancer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div>
              <div className="w-full h-12 uppercase text-xl text-gray-900">
                Events
              </div>
              <div className="flex mb-12">
                <div className="w-1/2 h-12">
                  <TextField textTitle="Event Name" textBody="Lagbaja" />
                </div>
                <div className="w-1/2 h-12">
                  <TextField textTitle="Role" textBody="Performer" />
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div className="flex mb-12">
              <div className="w-1/2 h-12">
                <TextField
                  textTitle="Professional Certification"
                  textBody="Lagbaja"
                />
              </div>
              <div className="w-1/2 h-12">
                <TextField
                  textTitle="Professional Certification Level"
                  textBody="Performer"
                />
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>
          <div className="px-5">
            <div>
              <div className="flex my-8">
                <div className="w-1/2 mr-4">
                  <TextField
                    textTitle="Recommendation (Given)"
                    textBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ]"
                  />
                </div>
                <div className="w-1/2 ml-4">
                  <TextField
                    textTitle="Quote, company, date"
                    textBody="Lorem Ipsum Company, 21/6/2020"
                  />
                </div>
              </div>
              <div className="flex my-8">
                <div className="w-1/2 mr-4">
                  <TextField
                    textTitle="Recommendation (Received)"
                    textBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ]"
                  />
                </div>
                <div className="w-1/2 ml-4">
                  <TextField
                    textTitle="Quote, company, date"
                    textBody="Lorem Ipsum Company, 21/6/2020"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav__devider my-6 border-t-2"></div>

          <div className="px-5 flex">
            <div className="w-1/2 h-12">
              <div className="flex items-start">
                <div className="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div className="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div className="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
              </div>
            </div>
            <div className="w-1/2 h-12">
              <div className="flex items-start">
                <div className="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div className="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
                <div className="flex-1 h-32 text-gray-700 text-center rounded-lg bg-gray-400 px-4 m-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="side-nav__devider my-6 border-t-2"></div>
        <div className="px-5">
          <div>
            <div className="flex mb-12">
              <div className="w-1/2 h-12">
                <TextField
                  textTitle="Companies (Member of a group or page)"
                  textBody="Lagbaja"
                />
              </div>
              <div className="w-1/2 h-12">
                <TextField
                  textTitle="Role, Joined"
                  textBody="Member, 21/6/2020"
                />
              </div>
            </div>
            <div className="flex mb-12">
              <div className="w-1/2 h-12">
                <TextField
                  textTitle="Submitted Applications"
                  textBody="Lagbaja"
                />
              </div>
              <div className="w-1/2 h-12">
                <TextField
                  textTitle="Role, Date, submitted"
                  textBody="Lagbaja"
                />
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
