<script setup lang="ts" generic="T extends { id: PropertyKey }">
const props = defineProps<{
  items: T[]
  columns: Partial<Record<keyof T, string>>
  isLoading: boolean
}>()

const columnKeys = Object.keys(props.columns) as (keyof T)[];
</script>

<template>
  <div class="max-w-6xl mx-auto overflow-x-auto rounded-sm border border-gray-200">
    <h1 v-if="isLoading">Loading</h1>
    <table v-else class="whitespace-nowrap w-full text-sm text-left">
      <thead class="text-sm font-bold uppercase bg-gray-200">
        <tr>
          <th v-for="(key, value) in columns" :key="key" class="px-4 py-3">{{ value }}</th>
          <th class="px-4 py-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          :class="[ index % 2 ? 'bg-gray-100' : 'bg-gray-50' ]"
        >
          <td v-for="key in columnKeys" :key="key" class="px-4 py-2" :class="[ key === 'id' ? 'font-medium' :  'text-slate-600' ]">{{ item[key] }}</td>
          <!-- <td class="px-4 py-2">
            <span
              class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium text-gray-700 border border-gray-600"
            >
              {{ item.email === 'City7gor@gmail.com' ? 'Admin' : 'User' }}
            </span>
          </td> -->
          <td class="px-4 py-2 text-right">
            <button class="text-blue-700 hover:text-blue-500 font-medium">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
