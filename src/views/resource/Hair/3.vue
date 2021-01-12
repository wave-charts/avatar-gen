<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M269.178 81.3965C260.856 121.294 162.5 126.896 142.678 126.896C90.6557 132.823 115.626 195.262 125.178 226.396C117.678 227.396 118.678 236.396 89.6782 164.896C66.4782 107.696 132.184 72.8337 181 60.9995C229.816 49.1653 248.5 32.502 248.5 32.502C269.178 41 274.117 57.7185 269.178 81.3965Z"
      :fill="fill"
    />
    <path
      d="M264.135 154.947L248.316 101.507L258.354 92.3644C269.11 129.452 269.602 150.988 264.135 154.947Z"
      :fill="fill"
    />
    <path
      d="M139 200C133.4 172.8 119.334 177.667 110 179L100 135L140.585 126.506C141.337 126.266 142.141 126.095 143 126L140.585 126.506C122.434 132.299 134.957 178.796 150 198L139 200Z"
      :fill="fill"
    />
    <path
      d="M83.9895 97.3632C92.8349 92.9091 103.281 95.4873 107.399 97.3331L95.6281 112.213C98.6633 107.357 89.1337 100.29 83.9895 97.3632Z"
      :fill="fill"
    />
    <path
      d="M69 115.5C80.6 108.7 91.8333 111 96 113L91.5 128.5C90.3 120.1 76 116.333 69 115.5Z"
      :fill="fill"
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
export default class Hair3 extends Mixins(BaseMixin) {}
</script>
