<template>
    <BorderBox8 class="board-container">
        <div class="title">{{ title }}</div>
        <div class="info">
          <div v-for="item in config" :key="item.id" class="info-item">
              <img class="pic" :src="item.url">
              <div class="detail">
                <p>{{ item.name }}</p>
                <p>{{ item.time }}</p>
                <p :class="['tag', item.isOut ? 'out' : 'in']">{{ item.isOut ? '出' :'入' }}</p>
              </div>
            </div>
        </div>
    </BorderBox8>
</template>

<script lang="ts">
export default{
    name:'InfoBoard'
}
</script>
<script setup lang="ts" >
import { PropType } from "vue";
import { BorderBox8 } from '@kjgl77/datav-vue3';

interface InfoConfig{
  id: number;
  url: string,
  name: string,
  time: string,
  isOut: boolean
}
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  config:{
    type: Array as PropType<InfoConfig[]>,
    default: ()=>([])
  }
});

</script>

<style lang="less" scoped>
.board-container{
    padding: 3px;
    box-sizing: border-box;
    .title{
      line-height: 40px;
      background: linear-gradient(rgba(62,91,117,0.5),rgba(4,35,90,0.5));
    }
    .info{
      display: flex;
      flex-direction: column;
      color:#d4d4d4;
      .info-item{
        display: flex;
        padding:5px 10px;
        box-sizing: border-box;
        flex: 1;
      }
      .pic{
        width: 100px;
        height: 80px;
        border: 1px solid #333;
        border-radius: 8px;
      }
      .detail{
        position: relative;
        padding-left: 10px;
        text-align: left;
        line-height: 15px;
        flex:1;
        .tag{
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -25px;          
          width: 50px;
          height: 50px;
          background: rgba(112,128,144,0.3);
          border-radius: 50%;
          text-align: center;
          line-height: 50px;                
          &.in{
            color: #08e5ff;
          }
          &.out{
            color: #adb6b7;
          }
        }        
      }
      .decoration{
        width: 100%;
        height: 5px;
      }
    }
}
</style>