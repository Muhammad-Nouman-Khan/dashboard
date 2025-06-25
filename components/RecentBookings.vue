<template>
  <div class="w-full shadow-lg mt-5">
    <table class="w-full border-gray-400 text-sm text-left">
      <thead class="bg-[#E6E6E66B] text-[#3C3C3C]">
        <tr>
          <th class="px-4 py-2 border-r rounded-tl-lg border-[#E6E6E6]">
            Sr. #
          </th>
          <th class="px-4 py-2 border-r border-[#E6E6E6] hidden md:table-cell">
            Order ID
          </th>
          <th class="px-4 py-2 border-r border-[#E6E6E6] hidden md:table-cell">
            Booked For
          </th>
          <th class="px-4 py-2 border-r border-[#E6E6E6]">Booking Type</th>
          <th class="px-4 py-2 border-r border-[#E6E6E6] hidden md:table-cell">
            Debit
          </th>
          <th class="px-4 py-2 border-r border-[#E6E6E6] hidden md:table-cell">
            Credit
          </th>
          <th class="px-4 py-2 border-r border-[#E6E6E6]">Total</th>
          <th class="px-4 py-2 border-r border-[#E6E6E6]">Status</th>
          <th
            class="px-4 py-2 border-[#E6E6E6] rounded-tr-lg hidden sm:table-cell"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(booking, index) in bookings"
          :key="index"
          class="bg-white text-[#808080] font-normal"
        >
          <td class="px-4 py-2 border-r border-b border-[#E6E6E6]">
            {{ index + 1 }}
          </td>
          <td
            class="px-4 py-2 border-r border-b border-[#E6E6E6] hidden md:table-cell"
          >
            {{ booking.orderId }}
          </td>
          <td
            class="px-4 py-2 border-r border-b border-[#E6E6E6] hidden md:table-cell"
          >
            {{ booking.bookedFor }}
          </td>
          <td class="px-4 py-2 border-r border-b border-[#E6E6E6]">
            {{ booking.bookingType }}
          </td>
          <td
            class="px-4 py-2 border-r border-b border-[#E6E6E6] hidden md:table-cell"
          >
            <span class="text-red-600"
              >Rs {{ booking.debit.toLocaleString() }}</span
            >
          </td>
          <td
            class="px-4 py-2 border-r border-b border-[#E6E6E6] hidden md:table-cell"
          >
            <span class="text-green-600"
              >Rs {{ booking.credit.toLocaleString() }}</span
            >
          </td>
          <td class="px-4 py-2 border-r border-b border-[#E6E6E6]">
            <span class="text-gray-500"
              >Rs {{ booking.total.toLocaleString() }}</span
            >
          </td>
          <td class="px-4 py-2 border-r border-b border-[#E6E6E6]">
            <span
              :class="[
                'px-2 py-1 rounded text-xs font-medium',
                booking.status === 'Paid'
                  ? ' text-[#2F9461] bg-[#EBF5F0]'
                  : booking.status === 'Unpaid'
                  ? ' text-[#F34141] bg-[#FEECEC]'
                  : ' text-[#FBBC55] bg-[#FFF9EE]',
              ]"
            >
              {{ booking.status }}
            </span>
          </td>
          <td
            class="px-4 py-2 border-b border-[#E6E6E6] text-center text-gray-500 hidden sm:table-cell"
          >
            ⋮
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { bookings } from "~/data/data";
</script>
