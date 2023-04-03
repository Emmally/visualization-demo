<template>
    <layout title="echarts实现图表"> 
        <div class="chart-container">
            <div class="chart-item"><funnel/></div>
            <div class="chart-item"><pie/></div>
        </div>
    </layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout.vue';
import funnel from './funnel.vue';
import pie from './pie.vue';
</script>
<style scoped>
.chart-container{
    width: 100%;
    background: #F8F8FF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.chart-item{
    width:50%;
    height: 560px;
    padding:10px;
    box-sizing: border-box;
}
</style>