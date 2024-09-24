import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindVite from "@tailwindcss/vite";

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
    // @ts-expect-error
    plugins: () => [
      tailwindVite(),
      tsConfigPaths({
        root: ".",
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});
