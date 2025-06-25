<template>
  <div>
    <div class="flex">
      <main class="flex-1">
        <!-- Dashboard Header -->
        <div>
          <GreetingHeader :username="username" />
          <!-- Card Row -->
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-3">
            <StatCard
              v-for="card in statCards"
              :key="card.title"
              v-bind="card"
            />
          </div>
        </div>
        <div class="flex flex-col gap-6 md:flex-row w-full mt-5">
          <!-- <Chart class="flex-1" /> -->
          <TotalBookingsCard
            class="flex-1"
            title="Total Bookings"
            :chartData="chartData"
          />
          <TotalBookingsCard
            class="flex-1"
            title="Total Bookings"
            :chartData="chartData"
          />
        </div>
        <div class="mt-5">
          <h1 class="text-2xl font-semibold">Recent Bookings</h1>
          <!-- Container -->
          <RecentBookings />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { chartData } from "~/data/data";
import Chart from "~/components/Chart.vue";
import StatCard from "~/components/StatCard.vue";
import { statCards } from "~/data/data";
import TotalBookingsCard from "~/components/TotalBookingsCard.vue";
import GreetingHeader from "~/components/GreetingHeader.vue";
import { username } from "~/data/data";
</script>
