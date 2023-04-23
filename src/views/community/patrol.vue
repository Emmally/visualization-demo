<template>
    <ChartLayout title="巡更占比">
        <Charts :option="option" />
    </ChartLayout>
</template>

<script lang="ts">
export default{
    name:'Patrol'
}
</script>
<script setup lang="ts" >
import { Charts } from '@kjgl77/datav-vue3';
import ChartLayout from './chartLayout.vue';

const option = {
    series: [
      {
        type: 'pie',
        radius: '50%',
        roseSort: false,
        data: [
          { name: '已巡更', value: 70 },
          { name: '未巡更', value: 10 },
          { name: '已延误', value: 20 },
        ],
        insideLabel: {
          show: false
        },
        outsideLabel: {
          formatter: '{name} {percent}%',
          labelLineEndLength: 20,
          style: {
            fill: '#fff'
          },
          labelLineStyle: {
            stroke: '#fff'
          }
        },
        roseType: true
      }
    ],
    color: ['#da2f00', '#541200','#ff4411']
  }
</script>
