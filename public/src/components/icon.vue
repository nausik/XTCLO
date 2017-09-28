<template>
      <div class="icon" v-on:dblclick="openDestination" v-on:click="toggleActive" v-bind:class="{ active: active }">
        <div class="image">
          <img src="//i.imgur.com/uf5lQcj.png">
        </div>
        <div class="text">
          {{destination}}
        </div>
      </div>

</template>

<script>
'use strict';

export default {
    data: function() {
        return {
            active: false,
            icon_text: ""
        }
    },
    methods: {
        openDestination: function() {
            if (this.target === "new") {
                this.eventHub.$emit('addNewWindow', this.destination);
            } else {
                this.eventHub.$emit('changeDestination', this.destination, this.target);
            }
        },
        toggleActive: function() {
            this.active = !this.active;
        }
    },
    props: ["destination", "target"]
}
</script>

<style lang="scss" scoped>
.icon{
  cursor: pointer;
  margin-top:25px;
  margin-left: 25px;
  width: 70px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid rgba(0,0,0,0);
}

.icon.active{
  border: 1px dashed #c0c0c0;
  background-color: rgba(0,0,255,0.2);
}

.icon .text{
  font-size: 13px;
  text-transform: capitalize;
}
</style>