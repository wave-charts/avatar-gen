<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M206 221.696C210.167 219.363 227 216.396 227 223.196C227 231.696 215.5 231.196 215.5 231.196C215.5 231.196 228.545 228.035 226 237.196C223.5 246.196 216.5 242.696 214.5 241.696"
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
export default class Mouth4 extends Mixins(BaseMixin) {}
</script>
