<template>
  <div class="min-h-screen flex flex-col">
    <Navbar @toggleSidebar="sidebarOpen = !sidebarOpen" />
    <div class="flex flex-1">
      <Sidebar :visible="sidebarOpen" />
      <main
        class="flex-1 bg-[#F6F9FD] mt-[70px] p-3 lg:p-6 transition-all duration-300"
        :class="sidebarOpen ? 'lg:ml-[289px]' : 'lg:ml-0'"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "~/components/Navbar.vue";
import Sidebar from "~/components/Sidebar.vue";
const sidebarOpen = ref(true);
</script>
