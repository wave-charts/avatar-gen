<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M323.694 383H50.3745C66.6742 353.658 89.8579 334.982 127.445 326.412C143.458 322.761 162.113 320.939 184 320.939C193.456 320.939 200.814 322.382 207.796 324.285C210.383 324.99 212.983 325.78 215.643 326.589C220.045 327.927 224.611 329.314 229.552 330.449L229.692 330.481L229.836 330.493C275.961 334.297 303.62 354.785 323.694 383Z"
      :fill="fill"
      stroke="black"
      stroke-width="4"
    />
    <path
      d="M115.93 328.581L125.083 308.984C125.301 308.516 125.845 308.293 126.332 308.465C164.258 321.89 198.761 320.945 230.735 312.044C231.138 311.932 231.568 312.081 231.814 312.418L245.746 331.47C246.129 331.994 245.934 332.732 245.33 332.97C211.723 346.166 148.662 343.923 116.414 329.904C115.903 329.681 115.693 329.086 115.93 328.581Z"
      fill="#D2EFF3"
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
export default class Shirt2 extends Mixins(BaseMixin) {}
</script>
