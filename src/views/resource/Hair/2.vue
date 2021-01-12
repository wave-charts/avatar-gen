<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M199 87C213.667 86.3333 239.4 78.2 225 51"
      :stroke="fill || 'black'"
      stroke-width="4"
    />
    <path
      d="M173 85C187.667 84.3333 213.4 76.2 199 49"
      :stroke="fill || 'black'"
      stroke-width="4"
    />
    <path
      d="M137 96C151.667 95.3333 177.4 87.2 163 60"
      :stroke="fill || 'black'"
      stroke-width="4"
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
export default class Hair2 extends Mixins(BaseMixin) {}
</script>
