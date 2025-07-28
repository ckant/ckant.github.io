<script lang="ts">
  import type { Snippet } from "svelte"

  let { children }: { children: Snippet } = $props()
</script>

<svelte:head>
  <meta name="theme-color" content="var(--theme-accent-color)" />
  <link rel="icon" href="./favicon.svg" type="image/svg+xml" />

  <link
    rel="preload"
    href="/fonts/Outfit.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/PublicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />

  <link rel="preload" href="/images/me.webp" as="image" type="image/webp" fetchpriority="high" />
</svelte:head>

{@render children()}

<style>
  :global {
    @font-face {
      font-style: normal;
      font-weight: 100 900;
      src: url(/fonts/Outfit.woff2) format("woff2");
      font-family: "Outfit";
      font-display: swap;
      unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308,
        U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    @font-face {
      font-style: normal;
      font-weight: 100 900;
      src: url(/fonts/PublicSans.woff2) format("woff2");
      font-family: "Public Sans";
      font-display: swap;
      unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308,
        U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  }

  :root {
    --theme-primary-color: #00aaff;
    --theme-accent-color: color-mix(in srgb, var(--theme-primary-color), #ffffff 50%);

    --primary-bg-color: var(--theme-primary-color);
    --secondary-bg-color: var(--theme-accent-color);
    --text-color: #000000;
    --icon-color: var(--text-color);
    --logo-color: #ffffff;
    --text-bg-color: #ffffff;
    --icon-bg-color: var(--text-bg-color);
    --border-color: #000000;
    --border-radius: 0.375rem;
    --box-shadow-color: #000000;

    --primary-font-family:
      "Public Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --secondary-font-family:
      "Outfit", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";

    --monospace-font-family:
      ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;

    --heading-line-height: 1.15;
    --text-line-height: 1.4;
    --monospace-line-height: 1.15;

    --header-height: 4rem;
    --main-height: 1fr;
    --main-min-height: calc(
      100vh - var(--footer-height) - var(--spacing) - var(--header-height) - var(--spacing)
    );
    --main-max-width: 80rem;
    --footer-height: 4rem;

    --spacing: 1rem;

    --box-shadow-offset: 0.25rem;
    --box-shadow: var(--box-shadow-offset) var(--box-shadow-offset) 0 0 var(--box-shadow-color);

    --box-shadow-translate: var(--box-shadow-offset) var(--box-shadow-offset);
    --box-shadow-untranslate: calc(0rem - var(--box-shadow-offset))
      calc(0rem - var(--box-shadow-offset));

    --thick-border-size: 0.25rem;
    --medium-border-size: 0.2rem;
    --normal-border-size: 0.125rem;
    --thin-border-size: 0.0625rem;

    --thick-border: var(--thick-border-size) solid var(--border-color);
    --medium-border: var(--medium-border-size) solid var(--border-color);
    --normal-border: var(--normal-border-size) solid var(--border-color);
    --thin-border: var(--thin-border-size) solid var(--border-color);

    --thick-box-outline-size: calc((var(--thick-border-size) * 2) + (var(--box-shadow-offset)));
    --medium-box-outline-size: calc((var(--medium-border-size) * 2) + (var(--box-shadow-offset)));
    --normal-box-outline-size: calc((var(--normal-border-size) * 2) + (var(--box-shadow-offset)));
    --thin-box-outline-size: calc((var(--thin-border-size) * 2) + (var(--box-shadow-offset)));
  }

  :global {
    @layer base {
      *,
      ::before,
      ::after {
        box-sizing: border-box;
      }

      * {
        margin: 0;
      }

      img,
      svg {
        display: block;
        max-width: 100%;
      }

      html {
        line-height: var(--text-line-height);
        font-family: var(--primary-font-family), system-ui;
        -webkit-text-size-adjust: 100%;
        font-style: normal;
        font-weight: 400;
        font-optical-sizing: auto;
        tab-size: 4;
      }

      body {
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        background-color: var(--secondary-bg-color);
      }

      code,
      kbd,
      samp,
      pre {
        line-height: var(--monospace-line-height);
        font-family: var(--monospace-font-family), ui-monospace;
      }

      :where(h1) {
        font-size: 2.5rem;
      }

      small {
        font-size: 0.8rem;
      }

      button,
      input,
      select,
      textarea {
        margin: 0;
        line-height: var(--text-line-height);
        font-family: inherit;
      }
    }
  }
</style>
