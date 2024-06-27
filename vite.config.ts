import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node模块提供的path获取绝对路径的方法
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   resolve: {
  alias: {
   "@": path.resolve(__dirname, 'src')
  }
 }
})
