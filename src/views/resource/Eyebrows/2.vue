<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M147 150.5C153.167 153 168.1 153.5 178.5 135.5"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    />
    <path
      d="M214 128C219.167 133.333 232.1 140.8 242.5 128"
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
export default class EyeBrows2 extends Mixins(BaseMixin) {}
</script>
