<template>
  <div class="export-loading">
    <div class="progress">
      <div
        class="bar"
        :style="{
          width: percent,
        }"
      ></div>
    </div>

    <div class="description">
      <div class="div">正在导出: {{ percent }}</div>
      <div class="num">{{ progress }} / {{ ammount }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({
  components: {},
  mixins: [],
})
export default class ExportLoading extends Vue {
  @Prop({ type: Number, default: 100 }) readonly ammount!: number;
  @Prop({ type: Number, default: 0 }) readonly progress!: number;

  get percent() {
    return `${((this.progress / this.ammount) * 100).toFixed(2)}%`;
  }
}
</script>

<style lang="scss" scoped>
.export-loading {
  /* background-color: rgba(255, 255, 255, 1); */
  position: fixed;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .progress {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #efefef;
    overflow: hidden;
    .bar {
      height: 100%;
      background-color: #0067b6;
      transition: all 0.3s ease;
    }
  }

  .description {
    width: 100%;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    font-size: 0.7rem;
  }
}

@media (prefers-color-scheme: dark) {
  .export-loading {
    /* background-color: #393939; */
    .progress {
      background-color: #787878;
    }
  }
}
</style>
