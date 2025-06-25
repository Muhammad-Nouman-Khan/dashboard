<script setup lang="ts">
import { navLinks } from "@/data/data";
const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
});

const isActive = (link: any) => link.title === "Dashboard";
</script>

<template>
  <aside
    v-if="props.visible"
    class="w-[289px] bg-white text-sm flex flex-col pr-[20px] pl-[20px] pt-[12px] pb-[12px] fixed top-[70px] left-0 z-40 min-h-screen"
  >
    <nav class="flex flex-col gap-2 border-b border-[#E6E6E6] pb-[12px]">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.title"
        to="/"
        :class="[
          'flex items-center gap-2 rounded-lg p-2',
          isActive(link)
            ? 'bg-[#F6F9FD] text-[#346CC4] font-semibold border border-[#346CC4]'
            : 'text-[#808080] hover:bg-[#F6F9FD]',
        ]"
      >
        <Icon :name="link.icon" size="20" />
        <span>{{ link.title }}</span>
      </NuxtLink>
    </nav>
    <div class="pt-[12px]">
      <div class="p-4 space-y-2 border border-[#C3D5EF] rounded-lg">
        <div class="flex gap-2">
          <Icon name="lucide:credit-card" size="20" style="color: #346cc4" />
          <span class="text-[#346CC4] font-medium">Credit</span>
        </div>
        <h1 class="font-medium text-[#3C3C3C]">Total Balance</h1>
        <p class="text-[#3C3C3C]">PKR 510</p>
      </div>
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-[#F34141] hover:bg-red-100 rounded-lg p-2 mt-4"
      >
        <Icon name="lucide:log-out" size="20" style="color: #f34141" />
        Logout
      </NuxtLink>
    </div>
  </aside>
</template>
