<template>
  <div v-if="route.path==='/'" class="main-box">
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
const route = useRoute();
const menuList=[
  {
    name: 'cube',
    imgUrl:'src/assets/images/cube/bg.jpg',
    des:'CSS3实现魔方'
  },
  {
    name: 'earth',
    imgUrl:'src/assets/images/earth/bg.jpg',
    des:'echarts-gl实现地球'
  }  
]
</script>

<style scoped>
.main-box{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
}
.card{
  width: 250px;
  margin: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  text-align: center;
}
.txt{
  padding: 10px;
}
</style>
