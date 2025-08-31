import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "127.0.0.1",   // force IPv4 (avoids ::1/IPv6 quirks)
    port: 5174,          // use the port you tried
    strictPort: true     // fail if taken instead of silently changing
  },
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
