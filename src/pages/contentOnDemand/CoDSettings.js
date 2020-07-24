import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import ButtonToggleInput from "../../components/buttonToggleInput/ButtonToggleInput";
import InputField from "../../components/inputField/InputField";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Content On Demand",
  links: [
    {
      label: "CoD Settingss",
      url: "/cod/cod-settings",
    },
  ],
};

const CoDSettings = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  return (
    <div>
      <CustomBreadcrumb data={data} />
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
          <CustomTable
            pagination
            search
            pagerows
            columns={[
              {
                id: "id",
                label: "ID",
                minWidth: 170,
                color: (value) => "blue",
              },
              {
                id: "name",
                label: "Name",
                minWidth: 100,
                color: (value) => "blue",
                type: "link",
              },
              {
                id: "username",
                label: "Username",
                minWidth: 170,
                align: "center",
                color: (value) => "blue",
              },
              {
                id: "joined",
                label: "Joined",
                minWidth: 170,
                align: "center",
                format: (value) => value.toLocaleString("en-US"),
                color: (value) => "blue",
              },
              {
                id: "status",
                label: "Status",
                minWidth: 170,
                align: "center",
                color: (value) =>
                  value.startsWith("Not")
                    ? "red"
                    : value.startsWith("Waiting")
                    ? "black"
                    : "green",
              },
            ]}
            rows={[
              {
                id: 1,
                name: "India",
                username: "IN",
                joined: 1324171354,
                status: "Published",
              },
              {
                id: 2,
                name: "India",
                username: "IN",
                joined: 1324171354,
                status: "Published",
              },
              {
                id: 3,
                name: "China",
                username: "CN",
                joined: 1403500365,
                status: "Not-Published",
              },
              {
                id: 4,
                name: "Italy",
                username: "IT",
                joined: 60483973,
                status: "Published",
              },
              {
                id: 5,
                name: "United States",
                username: "US",
                joined: 327167434,
                status: "Published",
              },
              {
                id: 6,
                name: "Canada",
                username: "CA",
                joined: 37602103,
                status: "Published",
              },
              {
                id: 7,
                name: "Australia",
                username: "AU",
                joined: 25475400,
                status: "Waiting",
              },
              {
                id: 8,
                name: "Germany",
                username: "DE",
                joined: 83019200,
                status: "Not-Published",
              },
              {
                id: 9,
                name: "Ireland",
                username: "IE",
                joined: 4857000,
                status: "Published",
              },
            ]}
            actions={["edit", "delete"]}
            handleActionClick={onActionClicked}
            handleLinkClick={onLinkClicked}
          />
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
