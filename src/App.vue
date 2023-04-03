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
import {useRoute} from 'vue-router'
import cubeBg from '@/assets/images/cube/bg.jpg'
import earthBg from '@/assets/images/earth/bg.jpg'
import lottieBg from '@/assets/images/lottie/bg.png'
import chartBg from '@/assets/images/chart/bg.jpg'
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
  }  
]
</script>

<style scoped>
.main-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}
.card{
  width: 250px;
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  text-align: center;
  box-sizing: border-box;
}
.txt{
  padding: 10px;
}
</style>
