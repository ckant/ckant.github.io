<script lang="ts">
  import type { Snippet } from "svelte"

  let { children }: { children: Snippet } = $props()
</script>

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
    /* Colors */
    --theme-primary-color: #00aaff;
    --theme-accent-color: color-mix(in srgb, var(--theme-primary-color), #ffffff 50%);
    --theme-container-color: #ffffff;

    --primary-bg-color: var(--theme-primary-color);
    --secondary-bg-color: var(--theme-accent-color);
    --icon-color: #000000;
    --logo-color: var(--theme-container-color);
    --text-bg-color: var(--theme-container-color);
    --icon-bg-color: var(--text-bg-color);
    --border-color: #000000;
    --box-shadow-color: var(--border-color);

    /* Text */
    --primary-font-family:
      "Public Sans", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --secondary-font-family:
      "Outfit", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";

    --monospace-font-family:
      ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;

    /* Widths and heights */
    --header-height: 4rem;

    --text-footer-height: 2rem;
    --cat-footer-height: var(--text-footer-height);
    --footer-height: calc(var(--cat-footer-height) + var(--text-footer-height));

    --main-height: 1fr;
    --main-min-height: calc(
      100vh - var(--footer-height) - var(--spacing) - var(--header-height) - var(--spacing)
    );
    --main-max-width: 80rem;

    --project-min-width: 18.75rem;
    --pic-min-width: var(--project-min-width);
    --pic-max-width: 25rem;

    --button-size: 2.25rem;
    --icon-size: 1.2rem;
    --cat-height: 1.75rem;

    /* Spacing */
    --spacing: 1rem;

    /* Borders and box shadows */
    --border-radius: 0.375rem;

    --thick-border-width: 0.25rem;
    --medium-border-width: 0.2rem;
    --normal-border-width: 0.125rem;
    --thin-border-width: 0.0625rem;

    --thick-border: var(--thick-border-width) solid var(--border-color);
    --medium-border: var(--medium-border-width) solid var(--border-color);
    --normal-border: var(--normal-border-width) solid var(--border-color);
    --thin-border: var(--thin-border-width) solid var(--border-color);

    --box-shadow-offset: 0.25rem;
    --box-shadow: var(--box-shadow-offset) var(--box-shadow-offset) 0 0 var(--box-shadow-color);

    --thick-box-outline-size: calc((var(--thick-border-width) * 2) + (var(--box-shadow-offset)));
    --medium-box-outline-size: calc((var(--medium-border-width) * 2) + (var(--box-shadow-offset)));
    --normal-box-outline-size: calc((var(--normal-border-width) * 2) + (var(--box-shadow-offset)));
    --thin-box-outline-size: calc((var(--thin-border-width) * 2) + (var(--box-shadow-offset)));

    --box-shadow-translate: var(--box-shadow-offset) var(--box-shadow-offset);
    --box-shadow-untranslate: calc(0rem - var(--box-shadow-offset))
      calc(0rem - var(--box-shadow-offset));
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
        line-height: 1.4;
        font-family: var(--primary-font-family), system-ui;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
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
        line-height: 1.15;
        font-family: var(--monospace-font-family), ui-monospace;
      }

      a {
        color: inherit;
        text-decoration: inherit;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: inherit;
        font-size: inherit;
      }

      button,
      input,
      select,
      textarea {
        appearance: none;
        margin: 0;
        border: none;
        background: transparent;
        padding: 0;
        line-height: 1.4;
        font-family: inherit;
      }
    }
  }
</style>
