<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M188 229.165C192.94 235.612 200.427 242.754 211.976 241.126C223.525 239.497 228.664 231.53 227.149 225.079"
      stroke="black"
      stroke-width="4"
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
export default class Mouth6 extends Mixins(BaseMixin) {}
</script>
