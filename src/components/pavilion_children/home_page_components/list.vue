<template>
    <div  :class="'frame'+props.num">
        <div class="f1">巅峰榜</div>
        <div class="f2">{{ rank_name[props.num] }}</div>
        <div class="f3">-------</div>
        <div class="f4">
            <div>1 {{songlist[props.num]["rank1"]["title"]}}</div>
            <div>&nbsp;&nbsp;&nbsp;{{songlist[props.num]["rank1"]["artist"]}}</div>
        </div>
        <div class="f4">
            <div>2 {{songlist[props.num]["rank2"]["title"]}}</div>
            <div>&nbsp;&nbsp;&nbsp;{{songlist[props.num]["rank2"]["artist"]}}</div>
        </div>
        <div class="f4">
            <div>3 {{songlist[props.num]["rank3"]["title"]}}</div>
            <div>&nbsp;&nbsp;&nbsp;{{songlist[props.num]["rank3"]["artist"]}}</div>
        </div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"list"
    }
</script>

<script lang="ts" setup>
    const props=defineProps<{ num: number }>();

    let rank_name=["热歌","新歌","流行指数","欧美","韩国"]

    let songlist=[
        {
            "rank1":{"title": "窗外的雨滴", "artist": "凪咲"},
            "rank2":{"title": "电波食堂", "artist": "响"},
            "rank3":{"title": "星光幻想", "artist": "阿罗娜"},
        },
        {
            "rank1":{"title": "樱花微风", "artist": "桃香"},
            "rank2":{"title": "屋顶上的夕阳", "artist": "葵"},
            "rank3":{"title": "布丁大危机！", "artist": "芹香"},
        },
        {
            "rank1":{"title": "子弹代码：404", "artist": "伊吕波"},
            "rank2":{"title": "最终模拟战", "artist": "玲"},
            "rank3":{"title": "战场之夜", "artist": "鹤城"},
        },
        {
            "rank1":{"title": "禁忌的战术指令", "artist": "七叶"},
            "rank2":{"title": "目标锁定，开火！", "artist": "露奈"},
            "rank3":{"title": "无限红区", "artist": "英露"},
        },
        {
            "rank1":{"title": "数据风暴", "artist": "理子"},
            "rank2":{"title": "生存演习 72 小时", "artist": "千夏"},
            "rank3":{"title": "破碎的战术信号", "artist": "和纱"},
        }
    ]
</script>


<style scoped>

    .frame0{
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        width: 210px;
        height: 400px;
        background-image: url(/img/list_background.jpg);
    }
    .frame1{
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        width: 210px;
        height: 400px;
        background-image: url(/img/list_background.jpg);
    }
    .frame2{
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        width: 210px;
        height: 400px;
        background-image: url(/img/list_background.jpg);
        background-position-x:-224px;
        background-position-y:0;
    }
    .frame3{
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        width: 210px;
        height: 400px;
        background-image: url(/img/list_background.jpg);
        background-position-x:-448px;
        background-position-y:0;
    }
    .frame4{
        display: flex; 
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
        width: 210px;
        height: 400px;
        background-image: url(/img/list_background.jpg);
        background-position-x:-672px;
        background-position-y:0;
    }


    .f1{
        font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        font-size: 22px;
        color: rgb(255, 255, 255);
        height: 35px;
        
    }
    .f2{
        font-family: pin, Tahoma, Arial, 微软雅黑, sans-serif;
        font-size: 26px;
        color: rgb(255, 255, 255);
        height: 70px;
    }
    .f3{
        color:  rgb(255, 255, 255);
        font-size: 20px;
    }
    .f4{
        height: 80px;
        padding-left:50px ;
        width: 100%;
        font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        font-size: 14px;
        color:rgb(255, 255, 255);
        display: flex; 
        flex-direction: column;
        align-items: left;
    }


</style>