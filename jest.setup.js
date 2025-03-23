require('@testing-library/jest-dom')

global.import = {
	meta: {
		env: {
			VITE_OPENWEATHER_API_KEY: 'mock-api-key',
		},
	},
}

global.fetch = jest.fn()

afterEach(() => {
	jest.clearAllMocks()
})
