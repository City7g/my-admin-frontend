<template>
  <div class="max-w-6xl mx-auto overflow-x-auto rounded-sm border border-gray-300">
    <table class="whitespace-nowrap w-full text-sm text-left">
      <thead class="text-sm font-bold uppercase bg-gray-300">
        <tr>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3">Title</th>
          <th class="px-4 py-3">Email</th>
          <th class="px-4 py-3">Role</th>
          <th class="px-4 py-3 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in 13"
          :key="user"
          :class="{ 'bg-gray-200': user % 2 === 0, 'bg-gray-100': user % 2 !== 0 }"
          class="hover:bg-gray-750 transition"
        >
          <td class="px-4 py-2 font-medium">Lindsay Walton</td>
          <td class="px-4 py-2 text-slate-600">Front-end Developer</td>
          <td class="px-4 py-2 text-slate-600">lindsay.walton@example.com</td>
          <td class="px-4 py-2">
            <span
              class="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gray-200 text-gray-700 border border-gray-600"
            >
              Member
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
