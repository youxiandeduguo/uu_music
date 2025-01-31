<template>
    <div class="comment">歌单推荐</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="为你推荐" name="first">
            <div class="carousel-wrapper">
                <el-carousel class="songlist_car" indicator-position="outside" @change="handleChange" :autoplay="false" :interval="9999999" height="auto">
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


    <div class="comment">新歌首发</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="为你推荐" name="first">
            <div class="carousel-wrapper">
                <el-carousel class="song_car" indicator-position="outside" @change="handleChange2" :autoplay="false" :interval="9999999" height="auto">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <div class="song_frame" v-if="page_index2===(item-1)">
                            <song></song>
                            <song></song>
                            <song></song>
                            <song></song>
                            <song></song>
                            <song></song>
                            <song></song>
                            <song></song>
                            <song></song>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-tab-pane>
        <el-tab-pane label="最新" name="second">最新</el-tab-pane>
        <el-tab-pane label="内地" name="third">内地</el-tab-pane>
        <el-tab-pane label="港台" name="fourth">港台</el-tab-pane>
        <el-tab-pane label="欧美" name="fifth">欧美</el-tab-pane>
        <el-tab-pane label="韩国" name="sixth">韩国</el-tab-pane>
        <el-tab-pane label="日本" name="seventh">日本</el-tab-pane>
    </el-tabs>



    <div class="comment">精彩推荐</div>

    <el-carousel class="recommend_car" indicator-position="outside" @change="handleChange3" :autoplay="false" :interval="9999999" height="auto">
        <el-carousel-item v-for="item in 1" :key="item" class="recommend_item">
            <div class="recommend_frame" v-if="page_index3===(item-1)">
                <recommend></recommend>
                <recommend></recommend>
            </div>
        </el-carousel-item>
    </el-carousel>


    <div class="comment">新碟首发</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="为你推荐" name="first">
            <div class="carousel-wrapper">
                <el-carousel class="disc_car" indicator-position="outside" @change="handleChange4" :autoplay="false" :interval="9999999" height="auto">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <div class="disc_frame" v-if="page_index4===(item-1)">
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                            <disc></disc>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-tab-pane>
        <el-tab-pane label="内地" name="third">内地</el-tab-pane>
        <el-tab-pane label="港台" name="fourth">港台</el-tab-pane>
        <el-tab-pane label="欧美" name="fifth">欧美</el-tab-pane>
        <el-tab-pane label="韩国" name="sixth">韩国</el-tab-pane>
        <el-tab-pane label="日本" name="seventh">日本</el-tab-pane>
    </el-tabs>


    <div class="comment">排行榜</div>

    <el-carousel class="list_car" indicator-position="outside" @change="handleChange5" :autoplay="false" :interval="9999999" height="auto">
        <el-carousel-item v-for="item in 1" :key="item">
            <div class="list_frame" v-if="page_index5===(item-1)">
                <list></list>
                <list></list>
                <list></list>
                <list></list>
                <list></list>
            </div>
        </el-carousel-item>
    </el-carousel>



    <div class="comment">MV</div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="为你推荐" name="first">
            <div class="carousel-wrapper">
                <el-carousel class="mv_car" indicator-position="outside" @change="handleChange6" :autoplay="false" :interval="9999999" height="auto">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <div class="mv_frame" v-if="page_index6===(item-1)">
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                            <mv></mv>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-tab-pane>
        <el-tab-pane label="精选" name="third">精选</el-tab-pane>
        <el-tab-pane label="内地" name="third">内地</el-tab-pane>
        <el-tab-pane label="港台" name="fourth">港台</el-tab-pane>
        <el-tab-pane label="欧美" name="fifth">欧美</el-tab-pane>
        <el-tab-pane label="韩国" name="sixth">韩国</el-tab-pane>
        <el-tab-pane label="日本" name="seventh">日本</el-tab-pane>
    </el-tabs>


    <div class="tail"></div>

</template>


<script lang="ts">
    import type { TabsPaneContext } from 'element-plus'
    import { ref } from 'vue';
    import songlist from './home_page_components/songlist.vue';
    import song from './home_page_components/song.vue';
    import recommend from './home_page_components/recommend.vue';
    import disc from './home_page_components/disc.vue';
    import list from './home_page_components/list.vue';
    import mv from './home_page_components/mv.vue';
    import { List } from '@element-plus/icons-vue';
    export default  {
        name:"home_page"
    }
</script>

<script lang="ts" setup>
    const activeName = ref('first')
    let page_index=ref(0)
    let page_index2=ref(0)
    let page_index3=ref(0)
    let page_index4=ref(0)
    let page_index5=ref(0)
    let page_index6=ref(0)

    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
    }
    const handleChange=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index.value = cur_index;
    }
    const handleChange2=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index2.value = cur_index;
    }
    const handleChange3=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index3.value = cur_index;
    }
    const handleChange4=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index4.value = cur_index;
    }
    const handleChange5=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index5.value = cur_index;
    }
    const handleChange6=(cur_index:number,prev_index:number)=>{
        console.log(`当前索引: ${cur_index}, 上一个索引: ${prev_index}`);
        page_index6.value = cur_index;
    }


</script>

<style scoped>
    .tail{
        width: 100%;
        height: 500px;
        background-color: black;
    }
    .el-carousel{
        height: auto;
    }
    
    .music_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: row;

    }
    .disc_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
    }
    .mv_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
    }
    .recommend_car{
        width: 1200px;

    }
    .list_car{
        width: 1200px;

    }
    .disc_car{
        width: 1200px;
    }
    .mv_car{
        width: 1200px;
    }
    .recommend_frame{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    .list_frame{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        justify-content: space-evenly;
        gap: 10px;
    }
    .song_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        gap: 1px;

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

    :deep(.songlist_car) .el-carousel__indicators--horizontal {
    margin-top: 80px;
    }
    :deep(.song_car) .el-carousel__indicators--horizontal {
        margin-top: 20px;
    }
    :deep(.recommend_car) .el-carousel__indicators--horizontal {
        margin-top: 20px;
    }
    :deep(.el-carousel__arrow) {
        font-size: 160px;
        margin: -10px;
        width: 160px;
        height: 160px; 
        color: #333;
        top: 50%;      
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