<template>
  <div
    class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6"
  >
    <div>
      <h2 class="text-3xl font-bold">Good Morning, {{ username }}</h2>
      <p class="text-gray-500 mt-1">{{ today }}</p>
    </div>
    <div class="relative">
      <button
        class="flex items-center gap-2 border border-blue-400 text-blue-600 px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-blue-50 transition w-fit"
        @click="showDropdown = !showDropdown"
      >
        <Icon name="lucide:calendar" />
        <span>This Week</span>
      </button>
      <div
        v-if="showDropdown"
        class="absolute right-0 mt-2 bg-white border rounded shadow p-4 z-10 min-w-[180px]"
      >
        <p class="text-gray-700 text-sm">
          Showing stats for <span class="font-semibold">this week</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  username: String,
});
const showDropdown = ref(false);
const today = computed(() => {
  const d = new Date();
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
});
</script>
