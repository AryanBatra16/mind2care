import { defineConfig, mergeConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig(async (env) => {
  const { mode } = env;

  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return mergeConfig(
    {
      server: { host: "::", port: 8080 },
    },
    {
      define: envDefine,
      resolve: {
        alias: {
          "@": `${process.cwd()}/src`,
        },
        dedupe: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
          "@tanstack/react-query",
          "@tanstack/query-core",
        ],
      },
      plugins: [
        tanstackStart(),
        react(),
        tailwindcss(),
        tsconfigPaths({ projects: ["./tsconfig.json"] }),
      ],
    }
  );
});
