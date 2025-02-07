<template>
    
    <div style="display: flex; flex-direction: row; gap: 20px;">
        <button @click="gettest">发送请求</button>
        <div>{{test}}</div>
    </div>
    <button @click="openNewPage" target="_blank">播放</button>
    
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


    <div class="tail">
        <div>下载UU音乐客户端</div>
        <div class="icon_frame">
            <div class="icon_item">
                <svg t="1738498460999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2281" width="80" height="80"><path d="M419.84 540.16v400.384L0 883.2v-342.528h419.84z m0-457.216v405.504H0V140.8l419.84-57.856z m604.16 457.216V1024L465.92 947.2v-406.528h558.08zM1024 0v488.448H465.92V76.8L1024 0z" fill="#040000" p-id="2282"></path></svg>
                <div>PC版</div>
            </div>
            <div class="icon_item"> 
                <svg t="1738496596027" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1679" width="80" height="80"><path d="M960 108.8c35.2 0 64 28.8 64 64v518.4c0 35.2-28.8 64-64 64H646.4l57.6 115.2c6.4 16 0 35.2-12.8 41.6-3.2 3.2-9.6 3.2-12.8 3.2H348.8c-19.2 0-32-12.8-32-32 0-6.4 0-9.6 3.2-12.8l57.6-115.2H64c-35.2 0-64-28.8-64-64V172.8c0-35.2 28.8-64 64-64h896zM598.4 294.4c-35.2-3.2-67.2 19.2-86.4 19.2-16 0-41.6-19.2-70.4-19.2-35.2 0-70.4 22.4-89.6 54.4-38.4 64-9.6 163.2 25.6 217.6l6.4 9.6c16 22.4 35.2 48 60.8 44.8 28.8 0 38.4-19.2 70.4-19.2 32 0 41.6 19.2 70.4 16 28.8 0 48-25.6 67.2-54.4s28.8-60.8 28.8-60.8h-3.2C665.6 496 624 473.6 624 416c0-54.4 44.8-80 48-83.2-19.2-32-57.6-38.4-73.6-38.4z m0-105.6c-22.4 0-48 16-64 32-12.8 16-25.6 41.6-22.4 67.2 25.6 0 48-12.8 64-32 12.8-16 25.6-41.6 22.4-67.2z" fill="#888888" p-id="1680"></path></svg>
                <div>Mac版</div>
            </div>
            <div class="icon_item">
                <svg t="1738496625043" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2771" width="80" height="80"><path d="M615.878882 177.494507l42.303478-61.521169c1.811252-2.619664 1.146103-6.252401-1.473561-8.063653l-1.054005-0.726547c-2.619664-1.821485-6.231935-1.146103-8.043187 1.473561l-43.521213 63.291488c-28.427446-12.361539-60.139705-19.268856-93.601818-19.268856-31.753191 0-61.950957 6.221702-89.232301 17.426905l-41.587164-60.477396c-1.801019-2.619664-5.423523-3.284813-8.043187-1.473561l-1.054005 0.726547c-2.619664 1.811252-3.284813 5.443989-1.483794 8.073886l40.215934 58.461483c-63.23009 30.300097-108.664885 88.075964-117.915573 156.299789l438.20018 0C720.552873 265.017886 676.919097 208.296023 615.878882 177.494507zM418.217057 265.621637c-12.054547 0-21.837354-9.813506-21.837354-21.908986 0-12.095479 9.782807-21.898753 21.837354-21.898753 12.06478 0 21.837354 9.803273 21.837354 21.898753C440.054411 255.80813 430.281837 265.621637 418.217057 265.621637zM606.710059 265.621637c-12.054547 0-21.837354-9.813506-21.837354-21.908986 0-12.095479 9.782807-21.898753 21.837354-21.898753 12.06478 0 21.837354 9.803273 21.837354 21.898753C628.547413 255.80813 618.774839 265.621637 606.710059 265.621637z" p-id="2772"></path><path d="M260.904195 419.506423l0 179.446975c0 30.760584-19.596314 55.933917-43.562145 55.933917l-9.680477 0c-23.955598 0-43.562145-25.173332-43.562145-55.933917l0-179.446975c0-30.760584 19.606547-55.923684 43.562145-55.923684l9.680477 0C241.307881 363.582739 260.904195 388.745838 260.904195 419.506423z" p-id="2773"></path><path d="M859.896478 420.570661l0 179.446975c0 30.770817-19.596314 55.933917-43.562145 55.933917l-9.680477 0c-23.955598 0-43.562145-25.163099-43.562145-55.933917l0-179.446975c0-30.760584 19.606547-55.923684 43.562145-55.923684l9.680477 0C840.300164 364.646977 859.896478 389.810077 859.896478 420.570661z" p-id="2774"></path><path d="M732.934878 360.830045l0 354.074178c0 24.579815-20.046568 44.687782-44.554752 44.687782l-36.746926 0 0 102.320387c0 30.760584-19.606547 55.923684-43.562145 55.923684l-9.680477 0c-23.955598 0-43.562145-25.163099-43.562145-55.923684l0-102.320387-81.864496 0 0 101.143585c0 30.760584-19.596314 55.933917-43.562145 55.933917l-9.680477 0c-23.955598 0-43.562145-25.173332-43.562145-55.933917l0-101.143585-40.062438 0c-24.508183 0-44.554752-20.107967-44.554752-44.687782l0-354.074178L732.934878 360.830045z" p-id="2775"></path></svg>
                <div>Android版</div>
            </div>
            <div class="icon_item">
                <svg t="1738496649043" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3798" width="80" height="80"><path d="M649.78554 161.505697C707.566573 88.168232 694.232489 8.163725 689.787794 1.496683c-6.667042-6.667042-93.338592 6.667042-153.341972 86.671549-53.336338 73.337465-53.336338 153.341972-46.669296 160.009014C496.443568 254.844289 583.115118 248.177247 649.78554 161.505697L649.78554 161.505697zM649.78554 161.505697" p-id="3799"></path><path d="M794.238123 534.860064c-6.667042-106.672676 93.338592-173.343099 113.339719-186.677183l0-6.667042c0 0-86.671549-106.672676-213.345353-100.005634-80.004507 6.667042-120.006761 46.669296-173.343099 46.669296-66.670423 0-126.673803-46.669296-200.011268-46.669296-60.00338 0-233.346479 53.336338-246.680564 280.015775C63.085821 748.205417 223.094835 959.328422 283.098216 999.330676c60.00338 40.002254 100.005634 26.668169 166.676057-6.667042 33.335211-20.001127 140.007888-26.668169 200.011268 13.334085 73.337465 26.668169 180.010141 6.667042 300.016902-260.014648C934.24601 748.205417 800.905165 714.870205 794.238123 534.860064L794.238123 534.860064zM794.238123 534.860064" p-id="3800"></path></svg>
                <div>iPhone版</div>
            </div>
        </div>


    </div>

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
    import PC_icon from '/svg/PC.svg'
    import  axios  from 'axios';
import { dataType } from 'element-plus/es/components/table-v2/src/common.mjs';
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

    let test=ref('')
    async function gettest(){

        try {
            let {data} = await axios.get('http://127.0.0.1:8000/test/');
            test.value=data
            console.log(test.value)
        } catch (error) {
            const err = error
            console.log(err)
        }

    }




    const openNewPage=()=>{
        window.open('/player', '_blank');
    }

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
        display: flex;
        flex-direction: column;
        font-family:poppin, Tahoma, Arial, 微软雅黑, sans-serif;
        color: rgb(153, 153, 153);
        width: calc(100% - 200px);
        height: 200px;
        background-color: rgb(53, 53, 53);
        font-size: 15px;
        font-weight: 400;
        padding: 100px 100px;
        gap: 20px;
    }

    .el-carousel{
        height: auto;
    }
    .icon_frame{
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .icon_item{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .music_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: row;
        padding: 0;

    }
    .disc_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0;
    }

    .mv_frame{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0;
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
        gap: 40px;
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
        height: auto;
        gap: 5px 20px;

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