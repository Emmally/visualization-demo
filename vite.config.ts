import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({  
  // define:{global:{}},
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve(__dirname,'./src')
    }
  }
})
