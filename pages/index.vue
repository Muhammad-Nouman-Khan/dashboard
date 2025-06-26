<template>
  <div>
    <div class="flex">
      <main class="flex-1">
        <!-- Dashboard Header -->
        <div>
          <GreetingHeader :username="username" />
          <!-- Card Row -->
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-3">
            <div v-if="pending" class="col-span-full text-center py-6">
              Loading stat cards...
            </div>
            <div
              v-else-if="error"
              class="col-span-full text-center text-red-500 py-6"
            >
              Failed to load stat cards.
            </div>
            <template v-else>
              <StatCard
                v-for="card in statCards"
                :key="card.title"
                v-bind="card"
              />
            </template>
          </div>
        </div>
        <div class="flex flex-col gap-6 md:flex-row w-full mt-5">
          <Chart class="flex-1" />

          <TotalBookingsCard
            class="flex-1"
            title="Total Bookings"
            :totalBookings="totalBookings"
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
import { totalBookings } from "~/data/data";
import Chart from "~/components/Chart.vue";
import StatCard from "~/components/StatCard.vue";
import TotalBookingsCard from "~/components/TotalBookingsCard.vue";
import GreetingHeader from "~/components/GreetingHeader.vue";
import { username } from "~/data/data";
const { data: statCards, pending, error } = await useFetch("/api/stats");
</script>
