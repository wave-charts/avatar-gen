<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M179 248C182.211 240.043 194.107 223.233 216.007 219.652C237.907 216.071 249.127 228.107 252 234.572"
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
export default class Mouth1 extends Mixins(BaseMixin) {}
</script>
