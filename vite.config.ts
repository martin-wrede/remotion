import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // Remotion uses a specific public folder
    publicDir: "public",
    build: {
        outDir: "dist",
    },
});
