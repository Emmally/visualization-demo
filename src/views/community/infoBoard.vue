<template>
    <BorderBox8 class="box-container">
        <div class="title">{{ title }}</div>
        <!-- <ScrollBoard :config="config"></ScrollBoard> -->
    </BorderBox8>
</template>

<script lang="ts">
export default{
    name:'InfoBoard'
}
</script>
<script setup lang="ts" >
import {  BorderBox8, ScrollBoard } from '@kjgl77/datav-vue3';
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  config:{
    type: Object,
    default: ()=>({})
  }
});
</script>

<style lang="less" scoped>
.box-container{
    padding: 3px;
    box-sizing: border-box;
    .title{
        line-height: 40px;
        background: linear-gradient(rgba(62,91,117,0.5),rgba(4,35,90,0.5));
    }
}
</style>