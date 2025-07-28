<script lang="ts">
  import type { PicProps } from "$lib/component-types/PicProps"

  let { pic }: PicProps = $props()

  const meSrc = "./images/me.webp"
  const catSrc = "./images/cat.webp"
</script>

<img
  class="pic"
  src={pic === "me" ? meSrc : catSrc}
  alt={`Picture of ${pic === "me" ? "me" : "cat"}`}
  fetchpriority="high"
/>

<style>
  .pic {
    --pic-min-width: 18.75rem;
    --fixed-size-pic-width: var(--pic-min-width);
    --full-size-pic-width: 100%;

    aspect-ratio: 1;
    width: var(--full-size-pic-width);
    min-width: var(--pic-min-width);
    max-width: 25rem;

    /**
     * Switch to full size pic in single column layout.
     *
     * Note:
     * This is `var(--pic-min-width) + var(--main-gap-size) + var(--project-min-width)`.
     * Container size queries currently don't support calculated vars.
     **/
    @container main (width >= 38.5rem) {
      width: var(--fixed-size-pic-width);
    }
  }

  .pic {
    box-shadow: var(--box-shadow);
    border: var(--normal-border);
    border-radius: var(--border-radius);
  }
</style>
