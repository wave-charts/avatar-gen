<template>
  <footer id="page-footer">
    <a
      draggable="false"
      href="#"
      class="__cursor_text"
      style="padding: 0 10px"
    >
      &nbsp; &copy;2022 WAVE
    </a>
  </footer>
</template>

<style lang="scss">
#page-footer {
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;

  a {
    font-size: 0.7rem;
    font-weight: normal;
    color: #aaa;
    text-decoration: none;
  }
}
</style>
