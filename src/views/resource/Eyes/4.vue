<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M157.287 173.072C157.401 173.885 158.434 174.066 159.009 173.48C161.474 170.964 165.264 169.116 169.663 168.593C172.258 168.285 174.754 168.475 176.979 169.065C177.733 169.266 178.474 168.629 178.21 167.895C176.545 163.249 171.845 160.196 166.736 160.803C160.794 161.509 156.55 166.897 157.256 172.839C157.266 172.917 157.276 172.995 157.287 173.072Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M221.385 163.073C221.498 163.886 222.531 164.067 223.106 163.482C225.549 160.996 229.298 159.17 233.649 158.653C236.213 158.348 238.681 158.535 240.88 159.117C241.634 159.316 242.375 158.679 242.111 157.946C240.456 153.352 235.804 150.335 230.748 150.935C224.862 151.635 220.658 156.973 221.357 162.859C221.366 162.93 221.375 163.002 221.385 163.073Z"
      fill="black"
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
export default class Eyes4 extends Mixins(BaseMixin) {}
</script>
