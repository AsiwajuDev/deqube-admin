import React from "react";
import { Bar } from "react-chartjs-2";

import Card from "../../components/card/Card";

const Dashboard = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
    ],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        width={1}
        height={50}
        options={{ maintainAspectRatio: false }}
      />
      <div class="col-span-12 mt-8">
        <div class="grid grid-cols-9 gap-6 mt-5">
          <Card cardTitle="116,000" cardBody="Team" />
          <Card cardTitle="116,000" cardBody="Male" />
          <Card cardTitle="116,000" cardBody="Female" />
          <Card cardTitle="116,000" cardBody="Female" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
