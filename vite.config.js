import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/@firebase/")) {
            if (id.includes("/firestore/")) return "firebase-firestore";
            if (id.includes("/auth/")) return "firebase-auth";
            return "firebase-shared";
          }

          if (id.includes("/node_modules/firebase/")) {
            return "firebase";
          }
        },
      },
    },
  },
});
