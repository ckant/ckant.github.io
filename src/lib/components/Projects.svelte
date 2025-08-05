<script lang="ts">
  import projects from "$lib/assets/projects.json"
</script>

<div class="projects">
  {#each projects as project, index (index)}
    <a
      class="project"
      href={project.link}
      target="_blank"
      rel="noopener"
      aria-label="Go to project"
    >
      <div class="project-header">
        <svg class="project-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m16.1 7.22c-3.41 0.00936-6.83 0.0187-10.2 0.0281-2.25-0.0767-3.31 2.16-3.13 4.08v14.8c-0.0813 2.25 2.15 3.31 4.08 3.13h15.3c1.84 0.0586 3.33-1.72 3.13-3.5v-9.65c-1.62 0.573-3.52-0.357-4.1-1.96-0.48-0.872-0.724-2.02-1.76-2.42-1.27-0.6-2.84-1.17-3.25-2.69-0.185-0.6-0.195-1.25-0.0305-1.86z"
            fill="#ffffff"
          />
          <path
            d="m16.1 7.22c-3.53 0.0154-7.07 0.00789-10.6 0.0378-1.74 0.142-2.95 1.97-2.77 3.63v3.15h18.3c-0.432-0.826-0.711-1.88-1.66-2.26-1.11-0.559-2.46-0.967-3.05-2.17-0.384-0.725-0.465-1.6-0.25-2.39z"
            fill="#000000"
          />
          <path
            d="m3.22 14.1h16.8"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            transform="matrix(.606 0 0 .606 .727 .879)"
            d="m23.7 10.5h-16a5 5 135 0 0-5 5l-2.04e-4 26.4a5 5 45 0 0 5 5h27.7a5 5 135 0 0 5-5l-9.01e-4 -15.1"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-width="3.2"
          />
          <path
            transform="matrix(.626 0 0 .625 .34 .362)"
            d="m38.1 3.73c-0.731 0.102-0.824 0.953-1.15 1.48-0.605 1.18-1.08 2.43-1.8 3.54-0.838 1.08-2.21 1.43-3.37 2.06-0.677 0.344-1.39 0.631-2.04 1.02-0.736 0.649 0.17 1.29 0.789 1.49 1.27 0.642 2.6 1.19 3.83 1.9 1.16 0.804 1.52 2.23 2.16 3.41 0.352 0.694 0.647 1.42 1.04 2.09 0.649 0.736 1.29-0.17 1.49-0.789 0.642-1.27 1.19-2.6 1.9-3.83 0.804-1.16 2.23-1.52 3.41-2.16 0.694-0.352 1.42-0.647 2.09-1.04 0.736-0.649-0.17-1.29-0.789-1.49-1.27-0.642-2.6-1.19-3.83-1.9-1.16-0.804-1.52-2.23-2.16-3.41-0.352-0.694-0.647-1.42-1.04-2.09-0.13-0.162-0.328-0.279-0.54-0.277z"
            fill="#ffffff"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-width="2.5"
          />
          <path
            d="m6.34 10.6c1.21-1e-6 2.42-3e-6 3.62-4e-6"
            stroke="#ffffff"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            d="m9.97 25.3c-1.21-1.21-2.42-2.42-3.62-3.62"
            stroke="#000000"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            d="m6.34 21.7c1.21-1.21 2.42-2.42 3.62-3.62"
            stroke="#000000"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            d="m17.6 25.3c1.21-1.21 2.42-2.42 3.62-3.62"
            stroke="#000000"
            stroke-linecap="round"
            stroke-width="2"
          />
          <path
            d="m17.6 18.1c1.21 1.21 2.42 2.42 3.62 3.62"
            stroke="#000000"
            stroke-linecap="round"
            stroke-width="2"
          />
        </svg>
        <p class="project-name">{project.name}</p>
      </div>
      <p class="project-description">{project.description}</p>
      <p class="project-language">{project.language}</p>
    </a>
  {/each}
</div>

<style>
  .projects {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: var(--spacing);
    container: projects / inline-size;
  }

  .project {
    --one-column-project-width: 100%;
    --two-column-project-width: calc((100% - var(--spacing)) / 2);

    width: var(--one-column-project-width);
    min-width: var(--project-min-width);

    /**
     * Switch to 2 column layout if 2 projects can fit.
     *
     * Note:
     * This is `var(--project-min-width) * 2 + var(--spacing)`.
     * Container size queries currently don't support calculated vars.
     **/
    @container projects (width >= 38.5rem) {
      width: var(--two-column-project-width);
    }
  }

  .project {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;
    box-shadow: var(--box-shadow);
    border: var(--normal-border);
    border-radius: var(--border-radius);
    background-color: var(--text-bg-color);
    padding: var(--spacing);
    color: unset;
    text-decoration: none;

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

        .project-name {
          text-decoration: underline;
        }
      }
    }
  }

  .project-header {
    display: flex;
    align-items: center;
    gap: 0.35rem;
  }

  .project-icon {
    width: var(--icon-size);
    height: var(--icon-size);
    color: var(--secondary-bg-color);
  }

  .project-name {
    font-weight: 500;
  }

  .project-description {
    font-size: 0.875rem;
  }

  .project-language {
    margin-top: auto;
    font-weight: 300;
    font-size: 0.75rem;
  }
</style>
