import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../components/table/CustomTable";
import Button from "../../components/button/Button";
import VerifyModal from "../../components/verifyModal/VerifyModal";

export default function AggregateData() {
  const history = useHistory();
  let [show, setShow] = useState(false);
  const onLinkClicked = (e, payload) => {
    console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onClose = (status) => {
    setShow(!show);
  };
  const onActionClicked = (e, payload) => {
    switch (payload.type) {
      case "attachment":
        setShow(true);
        break;
      case "cancel":
        setShow(false);
      case "correct":
      //To do
    }
  };
  return (
    <div>
      <VerifyModal show={show} handleClose={onClose} />
      <div className="top-bar text-lg text-gray-600 mt-1">Aggregate Data</div>
      <hr className="mb-3" />
      <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end">
        <Button
          className="bg-red-700 text-white font-bold py-2 px-4 rounded"
          value="Mark All As Safe"
        />
      </div>
      <div className="">
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 70, color: (value) => "blue" },
            {
              id: "user",
              label: "User",
              minWidth: 100,
              color: (value) => "blue",
              type: "link",
              align: "center",
            },
            {
              id: "type",
              label: "Type",
              minWidth: 170,
              align: "center",
              color: (value) => "blue",
            },
            {
              id: "time",
              label: "Time",
              minWidth: 170,
              align: "center",
              format: (value) => value.toLocaleString("en-US"),
              color: (value) => "blue",
            },
          ]}
          rows={[
            {
              id: 1,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 2,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 3,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 4,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 5,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 6,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 7,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 8,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
            {
              id: 9,
              user: "Sarah Doe",
              type: "User",
              time: "14 Nov, 2019",
            },
          ]}
          actions={["correct", "close", "attachment"]}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </div>
  );
}
