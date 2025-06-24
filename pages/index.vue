<template>
  <div>
    <Navbar @toggleSidebar="sidebarOpen = !sidebarOpen" />
    <div class="flex">
      <Sidebar :visible="sidebarOpen" />
      <main class="flex-1 min-h-screen bg-blue-100">
        <!-- Dashboard Header -->
        <div class="p-8">
          <div
            class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
          >
            <div>
              <h2 class="text-3xl font-bold">Good Morning, Shijra</h2>
              <p class="text-gray-500 mt-1">Monday, 20-August-2024</p>
            </div>
            <button
              class="flex items-center gap-2 border border-blue-400 text-blue-600 px-4 py-2 rounded-lg bg-white hover:bg-blue-50 transition w-fit"
            >
              <Icon name="lucide:calendar" />
              <span>This Week</span>
            </button>
          </div>
          <!-- Card Row -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              class="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border-l-5 border-blue-500"
            >
              <span class="text-gray-500">Total Bookings</span>
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold">512</span>
                <span class="text-sm text-red-500 flex items-center gap-1">
                  <Icon name="lucide:arrow-down" size="16" />
                  11.09%
                </span>
                <div
                  class="ml-auto cursor-pointer hover:bg-blue-50 rounded-full p-2"
                >
                  <div
                    class="bg-blue-50 rounded-full p-4 flex items-center justify-center"
                  >
                    <Icon
                      name="lucide:calendar"
                      class="text-blue-500"
                      size="24"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Total Savings -->
            <div
              class="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border-l-5 border-blue-500"
            >
              <span class="text-gray-500">Total Savings</span>
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold">45666</span>
                <span class="text-sm text-green-600 flex items-center gap-1">
                  <Icon name="lucide:arrow-up" size="16" />
                  11.09%
                </span>
                <div
                  class="ml-auto cursor-pointer hover:bg-blue-50 rounded-full p-2"
                >
                  <div
                    class="bg-blue-50 rounded-full p-4 flex items-center justify-center"
                  >
                    <Icon
                      name="lucide:calendar"
                      class="text-blue-500"
                      size="24"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Total Expense -->
            <div
              class="bg-white rounded-xl p-6 flex flex-col gap-2 shadow-sm border-l-5 border-blue-500"
            >
              <span class="text-gray-500">Total Expense</span>
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold">512</span>
                <span class="text-sm text-red-500 flex items-center gap-1">
                  <Icon name="lucide:arrow-down" size="16" />
                  11.09%
                </span>
                <div
                  class="ml-auto cursor-pointer hover:bg-blue-50 rounded-full p-2"
                >
                  <div
                    class="bg-blue-50 rounded-full p-4 flex items-center justify-center"
                  >
                    <Icon
                      name="lucide:calendar"
                      class="text-blue-500"
                      size="24"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Dashboard Header -->
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const sidebarOpen = ref(false);
</script>
