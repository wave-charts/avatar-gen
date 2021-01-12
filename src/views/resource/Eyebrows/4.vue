<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M219 134.214C224.667 131.548 238 129.114 246 140.714"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    />
    <path
      d="M143.579 159.521C145.65 153.61 153.261 142.396 167.142 144.822"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
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
export default class EyeBrows4 extends Mixins(BaseMixin) {}
</script>
