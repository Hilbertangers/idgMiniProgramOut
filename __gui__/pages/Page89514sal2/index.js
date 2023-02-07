const PAGE_UUID = 'sal20000_org_key2212055l33mtcaue';

Page({
  data() {
    return {
      quanjubianliangceshi: '',
      variable_aCustomLayoutFrameConditionsForRendering: false,
      variable_frameAccordingToTheConditionOfTheCustomLayout: false,
      variable_time: '',
      variable_111: '',
    };
  },

  props: [],

  created() {},

  onShow(options) {
    this.$route_params = Object.keys(options || {})
      .map((k) => {
        return { key: decodeURIComponent(k), value: decodeURIComponent(options[k]) };
      })
      .reduce((total, item) => {
        total[item.key] = item.value;
        return total;
      }, {});
    if (window.componentsIns) {
      window.componentsIns.onShow.forEach((cb) => cb(options));
    }
  },

  onReady(options) {
    this.$route_params = Object.keys(options || {})
      .map((k) => {
        return { key: decodeURIComponent(k), value: decodeURIComponent(options[k]) };
      })
      .reduce((total, item) => {
        total[item.key] = item.value;
        return total;
      }, {});
    if (window.componentsIns) {
      window.componentsIns.onReady.forEach((cb) => cb(options));
    }
  },

  onHide() {
    if (window.componentsIns) {
      window.componentsIns.onHide.forEach((cb) => cb(options));
    }
  },

  computed: {
    PAGE_UUID() {
      return PAGE_UUID;
    },
  },

  watch: {},

  methods: {
    quanjufangfaceshi: function () {
      const _this = this;
    },
    method_1: function () {
      const _this = this;

      Bridge.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        crop: false,
        success: (...arr) => {
          this.quanjufangfaceshi.apply(this, arr);
        },
      });
    },
    method_processingCustomLayoutBoxBindingClickEvents_1: function () {
      const _this = this;

      Bridge.chooseImage({
        count: 9,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (...arr) => {
          this.quanjufangfaceshi.apply(this, arr);
        },
      });
      return true;

      true;

      true;
    },
    method_processingCustomLayoutBoxBindingClickEvents: function () {
      const _this = this;

      this['variable_111'] = new Date(this['variable_time']).getFullYear();
    },
  },
});
