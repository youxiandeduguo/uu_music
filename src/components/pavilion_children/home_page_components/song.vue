<template>
    <div class="frame">
        <div class="f1">图片</div>
        <div class="f2">歌名、歌手</div>
        <div class="f3">时长</div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"song"
    }
</script>

<script lang="ts" setup>
    // const props=defineProps<{ num: number }>();
</script>

<style scoped>

    .frame{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 300px;
        height: 90px;
        background-color: red;
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