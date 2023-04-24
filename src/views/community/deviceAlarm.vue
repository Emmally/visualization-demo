<template>
    <ChartLayout title="近一周设备告警">
        <CapsuleChart :config="config"/>
    </ChartLayout>
</template>

<script lang="ts">
export default{
    name:'DeviceAlarm'
}
</script>
<script setup lang="ts" >
import { CapsuleChart } from '@kjgl77/datav-vue3';
import ChartLayout from './chartLayout.vue';

const config = {
    data: [
        {
        name: '04/24',
        value: 5
        },
        {
        name: '04/23',
        value: 8
        },
        {
        name: '04/22',
        value: 10
        },
        {
        name: '04/21',
        value: 4
        },
        {
        name: '04/20',
        value: 7
        },
        {
        name: '04/19',
        value: 6
        },
        {
        name: '04/18',
        value: 12
        }
    ],
    colors:[
        'rgba(4,107,153,0.5)',
        'rgba(4,107,153,0.5)',
        'rgba(4,107,153,0.5)',
        'rgba(4,107,153,0.5)',
        'rgba(4,107,153,0.5)',
        'rgba(4,107,153,0.5)',
        'rgba(4,107,153,0.5)'
    ],
    unit: '次',
    showValue: true
}
</script>
