import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entryPoints: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    minify: false,
    outDir: 'dist/',
    clean: true,
    sourcemap: false,
    bundle: true,
    splitting: false,
    outExtension(ctx) {
      return {
        dts: '.d.ts',
        js: ctx.format === 'cjs' ? '.cjs' : '.mjs'
      }
    },
    treeshake: false,
    target: 'es2022',
    platform: 'node',
    tsconfig: './tsconfig.json',
    cjsInterop: true,
    keepNames: true,
    skipNodeModulesBundle: false
  },
  // Bin files
  {
    entryPoints: ['src/bin/fix-imports.ts'],
    format: ['cjs'],
    outDir: 'dist/bin',
    clean: true,
    minify: false,
    sourcemap: false,
    bundle: true,
    outExtension(ctx) {
      return {
        js: '.cjs' // Ensure bin files have .js extension
      }
    },
    target: 'es2022',
    platform: 'node',
    tsconfig: './tsconfig.json',
    cjsInterop: true,
    keepNames: true,
    skipNodeModulesBundle: false
  }
])
