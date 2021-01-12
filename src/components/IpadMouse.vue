<template>
  <div
    id="ipad-mouse-cursor"
    ref="cursor"
    :class="{
      focus,
    }"
  >
    <div class="cursor-content"></div>
  </div>
</template>

<script>
export default {
  props: {
    rectSelector: {
      default: ".cj-cursor-rect",
    },

    textSelector: {
      default: ".cj-cusor-text",
    },
  },

  data() {
    return {
      focus: false,
    };
  },

  computed: {
    cursor() {
      return this.$refs.cursor;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.generateIpadMouse();
    });
  },
  methods: {
    generateIpadMouse() {
      this.initCursor();
      this.initRect();
      this.initText();
    },

    initCursor() {
      const { cursor } = this;

      document.addEventListener("mousedown", () => {
        if (!this.focus) cursor.style.setProperty("--scale", 0.9);
      });

      document.addEventListener("mouseup", () => {
        if (!this.focus) cursor.style.setProperty("--scale", 1);
      });

      document.addEventListener("mousemove", ({ x, y }) => {
        if (!this.focus) {
          cursor.style.setProperty("--left", `${x}px`);
          cursor.style.setProperty("--top", `${y}px`);
        }
      });
    },

    initRect() {
      const { cursor, rectSelector } = this;
      const style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(
        document.createTextNode(`
          ${rectSelector} {
            transform: translate(var(--translateX), var(--translateY)) scale(var(--scale));
            --scale: 1;
            --translateX: 0;
            --translateY: 0;
            display: inline-block;
          }
        `)
      );
      const head = document.querySelector("head");
      head.appendChild(style);
      document.querySelectorAll(rectSelector).forEach((el) => {
        // init el's transform style

        let rect = {};

        const DEFAULT_CURSOR_SIZE = cursor.style.getPropertyValue("--height");

        el.addEventListener(
          "mouseenter",
          ({ target }) => {
            this.focus = true;

            rect = target.getBoundingClientRect();
            const style = cursor.style || {};

            cursor.classList.add("focus");
            style.setProperty("--top", `${rect.top + rect.height / 2}px`);
            style.setProperty("--left", `${rect.left + rect.width / 2}px`);
            style.setProperty("--width", `${rect.width}px`);
            style.setProperty("--height", `${rect.height}px`);

            target.style.setProperty("--scale", 1.05);
          },
          { passive: true }
        );

        el.addEventListener(
          "mousemove",
          ({ target }) => {
            const halfHeight = rect.height / 2;
            const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
            const halfWidth = rect.width / 2;
            const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;

            cursor.style.setProperty("--translateX", `${leftOffset * 3}px`);
            cursor.style.setProperty("--translateY", `${topOffset * 3}px`);

            target.style.setProperty("--translateX", `${leftOffset * 6}px`);
            target.style.setProperty("--translateY", `${topOffset * 4}px`);
          },
          { passive: true }
        );

        el.addEventListener(
          "mouseleave",
          ({ target }) => {
            this.focus = false;

            cursor.style.setProperty("--width", DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty("--height", DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty("--translateX", 0);
            cursor.style.setProperty("--translateY", 0);

            target.style.setProperty("--translateX", 0);
            target.style.setProperty("--translateY", 0);
            target.style.setProperty("--scale", 1);

            setTimeout(() => {
              if (!this.focus) {
                cursor.classList.remove("focus");
              }
            }, 100);
          },
          { passive: true }
        );
      });
    },

    initText() {
      const { cursor, textSelector } = this;
      const DEFAULT_CURSOR_SIZE = cursor.style.getPropertyValue("--height");
      document.querySelectorAll(textSelector).forEach((el) => {
        el.addEventListener(
          "mouseover",
          () => {
            cursor.style.setProperty("--width", "0.2em");
            cursor.style.setProperty("--height", "1.5em");
          },
          { passive: true }
        );

        el.addEventListener(
          "mouseout",
          () => {
            cursor.style.setProperty("--width", DEFAULT_CURSOR_SIZE);
            cursor.style.setProperty("--height", DEFAULT_CURSOR_SIZE);
          },
          { passive: true }
        );
      });
    },
  },
};
</script>

<style lang="scss">
body,
* {
  cursor: none !important;
}

#ipad-mouse-cursor {
  --width: 20px;
  --height: 20px;
  --left: -20px;
  --top: -20px;
  --scale: 1;
  --translateX: 0;
  --translateY: 0;
  pointer-events: none;
  position: fixed;
  z-index: 9999;
  width: var(--width);
  height: var(--height);
  border-radius: "calc(var(--height) / 2)";
  left: var(--left);
  top: var(--top);
  transform: translate(-50%, -50%) scale(var(--scale));
  transition-property: width, height;

  &.focus {
    transition-property: width, height, left, top;
    .cursor-content {
      opacity: 0.06;
    }
  }

  &,
  & .cursor-content {
    transition-duration: 0.1s;
    transition-timing-function: ease-out;
  }

  & .cursor-content {
    position: absolute;
    background-color: #000;
    border-radius: 0.6em;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    right: 0;
    top: 0;
    transform: translate(var(--translateX), var(--translateY));
    transition-property: "opacity";
  }
}
</style>
