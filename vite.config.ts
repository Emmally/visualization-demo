import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({  
  base: './',
  // define:{global:{}},
  plugins: [
    vue(),
    viteCompression({
      threshold: 20480
    })
  ],
  resolve:{
    alias:{
      '@':resolve(__dirname,'./src')
    }
  }
})
