<template>
<layout title="three.js实现VR全景">
    <div id="globalContainer" class="global-container"></div>
</layout>
</template>

<script setup lang="ts">
import Layout from '@/components/layout.vue';
import {PerspectiveCamera, Scene} from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import leftScene from '@/assets/images/global/scene/left.svg';
import rightScene from '@/assets/images/global/scene/right.svg';
import topScene from '@/assets/images/global/scene/top.svg';
import bottomScene from '@/assets/images/global/scene/bottom.svg';
import frontScene from '@/assets/images/global/scene/front.svg';
import backScene from '@/assets/images/global/scene/back.svg';
import { onMounted } from 'vue';

let camera:PerspectiveCamera|null = null;
let scene:Scene|null = null;
let renderer:CSS3DRenderer|null = null;
let controls:OrbitControls|null = null;


const init=()=> {
    const dom = document.getElementById('globalContainer') as HTMLElement;
    // 创建场景、相机
    camera = new PerspectiveCamera( 75, dom.offsetWidth / dom.offsetHeight, 1, 1000 );    
    camera.position.set(800,0,0); // 相机位置
    camera.lookAt(0,100,100);
   
    scene = new Scene();
   
    const sides = [
        {
            url: leftScene,
            position: [ - 1500, 0, 0 ],
            rotation: [ 0, Math.PI / 2, 0 ]
        },
        {
            url: rightScene,
            position: [ 1500, 0, 0 ],
            rotation: [ 0, - Math.PI / 2, 0 ]
        },
        {
            url: topScene,
            position: [ 0, 1500, 0 ],
            rotation: [ Math.PI / 2, 0, Math.PI ]
        },
        {
            url: bottomScene,
            position: [ 0, - 1500, 0 ],
            rotation: [ - Math.PI / 2, 0, Math.PI ]
        },
        {
            url: backScene,
            position: [ 0, 0, 1500 ],
            rotation: [ 0, Math.PI, 0 ]
        },
        {
            url: frontScene,
            position: [ 0, 0, - 1500 ],
            rotation: [ 0, 0, 0 ]
        }
    ];
    

    for ( let i = 0; i < sides.length; i ++ ) {
        let side = sides[ i ];
        // 创建 img 元素
        const element = document.createElement( 'img' );
        element.width = 3004; 
        element.src = side.url;
        // 利用 CSS3DObject 将 img 元素转为 3d 物体
        const object = new CSS3DObject( element );
        object.position.fromArray( side.position );
        object.rotation.fromArray( [side.rotation[0], side.rotation[1], side.rotation[2] ]);
        scene.add( object );
    }
    // 创建渲染器
    renderer = new CSS3DRenderer();
    renderer.setSize( dom.offsetWidth, dom.offsetHeight );
    dom.appendChild( renderer.domElement );
    // 创建交互控制器
    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true; 
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 1500;
    controls.maxPolarAngle = Math.PI / 2;
}

const animate=()=> {
    requestAnimationFrame( animate );
    controls?.update(); 
    renderer?.render( scene!, camera! );
}

onMounted(()=>{
    init();
    animate();
})
</script>

<style scoped>
.global-container{
    width: 1000px;
    height: 560px;
}
</style>
