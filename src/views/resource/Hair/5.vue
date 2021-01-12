<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="206.853"
      cy="89.1794"
      rx="6.85759"
      ry="18.4393"
      transform="rotate(117 206.853 89.1794)"
      fill="#FCFDFF"
    />
  </svg>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Mixins } from "vue-property-decorator";
import BaseMixin from "@/views/base.mixin";

@Component({
  components: {},
})
export default class Hair5 extends Mixins(BaseMixin) {}
</script>
