import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(), 
      tsconfigPaths(), 
      qwikReact(),      
      partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
    ],
    define: {
      'process.env': JSON.stringify(process.env)
    },
    optimizeDeps: {
      include: [ "@auth/core" ]
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
