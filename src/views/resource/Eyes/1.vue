<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="168.53"
      cy="168.403"
      rx="9"
      ry="13.5"
      transform="rotate(-6.77646 168.53 168.403)"
      fill="black"
    />
    <ellipse
      cx="232.53"
      cy="158.403"
      rx="9"
      ry="13.5"
      transform="rotate(-6.27568 232.53 158.403)"
      fill="black"
    />
  </svg>
</template>

<script lang="ts">

import Component from "vue-class-component";
import {  Mixins } from "vue-property-decorator";
import BaseMixin from "@/views/base.mixin";

@Component({
  components: {},
})
export default class Eyes1 extends Mixins(BaseMixin) {}
</script>
