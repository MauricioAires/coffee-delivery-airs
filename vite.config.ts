import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const htmlPlugin = () => ({
    name: 'html-transform',
    transformIndexHtml: (html: string): string =>
      html.replace(/%=(.*?)%/g, (match, p1) => env[p1] ?? match),
  })

  return defineConfig({
    plugins: [htmlPlugin()],
    server: {
      host: true,
    },
  })
}
