<template>
  <div
    class="p-4 rounded-xl bg-white shadow w-full max-w-[450px] lg:max-w-[500px] md:w-full mx-auto"
  >
    <Line :data="chartData" :options="chartOptions" class="w-full" />
  </div>
</template>

<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const chartData = {
  labels: [
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
  ],
  datasets: [
    {
      label: "",
      data: [27, 46, 24, 26, 90, 70, 100, 170, 170, 100, 70, 100],
      borderColor: "#00C2FF",
      borderWidth: 1,
      backgroundColor: "rgba(0, 194, 255, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "",
      data: [0, 5, 24, 55, 105, 125, 125, 150, 170, 200, 250, 252],
      borderColor: "#346CC4",
      borderWidth: 1,
      backgroundColor: "rgba(52, 108, 196, 0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};
const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: (val) => `${val}K`,
      },
    },
  },
  legend: {
    display: false,
  },
};
</script>
