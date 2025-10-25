import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: '/tact-damage-sim/', // ← リポジトリ名に合わせて
})
