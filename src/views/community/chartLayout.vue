<template>
    <BorderBox9 class="box-container">
        <div class="title">
            <Decoration1 style="width:30%;height:30px;" />
            <span>{{title}}</span>
            <Decoration1 style="width:30%;height:30px;" />
        </div>
        <slot/>
    </BorderBox9>
</template>

<script lang="ts">
export default{
    name:'ChartLayout'
}
</script>
<script setup lang="ts" >
import {  BorderBox9, Decoration1 } from '@kjgl77/datav-vue3';
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<style lang="less" scoped>
.box-container{
    padding: 10px;
    box-sizing: border-box;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
    }
}

</style>