import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./tests/setup.ts'],
		coverage: {
			include: [
				'src/components/**',
			],
		},
	    alias: {
			'@': resolve(__dirname, './src')
		  }
	},
})
