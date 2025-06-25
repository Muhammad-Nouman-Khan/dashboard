<template>
  <div :class="['bg-white flex justify-between rounded-lg p-4', borderClass]">
    <div class="flex-1">
      <p class="text-gray-500">{{ title }}</p>
      <div class="flex gap-2 items-center">
        <h1 class="text-3xl lg:text-2xl font-bold">{{ value }}</h1>
        <div
          :class="[
            'flex items-center gap-1 rounded-lg w-fit p-1',
            trendBgClass,
          ]"
        >
          <Icon :name="trendIcon" size="16" :class="trendColor" />
          <span :class="['text-sm font-medium lg:text-xs', trendColor]">{{
            trend
          }}</span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center cursor-pointer">
      <div
        class="bg-blue-100 rounded-full p-3 flex items-center justify-center"
      >
        <Icon :name="icon" :style="{ color: iconColor }" size="24" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: String,
  value: [String, Number],
  icon: String,
  iconColor: String,
  borderColor: String,
  trend: String,
  trendIcon: String,
  trendColor: String,
  trendBg: String,
});
const borderClass = computed(() => `border-l-5 border-l-${props.borderColor}`);
const trendBgClass = computed(() =>
  props.trendBg ? `bg-${props.trendBg} rounded-lg` : ""
);
</script>
