import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    vue(),
    mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })
  ]
})
