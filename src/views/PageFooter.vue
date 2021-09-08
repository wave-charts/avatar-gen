<template>
  <footer id="page-footer">
    <a href="http://beian.miit.gov.cn/" target="_blank" class="__cursor_text">
      {{ beianCode }} &nbsp; &copy;2020 高下制图
    </a>
  </footer>
</template>

<script>
export default {
  computed: {
    beianCode() {
      return process.env.VUE_APP_BEIAN_CODE;
    },
  },
};
</script>

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
