<template>
    <div class="frame">
        <div class="f1">图片</div>
        <div class="f2">碟名</div>
        <div class="f3">作者</div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"mv"
    }
</script>

<script lang="ts" setup>
    // const props=defineProps<{ num: number }>();

</script>

<style scoped>

    .frame{
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 150px;
        background-color: blue;
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