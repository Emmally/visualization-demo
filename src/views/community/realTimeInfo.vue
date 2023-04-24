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
import avatar from './img/avatar.png';
import carImg from './img/car.png';

const personConfig = [
    {
        id: 1,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/24 12:00',
        isOut: false
    },
    {
        id: 2,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/24 11:00',
        isOut: true
    },
    {
        id: 3,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/23 09:00',
        isOut: false
    },
    {
        id: 4,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/23 08:00',
        isOut: true
    },
    {
        id: 5,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/22 10:00',
        isOut: false
    },
    {
        id: 6,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/21 08:00',
        isOut: true
    },
    {
        id: 7,
        url: avatar,
        name: '樱桃小丸子',
        time: '04/21 10:00',
        isOut: false
    }
]
const carConfig = [
    {
        id: 1,
        url: carImg,
        name: '粤ABJ342',
        time: '04/24 13:00',
        isOut: false
    },
    {
        id: 2,
        url: carImg,
        name: '粤ABJ342',
        time: '04/24 09:00',
        isOut: true
    },
    {
        id: 3,
        url: carImg,
        name: '粤ABJ342',
        time: '04/23 11:00',
        isOut: false
    },
    {
        id: 4,
        url: carImg,
        name: '粤ABJ342',
        time: '04/23 10:00',
        isOut: true
    },
    {
        id: 5,
        url: carImg,
        name: '粤ABJ342',
        time: '04/21 22:00',
        isOut: false
    },
    {
        id: 6,
        url: carImg,
        name: '粤ABJ342',
        time: '04/21 11:00',
        isOut: false
    },
    {
        id: 7,
        url: carImg,
        name: '粤ABJ342',
        time: '04/20 10:00',
        isOut: true
    },
    {
        id: 8,
        url: carImg,
        name: '粤ABJ342',
        time: '04/20 22:00',
        isOut: false
    }
]
</script>

<style lang="less" scoped>
.realTimeInfo-container{
    display: flex;
    height: 100%;   
}
</style>