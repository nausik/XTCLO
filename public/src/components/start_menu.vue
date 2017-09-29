<template>
<div class="start_menu" v-bind:class="{ hidden: (!visible) }">
  <div class="left_bar">
    XTCLO
  </div>
  <div class="menu_button" v-on:click="openWindow('info')">
    <div class="icon">
      <img src="https://i.imgur.com/nclAViG.png">
    </div>
    <div>
      <span class="first_letter">I</span>nfo
    </div>
  </div>
</div>
</template>

<script>
'use strict';

export default {
    data: function() {
        return {
            visible: false
        };
    },
    methods:{
      openWindow: function(window_type){
        this.eventHub.$emit('addNewWindow', window_type);
        this.visible = !this.visible;
      }
    },
    created: function() {
      this.eventHub.$on('toggleStartMenu', () => {
        this.visible = !this.visible;
      });
    }
}
</script>

<style lang="scss" scoped>

@import '~styles/variables';

.start_menu{
  @include border('normal', 1px);

  position: fixed;
  bottom: 28px;
  width: 200px;
  height: 400px;
  left: 2px;
  padding: 3px;
  background-color: map-get($colors, gray);

  .left_bar{
    text-orientation: sideways;
    background-color: #808080;
    width: 394px;
    transform: rotate(-90deg);
    transform-origin: right top 0;
    margin-left: -400px;
    padding: 3px;
    color: #aaa;
    font-weight: bold;
  }

    .menu_button{
    margin-left: 29px;
    margin-top: -20px;
    cursor: pointer;
    height: 42px;
    display: flex;
    justify-content: start;
    align-items: center;

    .icon{
      margin-right: 5px;
    }

    &:hover{
      background-color: #0e5be7;
    }

    .first_letter{
      text-decoration: underline;
    }
  }
}

</style>