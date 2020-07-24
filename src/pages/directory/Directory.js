import React from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/card/Card";
import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";

const Directory = () => {
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
      <div className="top-bar text-lg text-gray-600 mt-1">Directory</div>
      <hr className="mb-3" />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Directory" />
          <Card cardTitle="116,000" cardBody="Attributes" />
        </div>
        <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end m-8 mr-0">
          <Button
            className="bg-red-700 text-white font-bold py-2 px-4 rounded"
            value="Create New Directory"
          />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 50, color: (value) => "blue" },
            {
              id: "name",
              label: "Directory Name",
              minWidth: 100,
              color: (value) => "blue",
              type: "link",
            },
            {
              id: "username",
              label: "Attributes",
              minWidth: 100,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "joined",
              label: "Joined",
              minWidth: 100,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
            {
              id: "members",
              label: "Members",
              minWidth: 100,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "status",
              label: "Status",
              minWidth: 100,
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
              members: 5,
              status: "Published",
            },
            {
              id: 2,
              name: "India",
              username: "IN",
              members: 5,
              joined: 1324171354,
              status: "Published",
            },
            {
              id: 3,
              name: "China",
              username: "CN",
              members: 5,
              joined: 1403500365,
              status: "Not-Published",
            },
            {
              id: 4,
              name: "Italy",
              username: "IT",
              members: 5,
              joined: 60483973,
              status: "Published",
            },
            {
              id: 5,
              name: "United States",
              username: "US",
              members: 5,
              joined: 327167434,
              status: "Published",
            },
            {
              id: 6,
              name: "Canada",
              username: "CA",
              members: 5,
              joined: 37602103,
              status: "Published",
            },
            {
              id: 7,
              name: "Australia",
              username: "AU",
              members: 5,
              joined: 25475400,
              status: "Waiting",
            },
            {
              id: 8,
              name: "Germany",
              username: "DE",
              joined: 83019200,
              members: 5,
              status: "Not-Published",
            },
            {
              id: 9,
              name: "Ireland",
              username: "IE",
              members: 5,
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

export default Directory;
