<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M275.125 193.154C284.614 232.758 260.201 272.556 220.597 282.044C197.29 287.629 173.915 281.471 156.691 267.386C139.499 251.5 135.499 200 131.692 175.649C145.691 207.15 181.316 209.594 215.192 203.65C243.691 198.65 266.49 197.65 266.49 158.65C268.376 161.266 273.468 186.237 275.125 193.154Z"
      fill="#AC6651"
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
export default class FacialHair1 extends Mixins(BaseMixin) {}
</script>
