import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					'@primary-color': '#1DA57A',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@models': path.resolve(__dirname, './src/weather-dashboard/models'),
			'@services': path.resolve(__dirname, './src/weather-dashboard/services'),
			'@viewmodels': path.resolve(__dirname, './src/weather-dashboard/viewmodels'),
			'@views': path.resolve(__dirname, './src/weather-dashboard/views'),
			'@components': path.resolve(__dirname, './src/weather-dashboard/views/components'),
			'@pages': path.resolve(__dirname, './src/weather-dashboard/views/pages'),
			'@hooks': path.resolve(__dirname, './src/weather-dashboard/viewmodels/hooks'),
			'@utils': path.resolve(__dirname, './src/weather-dashboard/utils'),
			'@assets': path.resolve(__dirname, './src/weather-dashboard/assets'),
			'@config': path.resolve(__dirname, './src/weather-dashboard/config'),
			'@enums': path.resolve(__dirname, './src/weather-dashboard/models/enums'),
			'@constants': path.resolve(__dirname, './src/weather-dashboard/models/constants'),
			'@interfaces': path.resolve(__dirname, './src/weather-dashboard/models/interfaces'),
		},
	},
})
