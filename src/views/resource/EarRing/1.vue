<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M107 204C120.255 204 131 214.745 131 228C131 241.255 120.255 252 107 252C93.7452 252 83 241.255 83 228C83 221.609 86.5 216.5 89.5715 211.5L90.5 210"
      stroke="#F4D150"
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
export default class EarRing1 extends Mixins(BaseMixin) {}
</script>
