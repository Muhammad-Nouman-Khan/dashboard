<template>
  <div
    class="rounded-xl bg-white shadow w-[94vw] md:w-[450px] border border-[#E6E6E6] p-4"
  >
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2"
    >
      <div>
        <div class="text-[#808080] text-sm lg:text-lg font-normal">
          Total Spendings
        </div>
        <div class="text-2xl text-[#3C3C3C] font-semibold">$240.8K</div>
      </div>
      <div>
        <select
          class="border border-[#E6E6E6] rounded-lg px-4 py-2 text-sm focus:outline-none text-[#808080] cursor-pointer"
        >
          <option>Select Category</option>
          <option>All</option>
          <option>Flights</option>
          <option>Hotels</option>
          <option>Events</option>
        </select>
      </div>
    </div>
    <div class="w-full" style="height: 320px">
      <Line
        v-if="data"
        :data="data"
        :options="chartOptions"
        class="w-full h-full"
      />
      <div v-else-if="pending" class="flex items-center justify-center h-full">
        Loading...
      </div>
      <div
        v-else-if="error"
        class="flex items-center justify-center h-full text-red-500"
      >
        Error loading chart data
      </div>
    </div>
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
import { useFetch } from "#app";

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

const { data, pending, error } = useFetch("/api/chartLineData");

const chartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  scales: {
    y: {
      ticks: {
        callback: (val) => `${val}K`,
      },
    },
  },
};
</script>
