<template>
<div class="start_menu" v-bind:class="{ hidden: (!visible) }">
  <div class="left_bar">
    XTCLO
  </div>
  <div style="padding-left: 29px; margin-top: -20px;">
    waasdasdasd
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
}
</style>