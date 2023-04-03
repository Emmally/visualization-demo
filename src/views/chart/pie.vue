<template>
    <p class="chart-title">编程语言热门度</p>
    <div id="pie" class="chart"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(()=>{
    const chartDom = document.getElementById('pie');
    const myChart = echarts.init(chartDom as HTMLElement);
    const option = {
        legend: {
            top: 'top'
        },        
        series: [
            {
            name: '编程语言热门度',
            type: 'pie',
            radius: [20, 120],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: [
                { value: 100, name: 'Python' },
                { value: 80, name: 'Java' },
                { value: 60, name: 'C#' },
                { value: 40, name: 'JavaScript' },
                { value: 20, name: 'PHP' }
            ]
            }
        ]
        };

    option && myChart.setOption(option);
})
</script>
<style scoped>
.chart{    
    width: 100%;
    height: 100%;
}
</style>