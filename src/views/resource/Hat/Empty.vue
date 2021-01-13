<template>
  <div></div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Mixins } from "vue-property-decorator";
import BaseMixin from "@/views/base.mixin";

@Component({
  components: {},
})
export default class HatEmpty extends Mixins(BaseMixin) {}
</script>
