<template>
  <header id="page-header">
    <div class="display">
      <Logo />
      <a
        id="github-link"
        href="https://github.com/wave-charts/avatar-gen/"
        target="_blank"
        class="__cursor_rect"
      >
        <i class="ri-github-fill"></i>
        <span>Star</span>
      </a>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss">
#page-header {
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(14px);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;

  .display {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;

    a {
      i {
        font-size: 1.4rem;
        margin-right: 5px;
      }
      color: #444;
      text-decoration: none;
      transition: all 0.15s ease;
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 10px;
      &:hover {
        /* background-color: #f6f6f6; */
      }
    }
  }
}
</style>
