<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="115.5" cy="213" r="4" fill="#F4D150" />
    <circle cx="116.5" cy="212" r="1" fill="#FFEDEF" />
  </svg>
</template>

<script lang="ts">

import Component from "vue-class-component";
import {  Mixins } from "vue-property-decorator";
import BaseMixin from "@/views/base.mixin";

@Component({
  components: {},
})
export default class EarRing2 extends Mixins(BaseMixin) {}
</script>
