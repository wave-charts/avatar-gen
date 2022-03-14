<template>
  <a
    style="width: 200px; height: 50px; display: flex; justify-content: center; align-items: center; transition: all 0.15s ease;padding: 2px 6px;"
    class="__cursor_rect"
    href="https://www.waveapp.cn"
    target="_blank"
  >
    <img src="@/assets/w.png" style="height: 58px" />
    <img class="sponsor" src="@/assets/sponsor.svg" style="height: 42px" />
  </a>
</template>

<style lang="scss">
@media screen and(max-width: 450px) {
  img.sponsor {
    display: none;
  }
}
</style>
