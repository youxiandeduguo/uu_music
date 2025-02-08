<template>
    <div class="frame">
        <img class="f1" :src="imgsrc" :alt="imgsrc"></img>
        <div class="f2">{{ mv[props.num]["title"] }}</div>
        <div class="f3">{{ mv[props.num]["author"]}}</div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"mv"
    }
</script>

<script lang="ts" setup>
    const props=defineProps<{ num: number }>();
    let imgsrc=ref("/img/new_song/"+props.num+".jpg")
    let mv = [
        {"title": "星光下的课后约定", "author": "星野"},
        {"title": "电波信号：青空频率", "author": "阿罗娜"},
        {"title": "战术人形的夜歌", "author": "七叶"},
        {"title": "霓虹街角的心跳", "author": "小春"},
        {"title": "午后奶茶与耳机", "author": "雫"},
        {"title": "校园偶像☆全明星", "author": "音梦"},
        {"title": "樱花飘落的日记", "author": "桃香"},
        {"title": "都市深夜的子弹节奏", "author": "伊吕波"},
        {"title": "无人知晓的战术数据", "author": "玲"},
        {"title": "失控的AI梦境", "author": "美琴"},
        
        {"title": "计算错乱的情感代码", "author": "柚子"},
        {"title": "破碎的终端信号", "author": "和纱"},
        {"title": "无限可能的蓝色奇迹", "author": "小夜"},
        {"title": "晴天前的微光", "author": "凉香"},
        {"title": "数值运算的恋爱方程式", "author": "阳菜"},
        {"title": "猫耳少女广播站", "author": "柚香"},
        {"title": "赛博朋克星轨", "author": "千束"},
        {"title": "雨后的彩虹之约", "author": "葵"},
        {"title": "星际列车的终点", "author": "朝霞"},
        {"title": "放学后的甜蜜危机", "author": "芹香"},
        
        {"title": "秘密教室的回忆录", "author": "吹雪"},
        {"title": "流星雨下的约定", "author": "七海"},
        {"title": "梦境通话：第零信号", "author": "茉莉"},
        {"title": "光之庭院的旋律", "author": "凪咲"},
        {"title": "ERROR//数据消失", "author": "真希"},
        {"title": "终焉战线的最后指令", "author": "英露"},
        {"title": "午后茶会的奇妙事件", "author": "真奈"},
        {"title": "心跳加速的便利店", "author": "柚月"},
        {"title": "校园风暴：放学后激战", "author": "优香"},
        {"title": "湛蓝海岸的夏日幻想", "author": "美咲"},
        
        {"title": "红色警报：作战指令", "author": "露奈"},
        {"title": "记忆丢失的作业", "author": "鹤城"},
        {"title": "遥远未来的留言", "author": "小悠"},
        {"title": "夜空中的信号灯", "author": "千夏"},
        {"title": "时间回溯的课表", "author": "静香"},
        {"title": "高维世界的呼唤", "author": "风香"},
        {"title": "夜晚都市的霓虹之梦", "author": "葵"},
        {"title": "关于那天的补习课", "author": "音梦"},
        {"title": "超时空校园回忆", "author": "美琴"},
        {"title": "子弹穿梭的轨迹", "author": "玲"},
        {"title": "湛蓝海岸的夏日幻想", "author": "美咲"},
    ]

</script>

<style scoped>

    .frame{
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 150px;
    }

    .f1{
        width: 100%;
        height: 120px;
        display: flex; 
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        text-align: left;
        padding-left: 30px;
        font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        font-size: 14px;
        object-fit: cover;
        
    }
    .f2{
        width: 100%;
        display: flex; 
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        text-align: left;
        padding-left: 30px;
        font-family:  poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        color: #000000;
        font-size: 14px;
    }
    .f3{
        width: 100%;
        display: flex; 
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        text-align: left;
        padding-left: 30px;
        font-family:  poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        color: #999999;
        font-size: 14px;
    }

</style>