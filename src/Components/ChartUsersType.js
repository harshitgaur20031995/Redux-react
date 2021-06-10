import { Typography } from "@material-ui/core";
import React from "react";
import { Pie } from "react-chartjs-2";

function ChartTotalUser() {
  const label = ["Admin", "Employee", "Visitor"];

  const data = {
    labels: label,
    datasets: [
      {
        labels: "Users Type",
        data: [150, 1000, 90],

        backgroundColor: ["#6dd47e", "#FFd55a", "#293250"],
      },
    ],
  };

  const legend = {};

  return (
    <>
      <Pie data={data} />
    </>
  );
}

export default ChartTotalUser;
