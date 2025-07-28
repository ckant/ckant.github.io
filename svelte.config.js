import adapterStatic from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapterStatic(),
    output: {
      bundleStrategy: "inline",
    },
    paths: {
      base: "",
    },
    typescript: {
      config: (tsconfig) => {},
    },
  },
}

export default config
