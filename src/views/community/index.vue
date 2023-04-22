<template>
   <div id="community-container">
        <FullScreenContainer>
            <BorderBox11 class="main-container" title="智慧社区">
                <div class="left-container">
                    <div class="trisection"><Patrol /></div>
                    <div class="trisection"><Fees /></div>
                    <div class="trisection"><ParkingSpaces /></div>
                </div>
                <div class="center-container"></div>
                <div class="right-container"></div>
            </BorderBox11>
        </FullScreenContainer>
   </div>
</template>

<script setup lang="ts" >
import { FullScreenContainer, BorderBox9, BorderBox11 } from '@kjgl77/datav-vue3';
import Patrol from './patrol.vue';
import Fees from './fees.vue';
import ParkingSpaces from './parkingSpaces.vue';


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
        display: flex;
        flex-direction: column;  
        padding: 40px 10px 10px; 
        box-sizing: border-box;
        .border-box-content {
            padding: 20px;
            box-sizing: border-box;
            display: flex;
        }
    }
    .left-container,.right-conotener {
        width: 25%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;  
       .trisection {
            flex: 1;
        }
    }
    
    .center-container{
        flex: 1;
    }

}

</style>