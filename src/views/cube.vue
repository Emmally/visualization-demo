<template>
    <layout title="CSS3实现魔方">
        <div class="cube-container"> 
            <div class="outer">
                <div class="inner">
                    <template v-for="direction in ['front','after','left','right','up','down']" :key="direction">
                        <div :class="direction">
                            <template v-for="boxIndex in [...new Array(9).keys()]" :key="boxIndex">
                                <div :class="`box${boxIndex}`"></div>
                            </template>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </layout>
</template>
<script setup lang="ts">
import Layout from '@/components/layout.vue';
</script>
<style scoped>
.cube-container{
    position: relative;
    width:1000px;
    height: 560px;
    background: #FC9D99;    
}
.outer {
    position: absolute;
    top: 50%;
    left: 45%;
    width: 200px;
    height: 200px;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -moz-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    backface-visibility: hidden;
}
.inner {
    /*开启3D视图*/
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    /*动画样式*/
    -webkit-animation: change 6s linear infinite;
    -moz--animation: change 6s linear infinite;
    animation: change 6s linear infinite;
}
@-webkit-keyframes change {
    0% {
        -webkit-transform: translateZ(-10em) rotateX(0deg) rotateY(0deg);
    }
    33% {
        -webkit-transform: translateZ(-10em) rotateX(120deg) rotateY(240deg);
    }
    66% {
        -webkit-transform: translateZ(-10em) rotateX(240deg) rotateY(480deg);
    }
    100% {
        -webkit-transform: translateZ(-10em) rotateX(360deg) rotateY(720deg);
    }
}
@-moz-keyframes change {
    0% {
        -webkit-transform: translateZ(-10em) rotateX(0deg) rotateY(0deg);
    }
    33% {
        -webkit-transform: translateZ(-10em) rotateX(120deg) rotateY(240deg);
    }
    66% {
        -webkit-transform: translateZ(-10em) rotateX(240deg) rotateY(480deg);
    }
    100% {
        -webkit-transform: translateZ(-10em) rotateX(360deg) rotateY(720deg);
    }
}
@keyframes change {
    0% {
        transform: translateZ(-10em) rotateX(0deg) rotateY(0deg);
    }
    33% {
        transform: translateZ(-10em) rotateX(120deg) rotateY(240deg);
    }
    66% {
        transform: translateZ(-10em) rotateX(240deg) rotateY(480deg);
    }
    100% {
        transform: translateZ(-10em) rotateX(360deg) rotateY(720deg);
    }
} 
/*六大面通用样式*/
.inner>div {
    height: 308px;
    width: 308px;
    text-align: center;
    line-height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
}

/*前面样式*/
.front {
    margin-top: -154px;
    margin-left: -154px;
    border: 5px solid #000000;
    -webkit-transform: translateZ(158px);
    -moz-transform: translateZ(158px);
    transform: translateZ(158px);
}


/*后面样式*/
.after {
    margin-top: -154px;
    margin-left: -154px;
    border: 5px solid #000000;
    -webkit-transform: translateZ(-158px);
    -moz-transform: translateZ(-158px);
    transform: translateZ(-158px);
}


/*左面样式*/
.left {
    margin-top: -154px;
    margin-left: -154px;
    border: 5px solid #000000;
    -webkit-transform: rotateY(90deg) translateZ(158px);
    -moz-transform: rotateY(90deg) translateZ(158px);
    transform: rotateY(90deg) translateZ(158px);
}


/*右面样式*/
.right {
    margin-top: -154px;
    margin-left: -154px;
    border: 5px solid #000000;
    -webkit-transform: rotateY(90deg) translateZ(-158px);
    -moz-transform: rotateY(90deg) translateZ(-158px);
    transform: rotateY(90deg) translateZ(-158px);
}


/*上面样式*/
.up {
    margin-top: -154px;
    margin-left: -154px;
    border: 5px solid #000000;
    -webkit-transform: rotateX(90deg) translateZ(158px);
    -moz-transform: rotateX(90deg) translateZ(158px);
    transform: rotateX(90deg) translateZ(158px);
}


/*下面样式*/
.down {
    margin-top: -154px;
    margin-left: -154px;
    border: 5px solid #000000;
    -webkit-transform: rotateX(90deg) translateZ(-158px);
    -moz-transform: rotateX(90deg) translateZ(-158px);
    transform: rotateX(90deg) translateZ(-158px);
}


/*各面9个小div样式*/
.front>div {
    height: 100px;
    width: 100px;
    background: #FF0000;
    border-radius: 10px;
}
.after>div {
    height: 100px;
    width: 100px;
    background: #FF8247;
    border-radius: 10px;
}
.left>div {
    height: 100px;
    width: 100px;
    background: #0000CD;
    border-radius: 10px;
}
.right>div {
    height: 100px;
    width: 100px;
    background: #00CD00;
    border-radius: 10px;
}
.up>div {
    height: 100px;
    width: 100px;
    background: #FFFF00;
    border-radius: 10px;
}
.down>div {
    height: 100px;
    width: 100px;
    background: #FFFFFF;
    border-radius: 10px;
}
.box0 {
    position: absolute;
    left: 2px;
    top: 2px;
}

.box1 {
    position: absolute;
    left: 104px;
    top: 2px;
}

.box2 {
    position: absolute;
    left: 206px;
    top: 2px;
}

.box3 {
    position: absolute;
    left: 2px;
    top: 104px;
}

.box4 {
    position: absolute;
    left: 104px;
    top: 104px;
}

.box5 {
    position: absolute;
    left: 206px;
    top: 104px;
}

.box6 {
    position: absolute;
    left: 2px;
    top: 206px;
}

.box7 {
    position: absolute;
    left: 104px;
    top: 206px;
}

.box8 {
    position: absolute;
    left: 206px;
    top: 206px;
}
</style>