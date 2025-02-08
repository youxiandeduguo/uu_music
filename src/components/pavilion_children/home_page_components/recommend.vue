<template>
    <div class="frame">
        <img class="f1" :src="imgsrc" :alt="imgsrc"></img>
    </div>
</template>


<script lang="ts">
    import { ref,watch } from 'vue'; 
    export default  {
        name:"recommend"
    }
</script>

<script lang="ts" setup>
    const props=defineProps<{ num: number }>();
    let imgsrc=ref("/img/new_song/"+props.num+".jpg")
</script>

<style scoped>

    .frame{
        display: flex; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 550px;
        height: 200px;
    }

    .f1{
        width: 800px;
        display: flex; 
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        height: 200px;
        text-align: left;
        padding-left: 30px;
        font-family: poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        font-size: 14px;
        object-fit: cover;

        
    }


</style>