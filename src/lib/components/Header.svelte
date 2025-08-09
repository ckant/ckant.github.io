<script lang="ts">
  import { Iterables } from "$lib/ext/stdlib/Iterables"

  const themeColorWheel = Iterables.cycle("#38b951", "#ff7654", "#f37aaf", "#9facbd", "#00aaff")

  function cycleTheme(): void {
    document.documentElement.style.setProperty(
      "--theme-primary-color",
      themeColorWheel.next().value,
    )
  }
</script>

<header>
  <div class="left-section">
    <a class="logo-link" href="/" aria-label="CK logo link">
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50">
        <path
          stroke="#000000"
          stroke-linejoin="round"
          stroke-width="9"
          d="m44.9 37.4 5 5h.93v-9.7l8.59-7.27c4.49 6.03 9.33 11.7 14.6 17h1.23l-14.5-18.1 13.9-11.8-5-5h-1.4l-17.4 14.7v-9.74c-1.69-1.65-3.34-3.32-5.01-4.99h-.94zM21.6 7.06c-9.15 0-16.9 5.83-16.9 15.4-.15 5.99 3.71 10.2 7.8 14 6.97 8.12 19.6 7.89 26 1.88-1.58-1.53-3.93-4.16-5.48-5.72-3.75 3.05-17.2 9.07-2.85 3.06l2.77-3.11a14.9 14.9 0 0 1-7 3.67c-.85.21-15.4 3.66-15.3-8.83 0-12.8 14.9-17.8 24.5-12.2 1.22.7 2.3 1.56 3.24 2.56l-.57-1.83c.07-.11-1.77-1.81-2-2a14.6 14.6 0 0 0-2-2l.04-.07c-3.26-3.26-8.08-4.89-12.3-4.86z"
        />
        <path
          stroke="#ffffff"
          stroke-linejoin="round"
          stroke-width="5"
          d="M45.4 28.1v-1.2L68.3 7.5h1.4zm-.47 9.3V7.5h.94v29.9zm24.2 0-14.2-17.7.72-.64 14.7 18.3z"
        />
        <path
          stroke="#ffffff"
          stroke-linejoin="round"
          stroke-width="5"
          d="M21.6 37.8c-2.48 0-4.76-.37-6.83-1.1a16.68 16.68 0 0 1-5.34-3.2 14.79 14.79 0 0 1-4.69-10.97c0-2.22.4-4.27 1.2-6.15a14.54 14.54 0 0 1 3.5-4.9 16.28 16.28 0 0 1 5.33-3.25 19.53 19.53 0 0 1 6.83-1.15c1.71 0 3.3.21 4.77.64 1.51.4 2.89.95 4.14 1.66a15.6 15.6 0 0 1 3.42 2.56l-.47.9c-.94-1-2.02-1.85-3.25-2.56a16.88 16.88 0 0 0-8.57-2.26c-2.33 0-4.47.37-6.4 1.1a15.15 15.15 0 0 0-5.04 3.04 14 14 0 0 0-3.32 4.6 14.18 14.18 0 0 0-1.17 5.78c0 2.07.39 3.98 1.16 5.71.8 1.73 1.9 3.26 3.32 4.57a15.47 15.47 0 0 0 5.04 2.98c1.93.71 4.07 1.07 6.4 1.07a18 18 0 0 0 8.19-1.91 15.13 15.13 0 0 0 3.16-2.27l.55.77c-.97.9-2.08 1.69-3.33 2.34a19.9 19.9 0 0 1-4.05 1.5c-1.42.34-2.94.51-4.56.51z"
        />
      </svg>
    </a>
  </div>
  <div class="right-section">
    <a
      class="github-profile-link header-button"
      href="https://github.com/ckant"
      target="_blank"
      rel="noopener"
      aria-label="Go to GitHub profile"
    >
      <svg
        class="github-icon header-button-icon"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- [Octicons](primer.style/octicons) | [License: MIT](github.com/primer/octicons/blob/main/LICENSE) -->
        <path
          fill="currentColor"
          d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"
        />
      </svg>
    </a>
    <a
      class="linkedin-profile-link header-button"
      href="https://linkedin.com/in/chris-kant"
      target="_blank"
      rel="noopener"
      aria-label="Go to LinkedIn profile"
    >
      <!-- [Akar Icons](akaricons.com) | [License: MIT](github.com/artcoholic/akar-icons-app/blob/main/LICENSE) -->
      <svg
        class="linkedin-icon header-button-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke-width="2"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802A2.573 2.573 0 0 1 4.57 7.1a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z"
        />
      </svg>
    </a>
    <button class="theme-switcher-button header-button" onclick={cycleTheme} title="Switch theme">
      <svg
        class="theme-switcher-icon header-button-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <!-- [Phosphor Icons](phosphoricons.com) | [License: MIT](github.com/phosphor-icons/core/blob/main/LICENSE) -->
        <rect width="256" height="256" fill="none" />
        <path
          d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z"
          fill="#000000"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
        <path
          d="M136,192c20-3.37,36.61-20,40-40"
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        />
      </svg>
    </button>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: var(--thick-border);
    background-color: var(--secondary-bg-color);
    padding: 0 var(--spacing);
    width: 100%;
    height: 100%;
  }

  .logo-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .left-section {
    height: 100%;
  }

  .logo {
    height: var(--logo-size);
    color: var(--logo-color);
  }

  .right-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(0.75 * var(--spacing));
    height: 100%;
  }

  .header-button {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    box-shadow: var(--box-shadow);
    border: var(--normal-border);
    border-radius: var(--border-radius);
    background-color: var(--icon-bg-color);
    width: var(--button-size);
    height: var(--button-size);

    &:after {
      position: absolute;
      top: calc(0rem - var(--normal-border-width));
      left: calc(0rem - var(--normal-border-width));
      width: calc(100% + var(--normal-box-outline-size));
      height: calc(100% + var(--normal-box-outline-size));
      content: "";
    }

    @media (hover) {
      &:hover {
        translate: var(--box-shadow-translate);
        box-shadow: none;

        &:after {
          translate: var(--box-shadow-untranslate);
        }
      }
    }
  }

  .header-button-icon {
    width: var(--icon-size);
    height: var(--icon-size);
    color: var(--icon-color);
  }

  .theme-switcher-button {
    touch-action: manipulation;
  }
</style>
