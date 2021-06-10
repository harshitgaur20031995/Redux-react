import { Typography } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";

function ChartTotalUser() {
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
        label: "Current Year",
        data: [
          150, 200, -50, 1000, 900, 1200, 1300, 1500, 1700, 1800, 1900, 2000,
        ],
        fill: true,
        backgroundColor: "#ffe4948c",
        borderColor: "#fd8817",
        pointBackgroundColor: [" #f4433670"],
        pointBorderColor: ["#f44336"],
        tension: 0.5,
      },
      {
        label: "Last Year",
        data: [50, -50, 50, 100, -10, 20, 300, -150, 300, 200, 500, 600],
        fill: true,
        backgroundColor: "#a678f973",
        borderColor: "#8552e0",
        pointBackgroundColor: ["#3f51b5"],
        pointBorderColor: ["#3f51b578"],
        tension: 0.5,
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
        Total Users Chart
      </Typography>
      <Line data={data} options={options} />
    </>
  );
}

export default ChartTotalUser;
