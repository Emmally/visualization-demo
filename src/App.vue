<template>
  <div v-show="route.path==='/'" class="main-box">
    <router-link v-for="item in menuList" :key="item.name" :to="{name: item.name}"> 
      <div class="card">
        <img :src="item.imgUrl" style="width:100%"/>
        <div class="txt">
          <p>{{item.des}}</p>
        </div>
      </div>
    </router-link> 
  </div>
  <router-view></router-view>
</template>


<script setup lang="ts">
import {useRoute} from 'vue-router';
import cubeBg from '@/assets/images/cube/bg.jpg';
import earthBg from '@/assets/images/earth/bg.jpg';
import lottieBg from '@/assets/images/lottie/bg.png';
import chartBg from '@/assets/images/chart/bg.jpg';
import globalBg from '@/assets/images/global/bg.jpg';
const route = useRoute();
const menuList=[
  {
    name: 'cube',
    imgUrl:cubeBg,
    des:'CSS3实现魔方'
  },
  {
    name: 'earth',
    imgUrl:earthBg,
    des:'echarts-gl实现地球'
  },
  {
    name: 'lottie',
    imgUrl:lottieBg,
    des:'lottie-web实现动画'
  },
  {
    name: 'chart',
    imgUrl:chartBg,
    des:'echarts实现图表'
  },
  {
    name: 'global',
    imgUrl:globalBg,
    des:'three.js实现VR全景'
  }   
]
</script>

<style scoped>
.main-box{
  max-width: 1200px;
  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill,300px);
  grid-gap:10px;
}

.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  text-align: center;
}
.txt{
  padding: 10px;
}
</style>
