<template>
<vue-draggable-resizable  v-on:dragging="onDrag" v-on:resizing="onResize" :x="x" :y="y" :h="height" :w="width" :minw="minwidth" :minh="minheight" class="window" v-bind:class="{ hidden: (!visible) }">
<div class="header">
    <div class="text">{{current_page}}</div>
    <div class="buttons">
        <div class="minimize_button button" v-on:click="minimize">-</div>
        <div class="close_button button" v-on:click="close">x</div>
    </div>
</div>
<div class="content">
    <div v-if="isCurrentPage('Men')">
        <icon destination="men shirts" v-bind:target="windowId">
        </icon>
    </div>
    <div v-if="isCurrentPage('Women')">
        <icon destination="women coats" v-bind:target="windowId">
        </icon>
    </div>
    <div v-if="isCurrentPage('info')" class="info_page">
        <h2>Concept for XTCLO store</h2>
        <div>
            Author: <a href="https://github.com/nausik">Artem Barbyniahra</a>
        </div>
    </div>
    <div v-if="isCurrentPage('men shirts')" class="tabs_page">
        <div class="left_bar">
            <tabs :options="{ useUrlFragment: false }">
            <tab name="Front">
            <img src="https://i.imgur.com/U5RNoax.jpg">
            </tab>
            <tab name="Back">
            <img src="https://i.imgur.com/KVIsMKR.jpg">
            </tab>
            <tab name="Closeup">
            <img src="https://i.imgur.com/5Y4x1Mc.jpg">
            </tab>
            </tabs>
        </div>
        <div class="right_bar">
            <div style="padding-right: 10px;">
                <div>
                    Size
                </div>
                <div class="input">
                    <select class="size_select">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div>
                    Amount
                </div>
                <div class="input">
                    <input type="number" value="1" min="1" max="5" class="amount_input">
                </div>
                <div>
                    <button class="button add_to_cart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="isCurrentPage('women coats')" class="tabs_page">
        <div class="left_bar">
            <tabs :options="{ useUrlFragment: false }">
            <tab name="Front">
            <img src="https://i.imgur.com/mQekgJu.jpg">
            </tab>
            <tab name="Side">
            <img src="https://i.imgur.com/SHEyCND.jpg">
            </tab>
            <tab name="Back">
            <img src="https://i.imgur.com/mOJaIYS.jpg">
            </tab>
            </tabs>
        </div>
        <div class="right_bar">
            <div style="padding-right: 10px;">
                <div>
                    Size
                </div>
                <div class="input">
                    <select class="size_select">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div>
                    Amount
                </div>
                <div class="input">
                    <input type="number" value="1" min="1" max="5" class="amount_input">
                </div>
                <div>
                    <button class="button add_to_cart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</div>
</vue-draggable-resizable>
</template>
<script>
'use strict';
import Icon from 'components/icon.vue';
import Utils from 'js/utils.js';
export default {
    data: function() {
        return {
            visible: true,
            width: 400,
            height: 350,
            minwidth: 400,
            minheight: 350,
            x: Utils.getNewWindowCoordinate('x'),
            y: Utils.getNewWindowCoordinate('y'),
            history: [],
            current_page: ""
        }
    },
    components: {
        'Icon': Icon
    },
    methods: {
        close: function() {
            this.$root.$emit('close', this.windowId);
        },
        minimize: function() {
            this.eventHub.$emit('minimize', this.windowId);
        },
        onResize: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
        onDrag: function(x, y) {
            this.x = x;
            this.y = y;
        },
        setNewPage: function(new_page) {
            this.current_page = new_page;
            this.history.push(new_page);
        },
        isCurrentPage: function(page) {
            return this.current_page.toLowerCase() === page.toLowerCase();
        }
    },
    created: function() {
        this.eventHub.$on('minimize', (window_id) => {
            if (window_id === this.windowId) {
                this.visible = !this.visible;
            }
        });
        this.eventHub.$on('changeDestination', (destination, window_id) => {
            if (window_id === this.windowId) {
                this.setNewPage(destination);
            }
        });
        this.setNewPage(this.root);
    },
    props: ["windowId", "root"]
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';

.window {
    @include border('normal', 1px);
    background-color: map-get($colors, gray);
    position: fixed;
    left: 30%;
    top: 30%;
    z-index: 100;
    .header {
        height: 20px;
        background-color: map-get($colors, blue);
        text-transform: capitalize;
        display: flex;
        justify-content: space-between;
        .text {
            padding-left: 3px;
            padding-top: 3px;
            padding-bottom: 3px;
            color: white;
            font-size: 14px;
        }
        .buttons {
            display: flex;
            justify-content: space-around;
            .minimize_button, .close_button {
                line-height: 13px;
                height: 15px;
                margin-top: 2px;
                margin-right: 1px;
                width: 15px;
                font-size: 13px;
            }
        }
    }
    .content {
        height: 100%;
        .info_page{
            padding: 20px;
        }
        .tabs_page {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            height: 100%;
            width: 100%;
            .left_bar {
                height: calc(100% - 35px);
                padding: 15px;
            }
            .right_bar {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                height: 100%;
                width: 100px;
                .input {
                    margin-bottom: 10px;
                    .size_select, .amount_input {
                        @include border('normal', 1px);
                        width: 100%;
                    }
                }
                .add_to_cart {
                    width: 90px;
                    height: 40px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>

<style lang="scss">

@import '~styles/variables';

.tabs-component-tabs {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    .tabs-component-tab {
        border-top: 1px solid white;
        border-left: 1px solid white;
        border-right: 1px solid black;
        padding: 5px;
        height: 20px;
        line-height: 20px;
    }
    .tabs-component-tab.is-active {
        border-bottom: 1px solid map-get($colors, gray);
        border-right-width: 2px;
        height: 22px;
        line-height: 22px;
        margin-top: -2px;
        margin-bottom: 0;
    }
    .tabs-component-tab-a {
        text-decoration: none;
        color: black;
    }
}
.tabs-component-panels {
    //100% - tabs height (32px) - padding of window (15px) - header (20px)
    height: calc(100% - 32px - 15px - 20px);
    .tabs-component-panel {
        @include border('normal', 1px);
        height: 100%;
        padding: 10px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.tabs-component {
    height: 100%;
}
.handle {
    border: none !important;
    background: transparent !important;
}
</style>