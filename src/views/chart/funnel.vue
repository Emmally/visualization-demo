<template>
    <p class="chart-title">编程语言热门度</p>
    <div id="funnel" class="chart"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(()=>{
    const chartDom = document.getElementById('funnel');
    const myChart = echarts.init(chartDom as HTMLElement);
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
        },
        legend: {
            data: ['Python', 'Java', 'C#', 'JavaScript', 'PHP']
        },
        series: [
            {
                name: '编程语言',
                type: 'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '80%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                    width: 1,
                    type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                    fontSize: 20
                    }
                },
                data: [
                    { value: 60, name: 'C#' },
                    { value: 40, name: 'JavaScript' },
                    { value: 20, name: 'PHP' },
                    { value: 80, name: 'Java' },
                    { value: 100, name: 'Python' }
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