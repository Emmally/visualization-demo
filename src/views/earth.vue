<template>
<layout title="echarts-gl实现地球">
    <div id="chartContainer" class="chart-container"></div>
</layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout.vue';
import { onMounted } from 'vue';
import baseTextureImage from '@/assets/images/earth/earth.jpg';
import environmentImage from '@/assets/images/earth/sky.jpg';
import * as echarts from 'echarts';
import 'echarts-gl';


onMounted(()=>{
    const el=document.getElementById('chartContainer');
    const echart=echarts.init(el as HTMLElement);
    const option={
        backgroundColor: '#000',
        globe: {
            baseTexture: baseTextureImage,
            shading: 'lambert',
            environment: environmentImage,
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
