import React from "react";
import { Link, useHistory } from "react-router-dom";

import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";
import CustomBreadcrumb from "../../components/breadcrumb/CustomBreadcrumb";

const data = {
  start: "Ads",
  links: [
    {
      label: "System Ads",
      url: "/ads/system-ads",
    },
  ],
};

const SystemAds = () => {
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
      <div className="flex justify-end mt-3">
        <div className="intro-y flex justify-center col-span-12 items-center">
          <Link
            to="/ads/create-system-ads"
            className="bg-red-700 text-white font-bold py-2 mr-3 px-4 rounded"
            value="Add New System Ads"
          >
            Add New System Ads
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 170, color: (value) => "blue" },
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
  );
};

export default SystemAds;
