<script setup lang="ts">
import { ref, reactive } from 'vue'

const open = ref(false)

const menuItems = ref(['Attendance', 'Reports', 'Sign out'])
</script>

<template>
  <div class="min-h-screen">
    <div class="antialiased bg-gray-100 dark-mode:bg-gray-900 shadow">
      <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div
          x-data="{ open: true }"
          class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
        >
          <div class="flex flex-row items-center justify-between p-4">
            <a
              href="#"
              class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >Records UI</a
            >
          </div>
          <nav
            :class="{ flex: open, hidden: !open }"
            class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row"
          >
            <a
              v-for="(item, index) in menuItems"
              :key="index"
              class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              href="#"
              >{{ item }}</a
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
