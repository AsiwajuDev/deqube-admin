import React from "react";
import { Bar } from "react-chartjs-2";

import Card from "../../components/card/Card";
import BarChart from "../../components/barChart/BarChart";

const Dashboard = () => {
  const data = [
    ["Year", "Sales"],
    ["2014", 200],
    ["2015", 460],
    ["2016", 660],
    ["2017", 350],
    ["2014", 200],
    ["2015", 460],
    ["2016", 660],
    ["2017", 350],
  ];

  const options = {
    backgroundColor: "#fff",
    chart: {
      title: "Dashboard",
      position: "center",
    },
  };
  // const data = {
  //   labels: [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "July",
  //     "August",
  //     "September",
  //   ],
  //   datasets: [
  //     {
  //       label: "Rainfall",
  //       backgroundColor: "rgba(75,192,192,1)",
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 0,
  //       data: [65, 59, 80, 81, 56],
  //     },
  //   ],
  // };

  return (
    <div>
      <BarChart data={data} options={options} />
      {/* <Bar data={data} /> */}
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Team" />
          <Card cardTitle="116,000" cardBody="Male" />
          <Card cardTitle="116,000" cardBody="Female" />
          <Card cardTitle="116,000" cardBody="Banned Team" />
          <Card cardTitle="116,000" cardBody="Banned Users" />
          <Card cardTitle="116,000" cardBody="Inactive Users" />
          <Card cardTitle="116,000" cardBody="Online Users" />
          <Card cardTitle="116,000" cardBody="Offline Users" />
          <Card cardTitle="116,000" cardBody="Posts" />
          <Card cardTitle="116,000" cardBody="Comments" />
          <Card cardTitle="116,000" cardBody="Groups" />
          <Card cardTitle="116,000" cardBody="Events" />
          <Card cardTitle="116,000" cardBody="Messages" />
          <Card cardTitle="116,000" cardBody="Notifications" />
          <Card cardTitle="116,000" cardBody="Posts" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
