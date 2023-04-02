<template>
<layout title="echarts-gl实现地球">
    <div id="chartContainer" class="chart-container"></div>
</layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout.vue'
import { onMounted } from 'vue';
import * as echarts from 'echarts'
import 'echarts-gl'

onMounted(()=>{
    const el=document.getElementById('chartContainer');
    const echart=echarts.init(el as HTMLElement);
    const option={
        backgroundColor: '#000',
        globe: {
            baseTexture: 'src/assets/images/earth/earth.jpg',
            shading: 'lambert',
            environment: 'src/assets/images/earth/sky.jpg',
            atmosphere:{
                show: true
            },
            light:{
                ambient:{
                    intensity: 0.1
                },
                main:{
                    intensity: 1.5
                }
            }
        },
        series:[]    
    };
    option && echart.setOption(option);
})

</script>
<style scoped>
.chart-container{
    width:1000px;
    height: 560px;
}
</style>
