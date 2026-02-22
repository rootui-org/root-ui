import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts'
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    '@base-ui/react',
    'lucide-react',
    'tailwind-merge',
    'tailwind-variants'
  ],
  treeshake: true,
})