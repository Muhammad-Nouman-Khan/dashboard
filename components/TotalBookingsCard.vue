<template>
  <div class="border flex-1 border-gray-300 shadow-md rounded-lg bg-white p-5">
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <!-- Stats -->
    <div
      class="flex items-center gap-2 mt-3"
      v-for="item in chartData"
      :key="item.title"
    >
      <!-- Title -->
      <div class="flex items-center gap-2 min-w-24">
        <Icon :name="item.icon" size="16" :style="{ color: item.iconColor }" />
        <p class="text-gray-500 text-sm">{{ item.title }}</p>
      </div>
      <!-- Progress -->
      <div class="flex-1">
        <div class="w-full h-2 bg-orange-200 rounded-full">
          <div
            class="h-full bg-orange-600 rounded-full"
            :style="{ width: (item.progress || 0) + '%' }"
          ></div>
        </div>
      </div>
      <!-- Money -->
      <p class="text-gray-500 text-sm min-w-16 text-end">
        Rs. {{ item.money }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  chartData: Array,
});
</script>
