<template>
    <div class="comment">歌单推荐</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="为你推荐" name="first">
            <div class="carousel-wrapper">
                <el-carousel indicator-position="outside" @change="handleChange">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <div class="music_frame" v-if="page_index===(item-1)">
                            <songlist :num="(item-1)*5+0"></songlist>
                            <songlist :num="(item-1)*5+1"></songlist>
                            <songlist :num="(item-1)*5+2"></songlist>
                            <songlist :num="(item-1)*5+3"></songlist>
                            <songlist :num="(item-1)*5+4"></songlist>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-tab-pane>
        <el-tab-pane label="粤语" name="second">粤语</el-tab-pane>
        <el-tab-pane label="KTV热歌" name="third">KTV热歌</el-tab-pane>
        <el-tab-pane label="网络歌曲" name="fourth">网络歌曲</el-tab-pane>
        <el-tab-pane label="官方歌单" name="fifth">官方歌单</el-tab-pane>
        <el-tab-pane label="情歌" name="sixth">情歌</el-tab-pane>
    </el-tabs>
</template>


<script lang="ts">
    import type { TabsPaneContext } from 'element-plus'
    import { ref } from 'vue';
    import songlist from './home_page_songlist/songlist.vue';
    export default  {
        name:"home_page"
    }
</script>

<script lang="ts" setup>
    const activeName = ref('first')
    let page_index=ref(0)

    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
    }
    let page_num=ref(0)
    const handleChange=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index.value = cur_index;
    }
</script>

<style scoped>
    .el-carousel{
        height: 500px;
    }

    .music_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        align-items: stretch;

    }
    :deep(.el-tabs__nav-wrap::after) {
        display: none;
        
    }
    .el-tab-pane{
        display:flex;
        width: 1200px;
        height: auto;
        flex-direction: column;
    }

    :deep(.el-carousel__item) {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-items: stretch;
        height: auto;
    }



    :deep(.el-tabs__item:hover) {
        color: #31c27c;
    }
    :deep(.el-tabs__active-bar) {
        display: none;
    }
    :deep(.el-tabs__item.is-active) {
        color: #31c27c;
        
        
    }
    :deep(.el-tabs__nav) {
        display: flex;
        gap: 20px;
        justify-content: center;
        

    }

    :deep(.el-tabs__nav-wrap) {
        display: flex;
        justify-content: center;
    }

    :deep(.el-carousel__indicators--horizontal) {
        margin-top: 120px;
    }
    :deep(.el-carousel__arrow) {
        font-size: 160px;
        margin: -10px;
        width: 160px;
        height: 160px;  /* 增大箭头的大小，调整为你需要的值 */
        color: #333;
        top: 30%;      /* 设置箭头的颜色为深色，可以根据需要调整 */
    }
    
    .el-carousel__item h3 {
        display: flex;
        color: black;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .comment{
        font-size: 30px;
    }

</style>