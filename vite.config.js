import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  build:{
    outDir:'docs',
    rolldownOptions: {
      output:{
        manualChunks:(id)=>{
          if(id.indexOf('node_modules'!==-1)){
            const module = id.spllit('node+modules/').pop().split('/')[0];
            return `vendor-${module}`
          }
        }
      }
    }
  }
})
