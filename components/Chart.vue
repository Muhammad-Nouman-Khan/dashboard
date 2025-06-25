<template>
  <div class="p-4 rounded-xl bg-white shadow w-full">
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
import { chartLineData } from "~/data/data";

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

const chartData = chartLineData;
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
