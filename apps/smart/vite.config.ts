import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@repo/icons': path.resolve(__dirname, '../../packages/icons/src/index.ts')
    }
  },
  server: {
    port: 5173
  }
})
