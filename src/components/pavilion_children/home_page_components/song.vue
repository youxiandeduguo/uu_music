<template>
    <div class="frame">
        <img class="f1" :src="imgsrc" :alt="imgsrc"></img>
        <div class="f2">
            <div class="song_name">{{ content[props.num]["title"] }}</div>
            <div class="songer">{{ content[props.num]["artist"] }}</div>
        </div>
        <div class="f3">{{ content[props.num]["time"] }}</div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"song"
    }
</script>

<script lang="ts" setup>
    const props=defineProps<{ num: number }>();
    let imgsrc=ref("/img/new_song/"+props.num+".jpg")

    let content = [
    {"title": "放学后的星空笔记", "artist": "星野","time":"3:41"},
    {"title": "秘密放学后", "artist": "吹雪","time":"3:48"},
    {"title": "甜蜜忧郁", "artist": "白子","time":"4:21"},
    {"title": "樱花微风", "artist": "桃香","time":"3:55"},
    {"title": "屋顶上的夕阳", "artist": "葵","time":"3:33"},
    {"title": "布丁大危机！", "artist": "芹香","time":"4:41"},
    {"title": "窗外的雨滴", "artist": "凪咲","time":"3:46"},
    {"title": "电波食堂", "artist": "响","time":"3:51"},
    {"title": "星光幻想", "artist": "阿罗娜","time":"4:41"},
    {"title": "作业请等等！", "artist": "优香","time":"3:43"},
    
    {"title": "子弹代码：404", "artist": "伊吕波","time":"4:01"},
    {"title": "最终模拟战", "artist": "玲","time":"3:59"},
    {"title": "战场之夜", "artist": "鹤城","time":"4:19"},
    {"title": "禁忌的战术指令", "artist": "七叶","time":"4:06"},
    {"title": "目标锁定，开火！", "artist": "露奈","time":"4:25"},
    {"title": "无限红区", "artist": "英露","time":"3:55"},
    {"title": "数据风暴", "artist": "理子","time":"3:53"},
    {"title": "生存演习 72 小时", "artist": "千夏","time":"3:57"},
    {"title": "破碎的战术信号", "artist": "和纱","time":"4:09"},
    {"title": "星海迷途", "artist": "朝霞","time":"4:01"},
    
    {"title": "数据流的彼岸", "artist": "小春","time":"3:55"},
    {"title": "Reboot: 新世界", "artist": "静香","time":"4:07"},
    {"title": "虚拟心跳", "artist": "风香","time":"4:11"},
    {"title": "霓虹回响", "artist": "千束","time":"3:56"},
    {"title": "天空中的量子波", "artist": "美琴","time":"3:55"},
    {"title": "ERROR//梦境重启", "artist": "柚子","time":"4:11"},
    {"title": "赛博星屑", "artist": "茉莉","time":"3:40"},
    {"title": "终端信号：∞", "artist": "小夜","time":"3:57"},
    {"title": "A.I.的孤独思考", "artist": "真希","time":"4:13"},
    {"title": "元宇宙的彼端", "artist": "美咲","time":"4:09"},
    
    {"title": "甜蜜午餐时光", "artist": "心音","time":"3:47"},
    {"title": "喵喵任务进行中！", "artist": "琉璃","time":"3:33"},
    {"title": "恋爱公式 x²+y²=💗", "artist": "阳菜","time":"3:52"},
    {"title": "午后奶茶旋律", "artist": "雫","time":"4:21"},
    {"title": "闪亮☆学院偶像", "artist": "音梦","time":"4:02"},
    {"title": "今天的社团活动！", "artist": "小葵","time":"3:41"},
    {"title": "心跳☆便利店", "artist": "柚月","time":"4:11"},
    {"title": "小小愿望便利贴", "artist": "真奈","time":"3:59"},
    {"title": "猫耳广播", "artist": "柚香","time":"3:57"},
    {"title": "糖果雨季", "artist": "美咲","time":"4:00"},
    
    {"title": "夜空下的秘密信件", "artist": "七海","time":"4:31"},
    {"title": "风吹过旧教室", "artist": "小悠","time":"3:51"},
    {"title": "未寄出的情书", "artist": "凉香","time":"4:35"},
    {"title": "星星眨眼的夜晚", "artist": "雪音","time":"4:25"},
    {"title": "雨后的彩虹之约", "artist": "葵","time":"3:56"}
]




</script>

<style scoped>

    .song_name{
        font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        color: #000000;
    }
    .songer{
        color: #999999;
    }
    .frame{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 340px;
        height: 90px;
    }
    .image{
        width: 90%;
        height: 300px;
        object-fit: cover; 
        object-position: center; 
    }
    .f1{

        object-fit: cover;
        width: 90px;
        height: 90px;
    }
    .f2{
        width: 200px;
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
    .f3{
        color:#999999;
    }
</style>