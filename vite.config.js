import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import react from '@vitejs/plugin-react'

// export plugins
export default {
  plugins: [
    vue(),
    vueJsx(),
    //options are passed on to @vue/babel-plugin.jsx
    react(),
    
    ({
    
    ]}
    })]
}
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
