<template>
    <ChartLayout title="物业费统计">
        <Charts :option="option" />
    </ChartLayout>
</template>

<script lang="ts">
export default{
    name:'Fees'
}
</script>
<script setup lang="ts" >
import {  Charts } from '@kjgl77/datav-vue3';
import ChartLayout from './chartLayout.vue';

const option = {
    legend: {
        data: ['未缴物业费', '已缴物业费'],
        textStyle: {
            fill: '#fff'
        }
    },
    xAxis: {
        name: '月份',
        nameTextStyle: {
            fill: '#fff'
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        axisTick:{
            style: { stroke: '#d4d4d4' }
        },
        axisLabel:{
            style:{ fill: '#fff' }
        },
        axisLine:{
            style:{ stroke: '#d4d4d4' }
        }
    },
    yAxis: {
        name: '物业费',
        nameTextStyle: { fill: '#fff' },
        data: 'value',
        axisTick:{
            style: { stroke: '#d4d4d4' }
        },
        axisLabel:{
            style:{ fill: '#fff' }
        },
        axisLine:{
            style: { stroke: '#fff' }
        }
    },
    series: [
        {
        name: '未缴物业费',
        data: [1200, 2230, 1900, 2100, 3500, 4200],
        type: 'line',
        stack: 'a',
        fill: {
            show: true
        },
        label:{
            style: '#fff'
        }
        },
        {
        name: '已缴物业费',
        data: [5600, 4570, 4900, 4700, 3300, 2600],
        type: 'line',
        stack: 'a',
        lineStyle: {
            lineDash: [5, 5]
        },
        label:{
            style: '#fff'
        }
        }
    ]
}

</script>

<style lang="less" scoped>
.dv-charts-container {
    height: calc( 100% - 60px );
    padding: 0 5px;
    box-sizing: border-box;
}
</style>