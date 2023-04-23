<template>
    <BorderBox8 class="box-container">
        <div class="title">
            <Decoration1 class="decoration" />
            <span>{{title}}</span>
            <Decoration1 class="decoration" />
        </div>
        <div class="content"><slot/></div>
    </BorderBox8>
</template>

<script lang="ts">
export default{
    name:'ChartLayout'
}
</script>
<script setup lang="ts" >
import { BorderBox8, Decoration1 } from '@kjgl77/datav-vue3';
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
    }
    .decoration{
        width: 20%;
        height: 30px;        
    }
    .content{
        height: calc(100% - 40px);
    }
}

</style>