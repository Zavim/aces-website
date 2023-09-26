import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [
    react(),
    mdx({
      syntaxHighlight: "shiki",
    }),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      // bridge: true,
      apiOptions: {
        region: "us",
      },
      components: {
        page: "storyblok/Page",
        blueBox: "storyblok/BlueBox",
      },
      // componentsDir: "src",
      // enableFallbackComponent: false,
      // customFallbackComponent: "",
      // useCustomApi: false,
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
