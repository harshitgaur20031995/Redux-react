import { Typography } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";

function ChartUserChange() {
  const label = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: label,
    datasets: [
      {
        label: "Total Change",
        data: [
          100, 150, -40, 900, 890, 1180, 1000, 1350, 1400, 1600, 1200, 1400,
        ],
        backgroundColor: "#fd8817",
        borderColor: "#fd8817",
        pointBackgroundColor: [" #f4433670"],
        pointBorderColor: ["#f44336"],
        tension: 0.5,
        type: "line",
      },
      {
        label: "Users Gain",
        data: [
          150, 200, 10, 1000, 900, 1200, 1300, 1500, 1700, 1800, 1900, 2000,
        ],
        fill: true,
        backgroundColor: "#6ff174c2",
      },
      {
        label: "Users Loss",
        data: [50, 50, 50, 100, 10, 20, 300, 150, 300, 200, 700, 600],
        fill: true,
        backgroundColor: "#f76b619e",
      },
    ],
  };

  const legend = {};

  const options = {
    scales: {
      x: {
        grid: {
          tickColor: "white",
          display: false,
        },
        title: {
          color: "#f44336",
          fontSize: "20px",
          display: true,
          text: "Month",
        },
      },
      y: {
        grid: {
          tickColor: "white",
        },
      },
    },
  };

  return (
    <>
      <Typography variant="h5" color="secondary" align="center">
        Users Changes Chart
      </Typography>
      <Bar data={data} options={options} />
    </>
  );
}

export default ChartUserChange;
