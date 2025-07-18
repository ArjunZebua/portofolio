// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   darkMode: 'class',
//   plugins: [react(),tailwindcss()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // Add support for 3D model files
})