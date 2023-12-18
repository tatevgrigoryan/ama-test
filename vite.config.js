// vite.config.js
import react from "@vitejs/plugin-react";

export default {
    plugins: [react()],
    build: {
        target: 'esnext',
        lib: {
            entry: 'src/main.jsx',
            name: 'MY_APP',
        },
        outDir: 'dist',
        assetsDir: 'assets',
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                entryFileNames: 'plugin.js',
                assetFileNames: 'plugin.css',
            },
        },
    },
};


