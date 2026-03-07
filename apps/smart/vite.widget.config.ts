import path from 'path'
import obfuscatorPlugin from 'rollup-plugin-obfuscator'
import { defineConfig } from 'vite'

// Builds the embeddable widget as a single obfuscated IIFE JS file
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/widget/smart-popup.ts'),
      name: 'SmartPopup',
      formats: ['iife'],
      fileName: () => 'smart-popup.js'
    },
    outDir: 'dist-widget',
    emptyOutDir: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      },
      plugins: [
        obfuscatorPlugin({
          options: {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.5,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.3,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            renameGlobals: false,
            rotateStringArray: true,
            selfDefending: false,
            shuffleStringArray: true,
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayEncoding: ['base64'],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 2,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersType: 'function',
            stringArrayThreshold: 0.75,
            target: 'browser',
            transformObjectKeys: true,
            unicodeEscapeSequence: false
          }
        })
      ]
    }
  }
})
