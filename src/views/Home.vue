<template>
  <div id="avatar-creator">
    <div
      :style="{
        width: `100%`,
        height: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
      }"
    >
      <div
        :style="{
          overflow: 'hidden',
          width: `${width}px`,
          height: exporting ? 0 : `${height}px`,
        }"
      >
        <div
          id="avatar-preview"
          :style="{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor,
            borderRadius,
          }"
        >
          <section
            v-for="(layer, index) in layers"
            :key="index"
            :style="{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${width}px`,
              height: `${height}px`,
              zIndex: layer.zIndex,
              opacity: layer.hide ? 0 : 1,
            }"
          >
            <component
              :is="layer.name"
              :fill="layer.fill"
              :width="width"
              :height="height"
              :style="{
                width: `${width}px`,
                height: `${height}px`,
              }"
            />
          </section>

          <ExportLoading
            :ammount="
              Object.prototype.toString.call(ammount) === '[object String]'
                ? parseInt(ammount)
                : ammount
            "
            :progress="progress"
            v-if="showMask"
            :style="{
              width: `${width}px`,
              height: `${height}px`,
            }"
          />
        </div>
      </div>
    </div>

    <div class="btns" style="margin-top: 40px;">
      <!-- 随机按钮 -->
      <button
        id="refresh-btn"
        :disabled="exporting ? 'disabled' : false"
        @click="() => createAvatar()"
        class="__cursor_rect"
      >
        <i class="ri-refresh-line"></i>
        <span>{{ $t("random-avatar") }}</span>
      </button>

      <!-- 下载按钮 -->
      <button
        class="__cursor_rect"
        id="download-btn"
        :disabled="exporting ? 'disabled' : false"
        @click="capture"
      >
        <i class="ri-file-download-line"></i>
        <span>
          {{ $t("download") }}
        </span>
      </button>
    </div>

    <div class="btns" style="margin-top: 10px;">
      <input
        v-model="ammount"
        type="number"
        class="sum-input __cursor_text"
        :placeholder="$t('input-amount-placeholder')"
        style="flex-grow: 1; margin-right: 10px;"
      />
      <button
        class="__cursor_rect"
        id="multiple-export-btn"
        style="min-width: 120px"
        :disabled="exporting || !ammount ? 'disabled' : false"
        @click="superMake"
      >
        <i class="ri-file-zip-fill"></i>
        <span>
          {{ $t("pack") }}
        </span>
      </button>
    </div>

    <div class="resource-info">
      <span class="__cursor_text">
        {{ $t("resource-from") }}
      </span>
      <a
        class="__cursor_rect"
        href="https://www.figma.com/community/file/829741575478342595/Avatar-Illustration-System"
        target="_blank"
      >
        {{ $t("figma-community") }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { EsModuleComponent } from "vue/types/options";
import html2canvas from "html2canvas";

import { avatarZIndex, avatarConfig, colorLib } from "./avatar.config";
import { Layer, LayerType, LayerConfig } from "@/views/avatar.type";
import JSZip from "jszip";
import confetti from "canvas-confetti";

// 批量处理
const requireContext = require.context(
  ".",
  true,
  /^\.\/resource\/\w+\/\w+\.vue$/,
  "lazy"
);
const promisedComponents = requireContext
  .keys()
  .reduce((res: Record<string, () => Promise<EsModuleComponent>>, filePath) => {
    const dirName = filePath.replace(/^\.\/resource\/(\w+)\/\w+\.vue$/, "$1");
    const number = filePath.replace(/^\.\/resource\/\w+\/(\w+)\.vue$/, "$1");
    const componentName = `${dirName}${number}`;
    return {
      ...res,
      ...{
        [componentName]: () => import(`${filePath}`),
      },
    };
  }, {});

@Component({
  components: {
    ExportLoading: () => import("@/components/ExportLoading.vue"),
    ...promisedComponents,
  },
  mixins: [],
})
export default class AvatarCreator extends Vue {
  private width = 280;
  private height = 280;
  private exporting = false;
  private ammount = 100;
  private showMask = false;
  private progress = 0;

  private layers: Layer[] = [];
  private backgroundColor = "#fff";
  private borderRadius = "50%";

  mounted() {
    this.createAvatar();
  }

  /**
   * 生成头像
   */
  private createAvatar(disableConfetti = false) {
    const layerTypes: LayerType[] = [
      "Base",
      "Ear",
      "EarRing",
      "Eyebrows",
      "Eyes",
      "FacialHair",
      "Glasses",
      "Hair",
      "Mouth",
      "Nose",
      "Shirt",
      "Mask",
    ];
    this.layers.splice(0);
    for (let i = 0; i < layerTypes.length; i++) {
      const layerType = layerTypes[i];
      // 1. 先决定 id
      const id = this.randomSelectWithWeight(1, avatarConfig[layerType]);
      const layer: Layer = {
        name: `${layerType}${id}`,
        layerType,
      };

      // 2. 设置颜色
      const layerConfig: LayerConfig = avatarConfig[layerType].find(
        (lc: LayerConfig) => lc.id === id
      ) as LayerConfig;

      if (layerConfig) {
        layer.config = layerConfig;

        // 如果指定了可用的颜色
        if (layerConfig.colorLib) {
          layer.fill = this.randomSelectWithWeight(
            "1",
            layerConfig.colorLib,
            "value"
          );

          // 如果指定了需要跟随的颜色
        }
      }

      // 3. 设置 zIndex
      layer.zIndex = avatarZIndex[layerType];
      this.layers.push(layer);
    }

    // 加工 layer
    this.layers.forEach((layer: Layer) => {
      // 处理颜色跟随
      if (layer.config && layer.config.colorRefer) {
        const referLayerType = layer.config.colorRefer;
        const referLayer: Layer =
          this.layers.find((l: Layer) => l.layerType === referLayerType) ||
          this.layers[0];
        this.$set(layer, "fill", referLayer.fill);
      }

      // 处理隐藏
      if (layer.config && layer.config.hide) {
        layer.config.hide.forEach((type: LayerType) => {
          const targetLayer = this.layers.find(
            (l: Layer) => l.layerType === type
          );
          if (targetLayer) this.$set(targetLayer, "hide", true);
        });
      }
    });

    // 设置背景颜色
    let loop = true;
    while (loop) {
      this.backgroundColor = this.randomSelectWithWeight(
        "1",
        colorLib.background,
        "value"
      ) as string;
      const noConflict = this.layers
        .filter(
          (layer: Layer) =>
            ["Base", "Hair", "Shirt"].indexOf(layer.layerType) > -1
        )
        .every((layer: Layer) => layer.fill !== this.backgroundColor);
      if (noConflict) loop = false;
    }

    const congratulate = this.layers.some(({ config }) => config.congratulate);

    if (!disableConfetti && congratulate) this.applyConfettiAnimation();
  }

  /**
   * 截取
   */
  async capture() {
    this.exporting = true;
    this.borderRadius = "0";
    this.$nextTick(async () => {
      const dom: HTMLElement = document.querySelector(
        "#avatar-preview"
      ) as HTMLElement;
      const canvas = await html2canvas(dom, {
        logging: false,
        scale: window.devicePixelRatio,
        width: this.width,
        height: this.height,
      });
      const a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = "avatar.png";
      a.click();
      this.exporting = false;
      this.borderRadius = "50%";
    });
  }

  async superMake() {
    this.$emit("multiple-start");
    setTimeout(() => {
      this.exporting = true;
      this.showMask = true;
      let { ammount } = this;
      const max = 10000;
      ammount = ammount > max ? max : ammount < 0 ? 1 : ammount;
      this.ammount = ammount;
      this.progress = 0;

      const zip = new JSZip();
      this.borderRadius = "0";

      this.$nextTick(async () => {
        for (let i = 0; i < ammount; i++) {
          this.createAvatar(true);
          const dom: HTMLElement = document.querySelector(
            "#avatar-preview"
          ) as HTMLElement;

          const canvas = await html2canvas(dom, {
            logging: false,
            scale: window.devicePixelRatio * 2,
            width: this.width,
            height: this.height,
            ignoreElements: this.exportIgnoreMiddleware as any,
          });

          const dataUrl = canvas
            .toDataURL()
            .replace("data:image/png;base64,", "");
          zip.file(`${i + 1}.png`, dataUrl, { base64: true });
          this.progress = i + 1;
        }
        const base64 = await zip.generateAsync({ type: "base64" });
        const a = document.createElement("a");
        a.href = "data:application/zip;base64," + base64;
        a.download = "avatar.zip";
        a.click();
        this.exporting = false;
        this.$emit("multiple-end");
        this.borderRadius = "50%";
        this.showMask = false;
      });
    }, 0);
  }

  /**
   * 从一个数组中随机获取
   */
  randomSelectWithWeight<T>(
    type: T,
    arr: Record<string, any>[],
    valueKey = "id",
    weightKey = "weight"
  ): T {
    const store: Array<T> = [];
    arr.forEach((el) => {
      const value = el[valueKey];
      if (Object.prototype.toString.call(el[weightKey]) !== "[object Number]") {
        throw Error("weight is not a Number");
      } else {
        const weight: number = el[weightKey] || 1;
        for (let i = 0; i < weight; i++) store.push(value);
      }
    });
    const randIndex =
      parseInt((Math.random() * store.length * 10000).toFixed(0)) %
      store.length;
    return store[randIndex];
  }

  exportIgnoreMiddleware(el: HTMLElement) {
    if (el && el.getAttribute("class")) {
      const ignores = ["export-loading"];
      if (
        el &&
        ignores.some(
          (className) =>
            [el.getAttribute("class") || ""].indexOf(className) > -1
        )
      )
        return true;
    }
    return false;
  }

  /**
   * 绘制动画
   */
  private applyConfettiAnimation() {
    const btn = document.querySelector("#refresh-btn");
    const rect = btn.getBoundingClientRect();
    const { clientWidth, clientHeight } = document.body;
    const centerOfBtnX = rect.left + rect.width / 2;
    const centerOfBtnY = rect.top + rect.height / 2;
    const centerOfBtnXPercent = centerOfBtnX / clientWidth;
    const centerOfBtnYPercent = centerOfBtnY / clientHeight;

    const _confetti = function(opt = {}) {
      confetti({
        particleCount: Math.floor(100 + Math.random() * 100),
        angle: 80,
        spread: 155, // 最大角度
        startVelocity: 50, // 最大距离
        decay: 0.9, // 减速： [0, 1]
        gravity: 3,
        ticks: 200, // 移动次数
        origin: {
          x: centerOfBtnXPercent,
          y: centerOfBtnYPercent,
        },
        colors: [
          "#F4D03F",
          "#E20650",
          "#1F618D",
          "#3498DB",
          "#E74C3C",
          "#48C9B0",
          "#34495E",
          "#31FBE0",
        ],
        shapes: ["square"],
        scalar: 1,
        zIndex: clientWidth > 400 ? 0 : 100,

        ...opt,
      });
    };
    _confetti({
      scalar: 1.4,
    });
    _confetti({
      particleCount: 50,
      // angle: 80,
      spread: 65, // 最大角度
      startVelocity: 60, // 最大距离
      gravity: 2,
    });
    _confetti({
      particleCount: 20,
      angle: 80,
      spread: 45,
      startVelocity: 40,
      colors: [
        "#7b5cff",
        "#6245e0",
        "#b3c7ff",
        "#8fa5e5",
        "#5c86ff",
        "#345dd1",
      ],
      scalar: 1.2,
    });
  }
}
</script>

<style lang="scss" scoped>
$primary: #0067b6;
#avatar-creator {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  /* background-color: #fff; */
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  padding: 50px 30px 20px 30px;
  box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.1),
    5px 5px 10px rgba(0, 0, 0, 0.02);
  z-index: 9;
  backdrop-filter: saturate(180%) blur(12px);

  .btns {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  button {
    border: none;
    height: 40px;
    border-radius: 7px;
    cursor: pointer;
    &:focus,
    &:active {
      outline: none;
    }

    &:active {
      box-shadow: 0px 0px 2px rgba($primary, 0.5);
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    i {
      margin-right: 10px;
    }

    transition: all 0.3s ease;

    &#refresh-btn {
      background-color: $primary;
      color: #fff;
      width: calc(50% - 5px);

      &:hover {
        background-color: #06538d;
      }
    }
    &#download-btn {
      background-color: transparent;
      border: 1px solid $primary;
      color: $primary;
      width: calc(50% - 5px);

      &:hover {
        background-color: $primary;
        color: #fff;
      }
    }
  }
  input {
    background-color: #efefef;
    border-radius: 7px;
    border: none;
    padding: 0 10px;
    &:focus,
    &:active {
      outline: none;
    }
  }

  button#multiple-export-btn {
    width: calc(40% - 10px);
    color: $primary;
    background-color: rgba($primary, 0.1);
    &:hover {
      background-color: rgba($primary, 0.15);
    }
  }
  input.sum-input {
    width: 50%;
  }

  button:disabled {
    background-color: #efefef !important;
    color: grey !important;
    cursor: not-allowed;
    border: none !important;
  }
}

#avatar-preview {
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.resource-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  height: 50px;
  color: #aaa;
  a {
    color: #aaa;
    /* color: $primary; */
    text-decoration: none;
    margin-left: 2px;
    font-weight: bold;
    padding: 5px 10px;
    transition: all 0.15s ease;

    &:hover {
      color: $primary;
    }
  }
}

@media screen and(max-width: 400px) {
  #avatar-creator {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

@media (prefers-color-scheme: dark) {
  #avatar-creator {
    /* background-color: #393939; */
    background-color: rgba(80, 80, 80, 0.2);

    input {
      background-color: #555;
      color: #eee;
    }

    button#multiple-export-btn {
      color: #fff;
      background-color: rgba($primary, 1);
      &:hover {
        background-color: rgba($primary, 0.8);
        color: #ccc;
      }
    }

    button:disabled {
      background-color: #686868 !important;
      color: grey !important;
    }
  }
}
</style>
