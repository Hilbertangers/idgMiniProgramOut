const PAGE_UUID = 'sal20000_org_key2301163o0xvuca3o';

Page({
  data() {
    return {};
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

  methods: {},
});
