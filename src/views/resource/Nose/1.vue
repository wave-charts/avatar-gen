<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M205.687 185.055C205.89 188.898 207.385 197.137 211.735 199.353C217.174 202.123 212.91 211.306 202.729 210.717"
      stroke="#171921"
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
export default class Nose1 extends Mixins(BaseMixin) {}
</script>
