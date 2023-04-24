<template>
   <div id="community-container">
        <FullScreenContainer>
            <BorderBox11 title="智慧社区">
                <div class="main-container">
                    <div class="left-container">
                        <div class="trisection"><Patrol /></div>
                        <div class="trisection"><Fees /></div>
                        <div class="trisection"><ParkingSpaces /></div>
                    </div>
                    <div class="center-container">
                        <div class="center-top">
                            <Flow />
                        </div>
                        <div class="center-middle">
                            <Statistics />
                        </div>
                        <div class="center-bottom">
                            <RealTimeInfo />
                        </div>
                    </div>
                    <div class="right-container">
                        <div class="trisection"><PersonGroup /></div>
                        <div class="trisection"><Repair /></div>
                        <div class="trisection"><DeviceAlarm /></div>
                    </div>
                </div>                
            </BorderBox11>
        </FullScreenContainer>
   </div>
</template>

<script setup lang="ts" >
import { FullScreenContainer, BorderBox11 } from '@kjgl77/datav-vue3';
import Patrol from './patrol.vue';
import Fees from './fees.vue';
import ParkingSpaces from './parkingSpaces.vue';
import Flow from './flow.vue';
import Statistics from './statistics.vue';
import RealTimeInfo from './realTimeInfo.vue';
import PersonGroup from './personGroup.vue';
import Repair from './repair.vue';
import DeviceAlarm from './deviceAlarm.vue';

</script>

<style lang="less" scoped>
#community-container{
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;
    #dv-full-screen-container {
        background-image: url('./img/bg.png');
        background-size: 100% 100%;
        box-shadow: 0 0 3px blue;
        display: flex;
        flex-direction: column;
    }
    .main-container{ 
        height: 100%;
        display: grid;
        grid-template-columns: 25% 1fr 25%;
        padding: 40px 10px 10px; 
        box-sizing: border-box;
        overflow: hidden;        
    }
    .left-container,.center-container,.right-container{       
        display: flex;
        flex-direction: column;
    }
    .trisection {
        flex: 1;
    }
    .center-top{
        height: 25%;
        padding-top: 20px;
        box-sizing: border-box;
    }
    .center-middle{
        height: 15%;
    }
    .center-bottom{
        flex: 1;
    }
}

</style>