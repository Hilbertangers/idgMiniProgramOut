Component({
    externalClasses: ['ci-class'],
    options: {
        multipleSlots: true
    },
    properties: {
        tabs: {
            type: Array,
        },
        tabBarPosition: {
            type: String,
            value: 'top'
        },
        initialPage: {
            type: Number,
            value: 0,
        },
        animated: {
            type: Boolean,
            value: true,
            observer: function(newVal) {
                if(!newVal) {
                    this.setData({
                        isAnimated: 0
                    })
                }
            }
        },
    },
    attached: function() {
        const _this = this
        wx.getSystemInfo({
            success: function(res) {
                _this.setData({
                    systemInfoWidth: res.windowWidth
                })
            }
        })
    },
    data: {
        selectedIndex: 0,
        isAnimated: 500,
        isScroll: true,
        scrollLeft: 0,
        systemInfoWidth: 0
    },
    methods: {
        handleClickItem (e) {
            this.setData({
                initialPage: e.target.dataset.data,
                selectedIndex: e.target.dataset.data
            }, function() {
                this.triggerEvent('onTabClick', e.target)
            })
        },
        swiperChange (e) {
            this.setData({
                initialPage: e.detail.current
            }, function() {
                if(this.data.initialPage > 4) {
                    this.setData({
                      scrollLeft: this.data.systemInfoWidth * parseInt(this.data.initialPage / 5)
                    })
                } else {
                    this.setData({
                        scrollLeft: 0
                    })
                }
            })
        }
    }
});
