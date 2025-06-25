<template>
  <nav
    class="w-full flex justify-between items-center p-4 sticky top-0 z-50 bg-white shadow-md"
  >
    <div class="flex items-center gap-4">
      <Icon
        name="lucide:menu"
        size="25"
        class="cursor-pointer"
        @click="$emit('toggleSidebar')"
      />
      <h1 class="italic text-2xl font-bold">bookme</h1>
    </div>

    <div class="flex items-center gap-4">
      <div class="relative">
        <div
          class="rounded-full bg-[#F6F9FD] flex items-center justify-center p-2 cursor-pointer"
          @click="toggleDropdown('mail')"
        >
          <Icon name="lucide:mail" style="color: cadetblue" />
        </div>
        <div
          v-if="openDropdown === 'mail'"
          class="absolute right-0 mt-2 bg-white border rounded shadow p-4 z-50 min-w-[180px]"
        >
          <p class="text-gray-700 text-sm">No messages.</p>
        </div>
      </div>
      <div class="relative">
        <div
          class="rounded-full bg-[#F6F9FD] flex items-center justify-center p-2 cursor-pointer"
          @click="toggleDropdown('notifications')"
        >
          <Icon name="lucide:bell" style="color: cadetblue" />
        </div>
        <div
          v-if="openDropdown === 'notifications'"
          class="absolute right-0 mt-2 bg-white border rounded shadow p-4 z-50 min-w-[180px]"
        >
          <p class="text-gray-700 text-sm">No notifications.</p>
        </div>
      </div>
      <div class="relative">
        <div
          class="rounded-full bg-[#F6F9FD] flex items-center justify-center p-2 cursor-pointer"
          @click="toggleDropdown('profile')"
        >
          <Icon name="lucide:user" style="color: cadetblue" />
        </div>
        <div
          v-if="openDropdown === 'profile'"
          class="absolute right-0 mt-2 bg-white border rounded shadow p-4 z-50 min-w-[180px]"
        >
          <p class="text-gray-700 text-sm">{{ username }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { username } from "~/data/data";
const openDropdown = ref(null);
function toggleDropdown(type) {
  openDropdown.value = openDropdown.value === type ? null : type;
}
</script>
