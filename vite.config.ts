import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vite.dev/config/
export default defineConfig({
  base : 'portfolio-v1',
  plugins: [react(),svgr()],
})