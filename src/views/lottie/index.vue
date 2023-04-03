<template>
    <layout title="lottie-web实现动画">
        <div class="animation-container">
            <div id="animation" class="animation"></div>
        </div>
    </layout>
</template>
    
<script setup lang="ts">
import Layout from '@/components/layout.vue';
import lottie from 'lottie-web';
import { onMounted } from 'vue';

onMounted(()=>{
    const animate = lottie.loadAnimation({
      container: document.getElementById('animation') as HTMLElement,
      renderer: 'svg',
      loop: true,
      path: './resource/animation.json',
    });
    animate.play();
})    
</script>
<style scoped>
.animation-container{
    width:1000px;
    height: 560px;
    background: #FAFFF0;
}
</style>
    