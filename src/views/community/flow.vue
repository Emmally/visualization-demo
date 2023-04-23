<template>
    <div class="flow-container">
        <BorderBox5>
            <div class="flow">
                <div v-for="item in personFlow" :key="item">{{ item }}</div>
            </div>
            <div class="title">今日人流量</div>
        </BorderBox5>
        <BorderBox5 :reverse="true">
            <div class="title">今日车流量</div>
            <div class="flow">
                <div v-for="item in carFlow" :key="item">{{ item }}</div>
            </div>
        </BorderBox5>
    </div>    
</template>

<script lang="ts">
export default{
    name:'Flow'
}
</script>
<script setup lang="ts" >
import { BorderBox5 } from '@kjgl77/datav-vue3';
const personFlow = [ 0, 2, 4, 3];
const carFlow = [ 0, 0, 8, 5];
</script>

<style lang="less" scoped>
.flow-container{
    display: flex;
    height: 100%;
    .dv-border-box-5{ 
        padding: 0 20px;      
        box-sizing: border-box;
        color: #08e5ff;
        :deep(.border-box-content){
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
        }
    }
    .flow{
        display: flex;
        div{
            flex: 1;
            background-color: rgba(4,49,128,.6);            
            font-size: 45px;
            font-weight: bold;
            line-height: 70px;
            text-align: center;
            margin: 5px;
        }
    }
    .title{
        font-size: 20px;
        line-height: 40px;
    }
}
</style>