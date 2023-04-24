<template>
    <ChartLayout title="人员组成">
        <Charts :option="option" />
    </ChartLayout>
</template>

<script lang="ts">
export default{
    name:'PersonGroup'
}
</script>
<script setup lang="ts" >
import { Charts } from '@kjgl77/datav-vue3';
import ChartLayout from './chartLayout.vue';

const option = {
    series: [
        {
            type: 'pie',
            data: [
                { name: '孤寡老人', value: 100 },        
                { name: '关爱人员', value: 450 },
                { name: '残疾人员', value: 50 },
                { name: '其他', value: 1000 }
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
            radius: ['40%', '50%'],
        }
    ],
    color: ['#f7c806', '#34a38a','#35aad8', '#de524d']
}
</script>
