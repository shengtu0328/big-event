import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //解决跨域问题
  server: {
    proxy: {
      '/api': {
        //获取包含/api的请求
        target: "http://localhost:8080",
        changeOrigin: true,
        //'api'替换为'',       
        rewrite:(path)=> path.replace(/^\/api/,'')   
      }

    }
  }
}
)
