<template>
<div class="bottom_bar">
  <start-menu></start-menu>
  <div class="start_button button" v-on:click="toggleStartMenu">
    XTCLO
  </div>
  <state v-for="window in windows" v-bind:window-id="window[0]" :key="window[0]"  :root="window[1]">
  </state>
  
  <div class="clearfix">
    
  </div>
</div>
</template>

<script>
'use strict';

import State from 'components/state.vue';
import StartMenu from 'components/start_menu.vue';

export default {
    props: ["windows"],
    components: {
        'State': State,
        'StartMenu': StartMenu
    },
    methods: {
      toggleStartMenu: function(){
        this.eventHub.$emit('toggleStartMenu');
      }
    }
}
</script>

<style lang="scss" scoped>

@import '~styles/variables';

.bottom_bar {
    background-color: map-get($colors, gray);
    width: 100%;
    height: 30px;
    border-top: 1px solid white;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    .start_button {
        @include border('normal', 2px);
        width: 80px;
        height: 21px;
        margin-top: 2px;
        margin-left: 2px;
        text-align: center;
        line-height: 21px;

        &:active {
          @include border('active', 2px);
        }
    }
}
</style>