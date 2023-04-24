<template>
    <ChartLayout title="报修统计">
        <Charts :option="option" />
    </ChartLayout>
</template>

<script lang="ts">
export default{
    name:'Repair'
}
</script>
<script setup lang="ts" >
import { Charts } from '@kjgl77/datav-vue3';
import ChartLayout from './chartLayout.vue';

const option = {
    legend: {
        data: ['物业端', '业主端'],
        textStyle: {
            fill: '#e3e3e3'
        }
    },
    xAxis: {
    data: ['上月', '本月'],
    axisLabel:{
            style:{ fill: '#fff' }
        },
        axisLine:{
            style:{ stroke: '#d4d4d4' }
        }
    },
    yAxis: {
        data: 'value',
        minInterval: 1,
        axisLabel:{
            style:{ fill: '#fff' }
        },
        axisLine:{
            style:{ stroke: '#d4d4d4' }
        }
    },
    series: [
        {
            name: '物业端',
            data: [50, 30],
            type: 'bar',
            label: {
                show: true,
                position: 'top',
                offset: [0, -10],
                style: {
                fill: '#fff'
                }
            }
        },
        {
            name: '业主端',
            data: [120, 200],
            type: 'bar',
            label: {
                show: true,
                position: 'top',
                offset: [0, -10],
                style: {
                    fill: '#fff'
                }
            }
        }
    ],
    color:['#f7c806', '#34a38a']
}
</script>
