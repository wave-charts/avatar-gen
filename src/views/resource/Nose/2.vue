<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M204.13 177.094C206.078 190.958 214.541 200.877 214.541 200.877C214.541 200.877 211.91 207.306 201.729 206.717"
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
export default class Nose2 extends Mixins(BaseMixin) {}
</script>
