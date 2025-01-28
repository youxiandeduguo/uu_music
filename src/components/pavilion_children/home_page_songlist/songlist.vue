<template>
    <div class="frame">
        <img class="image" :src="imgsrc" :alt="imgsrc">
        <div class="f1">{{content[num].text}}</div>
        <div class="f2">播放量：{{content[num].count}}万</div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"songlist"
    }
</script>

<script lang="ts" setup>
    const props=defineProps<{ num: number }>();
    let imgsrc=ref("/img/songlist/"+props.num+".jpg")
    console.log("页码是"+props.num)
    let content=[
        {text:'放学后的旋律',count:118.9},{text:'校园喧嚣之中',count:24.9},{text:'课后甜点时光',count:1393.4},{text:'图书馆的轻声呢喃',count:13.0},{text:'紧急任务！全员集合',count:1154.6},
        {text:'枪火中的交响曲',count:13.4},{text:'胜利的号角',count:1563.4},{text:'午夜行动计划',count:124.5},{text:'对抗阴谋的序章',count:998.2},{text:'治愈的咖啡馆时光',count:24.0},
        {text:'花开之时，与你共舞',count:9.8},{text:'温暖的学园之风',count:85.5},{text:'月光下的安眠曲',count:57.9},{text:'蓝天与白云的歌',count:147.3},{text:'暗影中的真相',count:498.7},
        {text:'深夜都市传说',count:55.4},{text:'谜团的旋律',count:50.0},{text:'追踪失落的足迹',count:9.8},{text:'危险中的微光',count:11.7},{text:'不灭的学园羁绊',count:10.3},
        {text:'与你相伴的每一天',count:778.6},{text:'笑容的温度',count:16.9},{text:'朋友之间的承诺',count:44.7},{text:'永远的青空回忆',count:90.6},{text:'迟到少女的狂奔',count:15.5},
    ]
</script>

<style scoped>

    .frame{
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: auto;
    }
    .image{
        width: 90%;
        height: 300px;
        object-fit: cover; 
        object-position: center; 
    }
    .f1{
        width: 100%;
        display: flex; 
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        height: 30px;
        text-align: left;
        padding-left: 30px;
        font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        font-size: 14px;
        
    }
    .f2{
        width: 100%;
        display: flex; 
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        height: 30px;
        text-align: left;
        padding-left: 30px;
        font-family:  poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        color: rgb(153, 153, 153);
    }

</style>