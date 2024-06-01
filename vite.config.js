import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-optional-chaining-assign",
          {
            "version": "2023-07"
          }
        ]
      ],
      babelrc: true,
      configFile: true,
    }
  })],
})
