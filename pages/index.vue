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
              class="flex items-center gap-2 border border-blue-400 text-blue-600 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-blue-50 transition w-fit"
            >
              <Icon name="lucide:calendar" />
              <span>This Week</span>
            </button>
          </div>
          <!-- Card Row -->
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-6">
            <!-- Total Bookings -->
            <div
              class="bg-white flex justify-between rounded-lg border-l-5 border-l-blue-600 p-4"
            >
              <div class="flex-1">
                <p class="text-gray-500">Total Bookings</p>
                <div class="flex gap-2 items-center">
                  <h1 class="text-3xl lg:text-2xl font-bold">512</h1>
                  <div
                    class="flex items-center gap-1 bg-red-200 rounded-lg w-fit p-1"
                  >
                    <Icon
                      name="lucide:arrow-down"
                      size="16"
                      class="text-red-600"
                    />
                    <span class="text-sm font-medium text-red-600 lg:text-xs"
                      >11.09%</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center cursor-pointer">
                <div
                  class="bg-blue-100 rounded-full p-3 flex items-center justify-center"
                >
                  <Icon
                    name="lucide:calendar"
                    style="color: #007bff"
                    size="24"
                  />
                </div>
              </div>
            </div>
            <!-- Total Savings -->
            <div
              class="bg-white flex justify-between rounded-lg border-l-5 border-l-blue-600 p-4"
            >
              <div class="flex-1">
                <p class="text-gray-500">Total Savings</p>
                <div class="flex gap-2 items-center">
                  <h1 class="text-3xl lg:text-2xl font-bold">45666</h1>
                  <div
                    class="flex items-center gap-1 bg-green-200 rounded-lg w-fit p-1"
                  >
                    <Icon
                      name="lucide:arrow-up"
                      size="16"
                      class="text-green-600"
                    />
                    <span class="text-sm font-medium text-green-600 lg:text-xs"
                      >11.09%</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center cursor-pointer">
                <div
                  class="bg-blue-100 rounded-full p-3 flex items-center justify-center"
                >
                  <Icon name="lucide:book" style="color: #007bff" size="24" />
                </div>
              </div>
            </div>
            <!-- Total Expense -->
            <div
              class="bg-white flex justify-between rounded-lg border-l-5 border-l-blue-600 p-4"
            >
              <div class="flex-1">
                <p class="text-gray-500">Total Expense</p>
                <div class="flex gap-2 items-center">
                  <h1 class="text-3xl lg:text-2xl font-bold">512</h1>
                  <div
                    class="flex items-center gap-1 bg-red-200 rounded-lg w-fit p-1"
                  >
                    <Icon
                      name="lucide:arrow-down"
                      size="16"
                      class="text-red-600"
                    />
                    <span class="text-sm lg:text-xs font-medium text-red-600"
                      >11.09%</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-center cursor-pointer">
                <div
                  class="bg-blue-100 rounded-full p-3 flex items-center justify-center"
                >
                  <Icon
                    name="lucide:calendar-check"
                    style="color: #007bff"
                    size="24"
                  />
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
