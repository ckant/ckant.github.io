<script lang="ts">
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import Main from "$lib/components/Main.svelte"

  let pic: "me" | "cat" = $state("me")

  function showCat(): void {
    pic = "cat"
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
</script>

<div class="page">
  <Header />
  <Main {pic} />
  <Footer onClickCat={showCat} />
</div>

<style>
  .page {
    display: grid;
    grid-template-rows: var(--header-height) var(--main-height) var(--footer-height);
    row-gap: var(--spacing);
    background-color: var(--primary-bg-color);
    min-height: 100vh;
  }
</style>
