import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/LogisticsWebsite/',
  plugins: [react()],
  // No dev proxy required for PHP-based endpoint served from `public/` or external PHP host.
})
