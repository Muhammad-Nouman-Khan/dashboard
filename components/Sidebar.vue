<script setup lang="ts">
import { useRoute } from "vue-router";
import { navLinks, type NavItem } from "@/data/data";

const route = useRoute();

const getRoute = (title: string): string => {
  switch (title) {
    case "Dashboard":
      return "/";
    case "My Bookings":
      return "/bookings";
    case "Approvals":
      return "/approvals";
    case "Ledger":
      return "/ledger";
    case "Make Bookings":
      return "/bookings/new";
    case "Reports":
      return "/reports";
    case "Invoices":
      return "/invoices";
    case "Users":
      return "/users";
    case "Passenger List":
      return "/passengers";
    case "Roles and Permissions":
      return "/roles";
    case "Departments":
      return "/departments";
    case "Privacy Policy":
      return "/privacy-policy";
    case "Terms and Conditions":
      return "/terms";
    default:
      return "/";
  }
};

const isActive = (item: NavItem): boolean => {
  return route.path === getRoute(item.title);
};
</script>

<template>
  <div class="p-4 w-64 bg-white text-sm">
    <!-- Links container -->
    <div class="flex flex-col gap-2 cursor-pointer border-b border-gray-300">
      <NuxtLink
        to="/"
        v-for="link in navLinks"
        :key="link.title"
        :class="[
          'flex items-center gap-2 text-gray-500 hover:bg-blue-100 rounded-lg p-2',
          isActive(link)
            ? 'border-blue-500 border bg-blue-100 font-semibold !text-blue-600'
            : '',
        ]"
      >
        <Icon :name="link.icon" size="20" />
        <span>{{ link.title }}</span>
      </NuxtLink>
    </div>

    <!-- Credit -->
    <div class="p-4 space-y-2 border border-blue-200 rounded-lg mt-4">
      <div class="flex gap-2">
        <Icon name="lucide:credit-card" size="20" />
        <span class="text-blue-600 font-medium">Credit</span>
      </div>
      <h1 class="font-medium">Total Balance</h1>
      <p>PKR 510</p>
    </div>

    <!-- Logout -->

    <NuxtLink
      to="/logout"
      class="flex items-center gap-2 text-red-600 hover:bg-red-100 rounded-lg p-2 mt-4"
    >
      <Icon name="lucide:log-out" size="20" />
      <span>Logout</span>
    </NuxtLink>
  </div>
</template>
