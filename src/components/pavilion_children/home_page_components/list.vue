<template>
    <div class="frame">
        <div class="f1">图片</div>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"list"
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
        width: 200px;
        height: 500px;
        background-color: red;
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


</style>