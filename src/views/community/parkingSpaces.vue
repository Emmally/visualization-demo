<template>
    <ChartLayout title="停车余位统计">
        <div class="parking-space-container">
            <div class="left"><Charts :option="option"/></div>
            <div class="right">
                <div v-for="(item, index) in spaceData" :key="item.label" class="info">
                    <p>{{item.label}}</p>
                    <p><span class="count">{{item.count}}</span>个</p>
                    <Decoration2 v-if="index !== spaceData.length-1" style="width:100%;height:5px;"/>
                </div>
            </div>
        </div>
    </ChartLayout>
</template>

<script lang="ts">
export default{
    name:'ParkingSpaces'
}
</script>
<script setup lang="ts" >
import {  Charts, Decoration2 } from '@kjgl77/datav-vue3';
import ChartLayout from './chartLayout.vue';
const option={
    series: [
    {
      type: 'gauge',
      data: [ { name: '剩余车位', value: 60 } ],
      axisLabel: {
        formatter: '{value}%'
      },
      details: {
        show: true,
        offset: [0, 50],
        formatter: '剩余{value}%'
      },
      animationCurve: 'easeOutBack'
    }
  ]
}
const spaceData = [
    {
        label: '车位总数',
        count: 500
    },
    {
        label: '剩余车位',
        count: 300
    }
]
</script>

<style lang="less" scoped>
.parking-space-container{
    display: flex;
    height: calc( 100% - 60px );
    .left{
        width: 60%;
        .dv-charts-container {
            height: 100%;
        }
    }
    .right{
        flex-grow: 1;
        height: 100%;
        color: #c3c3c3;
        flex-direction: column;
        .info{
            flex: 1;
            line-height: 20px;            
        }
        .count{
            font-size: 30px;
            font-weight: bold;
            color: #fff;
        }
    }
}
</style>