<template>
    <div class="realTimeInfo-container">
        <InfoBoard title="实时人员出入信息" :config="personConfig"></InfoBoard>
        <InfoBoard title="实时车辆出入信息" :config="carConfig"></InfoBoard>
    </div>    
</template>

<script lang="ts">
export default{
    name:'RealTimeInfo'
}
</script>
<script setup lang="ts" >
import InfoBoard from './infoBoard.vue';
const personConfig = {
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        // ['行7列1', '行7列2', '行7列3'],
        // ['行8列1', '行8列2', '行8列3'],
        // ['行9列1', '行9列2', '行9列3'],
        // ['行10列1', '行10列2', '行10列3']
    ],
    oddRowBGC: 'rgba(9, 37, 50, 0.4)',
    evenRowBGC: 'rgba(10, 32, 50, 0.3)'
};
const carConfig = {
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        // ['行7列1', '行7列2', '行7列3'],
        // ['行8列1', '行8列2', '行8列3'],
        // ['行9列1', '行9列2', '行9列3'],
        // ['行10列1', '行10列2', '行10列3']
    ],
    oddRowBGC: 'rgba(9, 37, 50, 0.4)',
    evenRowBGC: 'rgba(10, 32, 50, 0.3)'
}
</script>

<style lang="less" scoped>
.realTimeInfo-container{
    display: flex;
    height: 100%;
}
</style>