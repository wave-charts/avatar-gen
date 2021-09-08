<template>
  <div
    id="darkmode-controller"
    class="__cursor_rect"
    @click="toggleDarkMode"
    :class="{
      __off: darkmode === false,
      __on: darkmode === true,
      __auto: darkmode === null,
    }"
    :style="{
      color: stats.color,
    }"
  >
    <span class="stat-icon">
      <i :class="stats.icon"></i>
    </span>
    <span>
      {{ stats.label }}
    </span>
  </div>
</template>

<script>
const darkmodeStorageKey = "_darkmode";

export default {
  data() {
    return {
      darkmode: null,
    };
  },
  created() {
    const storedValue = parseInt(
      window.localStorage.getItem(darkmodeStorageKey)
    );
    this.darkmode = isNaN(storedValue) ? null : !!storedValue;
  },

  methods: {
    toggleDarkMode() {
      const { darkmode } = this;
      if (darkmode === false) {
        this.darkmode = true;
        window.localStorage.setItem(darkmodeStorageKey, 1);
      } else if (darkmode === true) {
        this.darkmode = null;
        window.localStorage.removeItem(darkmodeStorageKey);
      } else if (darkmode === null) {
        this.darkmode = false;
        window.localStorage.setItem(darkmodeStorageKey, 0);
      }
    },
  },

  watch: {
    darkmode: {
      handler(_mode) {
        const bodyDarkmodeClassName = "darkmode";
        const bodyDarkmodeOffClassName = "darkmode-off";
        if (_mode === null) {
          document.body.classList.remove(bodyDarkmodeClassName);
        } else if (_mode === true) {
          document.body.classList.add(bodyDarkmodeClassName);
          document.body.classList.remove(bodyDarkmodeOffClassName);
        } else if (_mode === false) {
          document.body.classList.add(bodyDarkmodeOffClassName);
          document.body.classList.remove(bodyDarkmodeClassName);
        }
      },
    },
  },

  computed: {
    stats() {
      const { darkmode } = this;
      if (darkmode === true) {
        return { icon: "ri-contrast-2-line", label: "Dark", color: "#0067b6" };
      } else if (darkmode === false) {
        return { icon: "ri-sun-fill", label: "Light", color: "#F1C40F" };
      } else {
        return { icon: "ri-contrast-line", label: "Auto" };
      }
    },
  },
};
</script>

<style lang="scss">
#darkmode-controller {
  /* width: 60px;
  height: 30px; */
  border-radius: 15px;
  /* background-color: rgba(0, 0, 0, 0.05); */
  margin: 0 12px;
  padding: 6px 10px;
  transition: all 0.3s ease;

  display: flex;
  align-items: center;
  font-size: 0.87rem;

  & > span.stat-icon {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  &:hover {
    /* background-color: rgba(0, 0, 0, 0.05); */
  }
}
</style>
