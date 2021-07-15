import { resolve } from 'path'

// https://vitejs.dev/config/
export default {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vite-plugin-history'
    },
  },
}
