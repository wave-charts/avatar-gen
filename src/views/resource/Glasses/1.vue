<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M142.961 177.5L108.461 184.125"
      stroke="black"
      stroke-width="4"
      stroke-linecap="round"
    />
    <path
      d="M138.949 160.94C138.079 157.481 140.401 154.032 143.933 153.535L182.649 148.094C185.931 147.633 188.965 149.919 189.426 153.201L194.993 192.811C195.454 196.093 193.168 199.127 189.886 199.588L155.414 204.433C152.377 204.86 149.507 202.928 148.76 199.955L138.949 160.94Z"
      stroke="black"
      stroke-width="4"
    />
    <path
      d="M261.212 143.964C261.095 140.399 257.912 137.723 254.38 138.22L215.663 143.661C212.382 144.122 210.096 147.156 210.557 150.437L216.124 190.048C216.585 193.33 219.619 195.616 222.9 195.155L257.373 190.31C260.409 189.883 262.636 187.236 262.535 184.171L261.212 143.964Z"
      stroke="black"
      stroke-width="4"
    />
    <path
      d="M191.961 172.125L213.961 168.625"
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
export default class Glasses1 extends Mixins(BaseMixin) {}
</script>
