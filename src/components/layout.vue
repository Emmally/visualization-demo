<template>
    <div class="title">{{title}}</div>
    <div class="container" style="width: 100%;">
        <slot/>   
    </div>
    <div class="button" @click="back"><span>返回主页</span></div>
</template>
<script lang="ts">
    export default{
        name:'Layout'
    }
</script>
<script setup lang="ts">
import {useRouter} from 'vue-router'
const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
const back=()=>{
    router.push({path:'/'})
}
</script>

<style scoped>
.title{
   font-size: 30px;
   font-weight: bold;
   margin-bottom:10px;
}
.chart-container{
    width: 100%;
    height: 100%;
}
.button {
    display: inline-block;
    border-radius: 20px;
    background-color: #f4511e;
    border: none;
    color: #ffff;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    padding: 12px;
    width: 150px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    vertical-align: middle;
}
.button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}
.button span::after {
    content: ">";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}
.button:hover span {
    padding-right: 30px;
}
.button:hover span::after {
    opacity: 1;
    right: 0;
}
</style>