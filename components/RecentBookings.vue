<template>
  <div class="w-full shadow-lg mt-5">
    <table class="w-full border-gray-400 text-sm text-left">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th class="px-4 py-2 border-r rounded-tl-lg border-gray-300">
            Sr. #
          </th>
          <th class="px-4 py-2 border-r border-gray-300 hidden md:table-cell">
            Order ID
          </th>
          <th class="px-4 py-2 border-r border-gray-300 hidden md:table-cell">
            Booked For
          </th>
          <th class="px-4 py-2 border-r border-gray-300">Booking Type</th>
          <th class="px-4 py-2 border-r border-gray-300 hidden md:table-cell">
            Debit
          </th>
          <th class="px-4 py-2 border-r border-gray-300 hidden md:table-cell">
            Credit
          </th>
          <th class="px-4 py-2 border-r border-gray-300">Total</th>
          <th class="px-4 py-2 border-r border-gray-300">Status</th>
          <th
            class="px-4 py-2 border-gray-300 rounded-tr-lg hidden sm:table-cell"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(booking, index) in bookings"
          :key="index"
          class="bg-white text-gray-500 font-medium"
        >
          <td class="px-4 py-2 border-r border-b border-gray-300">
            {{ index + 1 }}
          </td>
          <td
            class="px-4 py-2 border-r border-b border-gray-300 hidden md:table-cell"
          >
            {{ booking.orderId }}
          </td>
          <td
            class="px-4 py-2 border-r border-b border-gray-300 hidden md:table-cell"
          >
            {{ booking.bookedFor }}
          </td>
          <td class="px-4 py-2 border-r border-b border-gray-300">
            {{ booking.bookingType }}
          </td>
          <td
            class="px-4 py-2 border-r border-b border-gray-300 hidden md:table-cell"
          >
            <span class="text-red-600"
              >Rs {{ booking.debit.toLocaleString() }}</span
            >
          </td>
          <td
            class="px-4 py-2 border-r border-b border-gray-300 hidden md:table-cell"
          >
            <span class="text-green-600"
              >Rs {{ booking.credit.toLocaleString() }}</span
            >
          </td>
          <td class="px-4 py-2 border-r border-b border-gray-300">
            <span class="text-gray-500"
              >Rs {{ booking.total.toLocaleString() }}</span
            >
          </td>
          <td class="px-4 py-2 border-r border-b border-gray-300">
            <span
              :class="[
                'px-2 py-1 rounded text-xs font-medium',
                booking.status === 'Paid'
                  ? ' text-green-700 bg-green-200'
                  : booking.status === 'Unpaid'
                  ? ' text-red-700 bg-red-200'
                  : ' text-yellow-600 bg-yellow-200',
              ]"
            >
              {{ booking.status }}
            </span>
          </td>
          <td
            class="px-4 py-2 border-b border-gray-300 text-center text-gray-500 hidden sm:table-cell"
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
