<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="237.961" cy="166" r="26" stroke="black" stroke-width="4" />
    <circle cx="170.961" cy="175" r="26" stroke="black" stroke-width="4" />
    <path
      d="M212.961 173C212.961 170.878 212.118 168.843 210.618 167.343C209.118 165.843 207.083 165 204.961 165C202.839 165 200.804 165.843 199.304 167.343C197.804 168.843 196.961 170.878 196.961 173"
      stroke="black"
      stroke-width="4"
    />
    <path d="M145.461 177L115.461 182.5" stroke="black" stroke-width="4" />
  </svg>
</template>

<script lang="ts">

import Component from "vue-class-component";
import {  Mixins } from "vue-property-decorator";
import BaseMixin from "@/views/base.mixin";

@Component({
  components: {},
})
export default class Glasses2 extends Mixins(BaseMixin) {}
</script>
