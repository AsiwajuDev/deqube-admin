import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import CustomTable from "../../components/table/CustomTable";
import Card from "../../components/card/Card";

const Posts = () => {
  const history = useHistory();
  const onLinkClicked = (e, payload) => {
    // console.log(JSON.stringify(payload));
    history.push("/users/list-users/user");
  };

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="top-bar text-lg text-gray-600 mt-1">Posts</div>
      <hr className="mb-3" />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Posts" />
          <Card cardTitle="116,000" cardBody="Comment" />
          <Card cardTitle="116,000" cardBody="Reactions" />
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <CustomTable
          pagination
          search
          pagerows
          columns={[
            { id: "id", label: "ID", minWidth: 100, color: (value) => "blue" },
            {
              id: "author",
              label: "Author",
              minWidth: 200,
              color: (value) => "blue",
              align: "left",
              type: "image",
            },
            {
              id: "type",
              label: "Type",
              minWidth: 70,
              align: "left",
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
            {
              id: "link",
              label: "Link",
              minWidth: 170,
              align: "center",
              type: "link",
              color: (value) => "green",
            },
          ]}
          rows={[
            {
              id: 1,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 2,
              author: "Sarah Doe",
              type: "Cover Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 3,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 4,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 5,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 6,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 7,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 8,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
            },
            {
              id: 9,
              author: "Sarah Doe",
              type: "Profile Picture",
              time: "30 MIns Ago",
              link: "View",
              src:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSL9gD35eD_Df-JgpsplnHFyXNhb8r23madbg&usqp=CAU",
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

export default Posts;
