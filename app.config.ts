import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  routers: {
    api: {
      entry: "./app/entry-api.ts",
    },
    ssr: {
      entry: "./app/entry-server.tsx",
    },
    client: {
      entry: "./app/entry-client.tsx",
    },
  },
  vite: {
    plugins: () => [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
