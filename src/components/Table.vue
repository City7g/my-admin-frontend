<script setup lang="ts" generic="T extends { id: PropertyKey }">
import type { FetchStatus } from '@tanstack/vue-query'
import Error from './Error.vue'
import Spinner from './Spinner.vue'

const props = defineProps<{
  items: T[] | undefined
  columns: Record<string, string>
  status: 'pending'| 'success' | 'error'
  fetchStatus: FetchStatus
}>()

const columnKeys = Object.keys(props.columns) as (keyof T)[];
</script>

<template>
  <div class="max-w-6xl mx-auto overflow-x-auto rounded-sm border border-gray-200">
    <table class="whitespace-nowrap w-full text-sm text-left">
      <thead class="text-sm font-bold uppercase bg-gray-200">
        <tr>
          <th v-for="(key, value) in columns" :key="key" class="px-4 py-3">
            {{ value }}
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-if="status === 'pending'">
          <tr>
            <td :colspan="columnKeys.length" class="px-4 py-48">
              <Spinner />
            </td>
          </tr>
        </template>

        <template v-else-if="status === 'error'">
          <tr>
            <td :colspan="columnKeys.length" class="px-4 py-48">
              <Error />
            </td>
          </tr>
        </template>

        <template v-else>
          <tr
            v-for="(item, index) in items"
            :key="item.id"
            :class="[ index % 2 ? 'bg-gray-100' : 'bg-gray-50' ]"
          >
            <td v-for="key in columnKeys" :key="key" class="px-4 py-2" :class="[ key === 'id' ? 'font-medium' :  'text-slate-600' ]">
              <slot :name="`cell-${String(key)}`" :item="item">
                {{ item[key] }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>