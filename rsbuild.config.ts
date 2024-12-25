import { defineConfig } from '@rsbuild/core';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
  dev: {
    writeToDisk: true,
  },
  tools: {
    rspack: {
      infrastructureLogging: {
        // Uncomment this to debug ts-checker-rspack-plugin
        level: 'verbose',
      },
      // watchOptions: {
      //   // Uncomment this to avoid infinite compilation loop
      //   // ignored: /[\\/](?:\.git|node_modules|dist)[\\/]/,
      // },
    },
  },
  plugins: [
    pluginTypeCheck(),
  ],
});
