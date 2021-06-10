import { Typography } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";

function ChartTypeChange() {
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
        label: "Admin",
        data: [
          150, 200, 10, 1000, 900, 1200, 1300, 1500, 1700, 1800, 1900, 2000,
        ],
        fill: true,
        backgroundColor: "#6dd47e",
      },
      {
        label: "Employee",
        data: [50, 50, 50, 100, 10, 20, 300, 150, 300, 200, 700, 600],
        fill: true,
        backgroundColor: "#FFd55a",
      },
      {
        label: "Visitor",
        data: [580, 10, 500, 1100, 100, 100, 90, 950, 500, 1200, 1000, 800],
        fill: true,
        backgroundColor: "#293250",
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
        Users Type Changes Chart
      </Typography>
      <Bar data={data} options={options} />
    </>
  );
}

export default ChartTypeChange;
