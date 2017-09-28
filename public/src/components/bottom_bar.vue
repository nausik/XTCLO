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
.bottom_bar{
  background-color: #c0c0c0;
  width: 100%;
  height: 30px;
  border-top: 1px solid white;
  position: fixed;
  bottom: 0;
  
}

.start_button{
  width: 80px;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid white;
  border-top: 2px solid white;
  height:21px;
  margin-top:2px;
  margin-left: 2px;
  text-align: center;
  line-height: 21px;
  float: left;
}

.start_button:active{
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}

.clearfix{
  clear: both;
}
</style>