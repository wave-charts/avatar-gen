<template>
  <header id="page-header">
    <div class="display">
      <Logo />
      <section class="pager-header-right-part">
        <div id="language-selector">
          <button class="__cursor_rect">
            <span>{{ $t("select-language") }}</span>
            <i class="ri-arrow-drop-down-fill"></i>
          </button>

          <ul id="language-selector-list">
            <li
              v-for="lang in langs"
              :key="lang.value"
              :class="{
                active: $i18n.locale === lang.value,
              }"
              class="__cursor_rect"
              @click="
                () => {
                  if ($i18n.locale !== lang.value) {
                    $i18n.locale = lang.value;
                  }
                }
              "
            >
              {{ lang.label }}
            </li>
          </ul>
        </div>
        <a
          id="github-link"
          href="https://github.com/wave-charts/avatar-gen/"
          target="_blank"
          class="__cursor_rect"
        >
          <i class="ri-github-fill"></i>
          <span>Star</span>
        </a>
      </section>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      langs: [
        { label: "简体中文", value: "zh" },
        { label: "English", value: "en" },
      ],
    };
  },
};
</script>

<style lang="scss">
#page-header {
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(14px);
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  --highlight-color: #0067b6;

  .display {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;

    .pager-header-right-part {
      display: flex;
      height: 100%;
      align-items: center;
      color: #444;

      /* 语言选择 */
      #language-selector {
        font-size: 0.9rem;
        margin-right: 10px;
        position: relative;
        perspective: 1000px;

        button {
          display: flex;
          align-items: center;
          padding: 10px 10px 10px 20px;
          transition: all 0.15s ease 1s;

          background-color: transparent;
          border: none;
          color: inherit;

          &:focus {
            outline: none;
          }
        }

        i {
          font-size: 1.5rem;
        }

        ul {
          position: absolute;
          top: 130%;
          background-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: saturate(180%) blur(14px);
          color: #222;
          visibility: hidden;
          opacity: 0;
          transition: all 0.3s ease 0.5s;

          padding: 10px 10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 10px;
          margin: 0;
          list-style: none;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

          &::after {
            position: absolute;
            content: "";
            border: 8px solid transparent;
            border-bottom: 8px solid rgba(255, 255, 255, 0.5);
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
          }

          li {
            white-space: nowrap;
            padding: 5px 30px;
            font-size: 0.8rem;
            &.active {
              color: var(--highlight-color);
              font-weight: bold;
              position: relative;
              &::before {
                content: "";
                position: absolute;
                right: 100%;
                top: 50%;
                transform: translateY(calc(-50% + 1px)) translateX(20px);
                border: 4px solid transparent;
                border-left: 4px solid var(--highlight-color);
              }
            }
          }
        }

        &:hover {
          ul {
            visibility: visible;
            opacity: 1;
            transition: all 0.15s ease;
          }
        }
      }

      /* star */
      a {
        i {
          font-size: 1.4rem;
          margin-right: 5px;
        }
        text-decoration: none;
        transition: all 0.15s ease;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 10px;
        &:hover {
          /* background-color: #f6f6f6; */
        }
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  #page-header {
    --highlight-color: #1583d6;
    background-color: rgba(0, 0, 0, 0.1);
    .display {
      .pager-header-right-part {
        color: #eee;

        #language-selector ul {
          background-color: rgba(0, 0, 0, 0.1);
          color: inherit;

          &::after {
            border-bottom: 8px solid rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
}
</style>
