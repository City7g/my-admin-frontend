<script setup lang="ts">
import type { User } from '@/types/Users';

defineProps<{
  items: User[] | undefined,
  isLoading: boolean
}>()
</script>

<template>
  <div class="max-w-6xl mx-auto overflow-x-auto rounded-sm border border-gray-300">
    <h1 v-if="isLoading">Loading</h1>
    <table v-else class="whitespace-nowrap w-full text-sm text-left">
      <thead class="text-sm font-bold uppercase bg-gray-300">
        <tr>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3">Email</th>
          <th class="px-4 py-3">Role</th>
          <th class="px-4 py-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          :class="[ index % 2 ? 'bg-gray-200' : 'bg-gray-100' ]"
          class="hover:bg-gray-750 transition"
        >
          <td class="px-4 py-2 font-medium">{{ item.name }}</td>
          <td class="px-4 py-2 text-slate-600">{{  item.email }}</td>
          <td class="px-4 py-2">
            <span
              class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-gray-700 border border-gray-600"
            >
              {{ item.email === 'City7gor@gmail.com' ? 'Admin' : 'User' }}
            </span>
          </td>
          <td class="px-4 py-2 text-right">
            <button class="text-blue-700 hover:text-blue-500 font-medium">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
