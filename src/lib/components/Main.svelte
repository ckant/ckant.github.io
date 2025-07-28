<script lang="ts">
  import type { MainProps } from "$lib/component-types/MainProps"
  import Pic from "$lib/components/Pic.svelte"

  import Projects from "./Projects.svelte"

  let { pic }: MainProps = $props()
</script>

<main>
  <section class="pic-section">
    <h1 class="pic-title section-title">Chris Kant</h1>
    <Pic {pic} />
  </section>
  <section class="projects-section">
    <h1 class="projects-title section-title">Projects</h1>
    <Projects />
  </section>
</main>

<style>
  main {
    --main-gap-size: var(--spacing);
    --project-min-width: 18.75rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--main-gap-size);
    container: main / inline-size;
    margin-right: auto;
    margin-left: auto;
    background-color: var(--primary-bg-color);
    padding-right: var(--spacing);
    padding-left: var(--spacing);
    width: 100%;
    max-width: var(--main-max-width);
  }

  .pic-section {
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    gap: var(--spacing);
    width: fit-content;
  }

  .projects-section {
    display: flex;

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    flex-direction: column;
    gap: var(--spacing);
    min-width: var(--project-min-width);
  }

  .section-title {
    border-bottom: var(--medium-border);
    background-color: var(--text-bg-color);
    width: fit-content;
    color: #000000;
    font-variant: small-caps;
    font-weight: 200;
    font-size: 2.5rem;
    line-height: var(--heading-line-height);
    font-family: var(--secondary-font-family), system-ui;
  }
</style>
