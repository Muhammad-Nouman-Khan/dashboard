<template>
  <div
    class="border flex-1 border-[#E6E6E6] shadow-md rounded-lg bg-white pt-10 p-5"
  >
    <h1 class="text-xl font-semibold text-[#15223C]">{{ title }}</h1>
    <!-- Stats -->
    <div
      class="flex items-center gap-2 mt-6"
      v-for="item in totalBookings"
      :key="item.title"
    >
      <!-- Title -->
      <div class="flex items-center gap-2 min-w-24">
        <Icon :name="item.icon" size="16" :style="{ color: item.iconColor }" />
        <p class="text-[#808080] text-sm">{{ item.title }}</p>
      </div>
      <!-- Progress -->
      <div class="flex-1">
        <div class="w-full h-2 bg-orange-100 rounded-full">
          <div
            class="h-full bg-gradient-to-r from-[#F79042] to-[#FCAE73] rounded-full"
            :style="{ width: (item.progress || 0) + '%' }"
          ></div>
        </div>
      </div>
      <!-- Money -->
      <p class="text-[#808080] text-sm min-w-16 text-end">
        Rs. {{ item.money }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  totalBookings: Array,
});
</script>
