<template>
    <div class="statistics-container">
        <BorderBox13 v-for="item in data" :key="item.label">
            <div>{{ item.label }}</div>
            <div class="count">{{ item.value }}</div>
        </BorderBox13>
    </div>    
</template>

<script lang="ts">
export default{
    name:'Statistics'
}
</script>
<script setup lang="ts" >
import { BorderBox13 } from '@kjgl77/datav-vue3';
const data = [
    { label:'住户数', value: 8000 },
    { label:'设备数', value: 250 },
    { label:'房屋数', value: 2500 },
    { label:'车辆数', value: 1500 }
]
</script>

<style lang="less" scoped>
.statistics-container{
    display: flex;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    align-items: center; 
    justify-content: center;       
    .dv-border-box-13{
        margin: 10px;
        padding-top: 10px;
        box-sizing: border-box; 
        :deep(.border-box-content){
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
        }    
    }    
    .count{
        font-size: 25px;
        font-weight: bold;
    }
}
</style>