<template>
  <div class="w-full shadow-md mt-5">
    <table class="w-full border-gray-400 text-sm text-left">
      <thead class="bg-[#E6E6E66B] text-[#3C3C3C]">
        <tr>
          <th :class="headerCellClass + ' rounded-tl-lg'">Sr. #</th>
          <th :class="headerCellClass + ' hidden md:table-cell'">Order ID</th>
          <th :class="headerCellClass + ' hidden md:table-cell'">Booked For</th>
          <th :class="headerCellClass">Booking Type</th>
          <th :class="headerCellClass + ' hidden md:table-cell'">Debit</th>
          <th :class="headerCellClass + ' hidden md:table-cell'">Credit</th>
          <th :class="headerCellClass">Total</th>
          <th :class="headerCellClass">Status</th>
          <th :class="' rounded-tr-lg hidden sm:table-cell'">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="pending">
          <td colspan="9" class="text-center py-4">Loading...</td>
        </tr>
        <tr v-else-if="error">
          <td colspan="9" class="text-center py-4 text-red-500">
            Error loading bookings
          </td>
        </tr>
        <tr
          v-for="(booking, index) in bookings"
          :key="index"
          class="bg-white text-[#808080] font-normal"
        >
          <td :class="cellClass + ' border-r'">{{ index + 1 }}</td>
          <td :class="cellClass + ' border-r hidden md:table-cell'">
            {{ booking.orderId }}
          </td>
          <td :class="cellClass + ' border-r hidden md:table-cell'">
            {{ booking.bookedFor }}
          </td>
          <td :class="cellClass + ' border-r'">{{ booking.bookingType }}</td>
          <td :class="cellClass + ' border-r hidden md:table-cell'">
            <span class="text-red-600"
              >Rs {{ booking.debit.toLocaleString() }}</span
            >
          </td>
          <td :class="cellClass + ' border-r hidden md:table-cell'">
            <span class="text-green-600"
              >Rs {{ booking.credit.toLocaleString() }}</span
            >
          </td>
          <td :class="cellClass + ' border-r'">
            <span class="text-gray-500"
              >Rs {{ booking.total.toLocaleString() }}</span
            >
          </td>
          <td :class="cellClass + ' border-r'">
            <span :class="statusClass(booking.status)">{{
              booking.status
            }}</span>
          </td>
          <td
            :class="
              cellClass + ' text-center text-gray-500 hidden sm:table-cell'
            "
          >
            ⋮
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useFetch } from "#app";

const { data: bookings, pending, error } = useFetch("/api/bookings");

const cellClass = "px-4 py-2 border-b border-[#E6E6E6]";
const headerCellClass = "px-4 py-2 border-r border-[#E6E6E6]";
const statusClass = (status) => [
  "px-2 py-1 rounded text-xs font-medium",
  status === "Paid"
    ? "text-[#2F9461] bg-[#EBF5F0]"
    : status === "Unpaid"
    ? "text-[#F34141] bg-[#FEECEC]"
    : "text-[#FBBC55] bg-[#FFF9EE]",
];
</script>
