<template>
<div class="window_state" v-on:click="minimize" v-bind:class="{ active: active }">
  {{current_page}}
</div>
</template>

<script>
'use strict';

module.exports = {
    props: ["windowId", "root"],
    data: function() {
        return {
            active: true,
            history: [],
            current_page: ""
        }
    },
    methods: {
        minimize: function() {
            this.eventHub.$emit('minimize', this.windowId);
        },
        setNewPage: function(new_page) {
            this.current_page = new_page;
            this.history.push(new_page);
        }
    },
    created: function() {
        this.eventHub.$on('minimize', (window_id) => {
            if (window_id === this.windowId) {
                this.active = !this.active;
            }
        });

        this.eventHub.$on('changeDestination', (destination, window_id) => {
            if (window_id === this.windowId) {
                this.setNewPage(destination);
            }
        });

        this.setNewPage(this.root);
    }
}
</script>

<style lang="scss" scoped>

@import '~styles/variables';

.window_state{
  @include border('normal', 1px);

  width: 90px;
  height:21px;
  margin-top: 3px;
  margin-left: 2px;
  padding-left: 5px;
  line-height: 22px;
  float: left;
  margin-left: 10px;
  cursor: pointer;
  font-size:13px;
  text-transform: capitalize;

  &.active{
    @include border('active', 1px);
    background-color: #fffffe;
  }
}

</style>