<template>
  <div>
    <Navbar @toggleSidebar="sidebarOpen = !sidebarOpen" />
    <div class="flex">
      <Sidebar :visible="sidebarOpen" />
      <main class="flex-1 min-h-screen bg-blue-100">
        <!-- Dashboard Header -->
        <div class="p-4">
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
          >
            <div>
              <h2 class="text-3xl font-bold">Good Morning, Shijra</h2>
              <p class="text-gray-500 mt-1">Monday, 20-August-2024</p>
            </div>
            <button
              class="flex items-center gap-2 border border-blue-400 text-blue-600 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-blue-50 transition w-fit"
            >
              <Icon name="lucide:calendar" />
              <span>This Week</span>
            </button>
          </div>
          <!-- Card Row -->
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-6">
            <StatCard
              v-for="card in statCards"
              :key="card.title"
              v-bind="card"
            />
          </div>
        </div>
        <div class="px-4 flex flex-col gap-6 md:flex-row w-full">
          <Chart class="flex-1" />
          <TotalBookingsCard
            class="flex-1"
            title="Total Bookings"
            :chartData="chartData"
          />
        </div>
        <div class="p-4">
          <h1 class="text-2xl font-bold">Recent Bookings</h1>
          <!-- Container -->
          <RecentBookings />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { chartData } from "~/data/data";
import Chart from "~/components/Chart.vue";
import StatCard from "~/components/StatCard.vue";
import { statCards } from "~/data/data";
import TotalBookingsCard from "~/components/TotalBookingsCard.vue";
const sidebarOpen = ref(false);
</script>
