import React from 'react';
import { Card as MaterialCard, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { RxCross2 } from "react-icons/rx";

// Define chart configurations
const chartConfigs = {
  pie: {
    type: "pie",
    series: [10, 15, 20],
    options: {
      chart: {
        width: 400,
        height: 300,
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: ["#0000FF", "#008000", "#FF0000"],
      legend: { show: true },
    },
  },
  bar: {
    type: "bar",
    series: [
      {
        name: "Data",
        data: [10, 20, 30, 40, 50],
      },
    ],
    options: {
      chart: {
        width: 500,
        height: 300,
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: ["#1e88e5"],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      },
      legend: { show: false },
    },
  },
  line: {
    type: "line",
    series: [
      {
        name: "Data",
        data: [2, 5.5, 2, 8.5, 1.5, 5],
      },
    ],
    options: {
      chart: {
        width: 500,
        height: 300,
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: ["#ff5722"],
      xaxis: {
        categories: [1, 2, 3, 5, 8, 10],
      },
      legend: { show: false },
    },
  },
};

export default function Card({ widget, onAddWidgetClick, onRemoveWidgetClick }) {
  const isAddWidgetCard = widget === "Add Widget";

  // Determine chart config based on widget type
  const getChartConfig = () => {
    switch (widget) {
      case "CSPM Executive Dashboard":
      case "CWPP Dashboard":
        return chartConfigs.pie;
      case "Image":
      case "Ticket":
        return chartConfigs.bar;
      case "Line Chart":
        return chartConfigs.line;
      default:
        return chartConfigs.pie; // Default to pie chart
    }
  };

  return (
    <MaterialCard className="w-[300px] h-[400px] flex flex-col relative overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="flex justify-between items-center w-full">
          <Typography variant="h6" color="blue-gray" className="ml-4 text-black text-2xl">
            {widget}
          </Typography>
          {!isAddWidgetCard && (
            <RxCross2 
              className='cursor-pointer absolute top-2 right-2 text-xl md:text-2xl lg:text-3xl' 
              onClick={onRemoveWidgetClick}
            />
          )}
        </div>
      </CardHeader>

      {!isAddWidgetCard && (
        <CardBody className="mt-4 grid place-items-center px-2 w-full flex-grow overflow-hidden">
          <div className="w-full h-full">
            <Chart {...getChartConfig()} />
          </div>
        </CardBody>
      )}
      {isAddWidgetCard && (
        <CardBody className="mt-4 grid place-items-center px-2 flex-grow">
          <Typography variant="h6" color="blue-gray" className="text-center border-2 border-zinc-400 p-2">
            <button className="cursor-pointer" onClick={onAddWidgetClick}>
              + Add New Widget
            </button>
          </Typography>
        </CardBody>
      )}
    </MaterialCard>
  );
}
