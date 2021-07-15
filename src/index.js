import history from 'connect-history-api-fallback'

export default function createVitePluginHistory(options) {
    return {
        name: 'vite-plugin-history',
        enforce: 'pre',
        configureServer(server) {
            server.middlewares.use(history({
                verbose: Boolean(process.env.DEBUG) && process.env.DEBUG !== 'false',
                disableDotRule: undefined,
                htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
                ...options,
            }))
        },
    }
}
