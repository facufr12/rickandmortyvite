import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://facufr12.github.io/rickandmortyvite/",
  plugins: [react()]
})
