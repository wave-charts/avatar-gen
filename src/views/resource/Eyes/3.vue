<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="168.117"
      cy="167.928"
      rx="9"
      ry="10"
      transform="rotate(-6.77646 168.117 167.928)"
      fill="black"
    />
    <ellipse
      cx="232.148"
      cy="157.924"
      rx="9"
      ry="10"
      transform="rotate(-6.27568 232.148 157.924)"
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
export default class Eyes3 extends Mixins(BaseMixin) {}
</script>
