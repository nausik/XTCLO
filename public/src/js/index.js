'use strict';

import Vue from 'vue';
import Window from 'components/window.vue';
import Icon from 'components/icon.vue';
import BottomBar from 'components/bottom_bar.vue';
import Tabs from 'vue-tabs-component';
import VueDraggableResizable from 'vue-draggable-resizable';
import Utils from 'js/utils.js';

require('../css/index.scss');

Vue.component('vue-draggable-resizable', VueDraggableResizable);
Vue.use(Tabs);

const eventHub = new Vue();

Vue.mixin({
    data: function() {
        return {
            eventHub: eventHub
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        windows: []
    },
    components: {
        'Window': Window,
        'Icon': Icon,
        'BottomBar': BottomBar
    },
    created: function() {
        this.$on('close', id => {
            this.windows = Utils.excludeFromWindowsArray(this.windows, id);
        });

        this.eventHub.$on('addNewWindow', root => {
            let new_window_id = Utils.generateId(5);

            this.windows.push([new_window_id, root]);
            this.eventHub.$emit('setWindowState', new_window_id, root);
        });
    }
});