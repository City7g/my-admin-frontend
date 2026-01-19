import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import ui from '@nuxt/ui/vite'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        switch: {
          base: 'cursor-pointer'
        },
        button: {
          base: 'cursor-pointer'
        },
        table: {
          slots: {
            td: 'py-2 px-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0',
          }
        }
      },
      theme: {
        defaultVariants: {
          color: 'error'
        }
      }
    }),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
