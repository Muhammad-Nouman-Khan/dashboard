<template>
  <div
    class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 pt-2"
  >
    <div>
      <h2 class="text-3xl font-bold text-[#3C3C3C]">
        Good Morning, {{ username }}
      </h2>
      <p class="text-[#808080] mt-1">{{ today }}</p>
    </div>
    <div class="relative">
      <button
        class="flex items-center gap-2 border border-[#346CC4] text-[#346CC4] px-4 py-2 rounded-lg bg-white cursor-pointer hover:bg-[#F6F9FD] transition w-fit"
        @click="showDropdown = !showDropdown"
      >
        <Icon name="lucide:calendar" />
        <span class="text-[#346CC4]">This Week</span>
        <Icon name="lucide:chevron-down" size="16" />
      </button>
      <div
        v-if="showDropdown"
        class="absolute left-0 lg:-left-12 mt-2 bg-white border-2 border-[#E6E6E6] rounded shadow-md p-4 z-10 min-w-[180px]"
      >
        <p class="text-[#3C3C3C] text-sm">
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
