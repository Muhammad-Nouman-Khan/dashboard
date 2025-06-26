<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const openDropdown = ref(null);

function toggleDropdown(type) {
  openDropdown.value = openDropdown.value === type ? null : type;
}

function handleClickOutside(event) {
  if (!event.target.closest(".navbar-dropdown")) {
    openDropdown.value = null;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <nav
    class="w-full flex justify-between items-center bg-white shadow-sm pt-[15px] pb-[15px] pl-[20px] pr-[20px] fixed top-0 left-0 z-50"
  >
    <div class="flex items-center gap-[10px]">
      <Icon
        name="lucide:menu"
        size="25"
        @click="$emit('toggleSidebar')"
        class="cursor-pointer"
      />
      <NuxtLink to="/" class="italic text-2xl font-bold">bookme</NuxtLink>
    </div>
    <div class="flex items-center gap-2">
      <div class="relative navbar-dropdown">
        <div
          class="rounded-full bg-[#F6F9FD] flex items-center justify-center h-[42px] w-[42px] cursor-pointer"
          @click.stop="toggleDropdown('mail')"
        >
          <Icon name="lucide:mail" style="color: #346cc4" />
        </div>
        <div
          v-if="openDropdown === 'mail'"
          class="absolute right-0 mt-2 bg-white border-2 border-[#E6E6E6] rounded shadow p-4 z-50 min-w-[180px]"
        >
          <p class="text-[#3C3C3C] text-sm">No messages.</p>
        </div>
      </div>
      <div class="relative navbar-dropdown">
        <div
          class="rounded-full bg-[#F6F9FD] flex items-center justify-center h-[42px] w-[42px] cursor-pointer"
          @click.stop="toggleDropdown('notifications')"
        >
          <Icon name="lucide:bell" style="color: #346cc4" />
        </div>
        <div
          v-if="openDropdown === 'notifications'"
          class="absolute right-0 mt-2 bg-white border-2 border-[#E6E6E6] rounded shadow p-4 z-50 min-w-[180px]"
        >
          <p class="text-[#3C3C3C] text-sm">No notifications.</p>
        </div>
      </div>
      <div class="relative navbar-dropdown">
        <div
          class="rounded-full bg-[#F6F9FD] flex items-center justify-center h-[42px] w-[42px] cursor-pointer"
          @click.stop="toggleDropdown('profile')"
        >
          <Icon name="lucide:user" style="color: #346cc4" />
        </div>
        <div
          v-if="openDropdown === 'profile'"
          class="absolute right-0 mt-2 bg-white border-2 border-[#E6E6E6] rounded shadow p-4 z-50 min-w-[180px]"
        >
          <p class="text-[#3C3C3C] text-sm">Profile options here.</p>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <Icon
          name="lucide:chevron-down"
          size="18"
          style="color: #346cc4"
          class="-ml-2"
        />
      </div>
    </div>
  </nav>
</template>
