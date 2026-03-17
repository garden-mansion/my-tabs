import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  optimizeDeps: {
    include: ['dayjs', 'dayjs/locale/ru']
  },

  server: {
    // Добавьте для избежания проблем с кэшированием
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: true
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
})
