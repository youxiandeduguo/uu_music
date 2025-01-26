<template>

    <div >
        <el-container>
            <el-header class="myMusic-header">
                <div class="myMusic-header-avatar">
                    <el-container >
                        <el-header id="avatarUserContainer" height="140px">
                            <avatarUser></avatarUser>
                        </el-header>
                        <el-main id="userIdContainer">
                            <strong id="userIDdisplay">{{ userId }}</strong>
                            <div id='expandContainer'>
                                <div class="expandInfo">
                                    <div v-on:mouseenter="handle1Enter" v-on:mouseleave="handle1Leave" class="handle1Info">&nbsp&nbsp{{ follows }}</div>
                                    <label v-on:mouseenter="handle1Enter" v-on:mouseleave="handle1Leave">关注</label>
                                </div>
                                <div class="expandInfo">
                                    <div v-on:mouseenter="handle2Enter" v-on:mouseleave="handle2Leave" class="handle2Info">&nbsp&nbsp{{ fans }}</div>
                                    <label v-on:mouseenter="handle2Enter" v-on:mouseleave="handle2Leave">粉丝</label>
                                </div>
                            </div>
                        </el-main>
                        <el-footer id="my-music-footer">
                            <avatarFooter></avatarFooter>
                        </el-footer>
                    </el-container>
                </div>

            </el-header>
            <el-main>Main</el-main>
            <el-footer id="el-footer">
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>
<style scoped>
#el-footer{
    padding-left: 0;
    padding-right: 0;
    height:200px
}
.handle1Info{
    color:white;
}
.expandInfo{
    padding-left: 5px;
    padding-right: 5px;
    font-size: 15px;
    color:rgb(252, 250, 250);
    padding-bottom: 5px;
}
#expandContainer{
    height:30px;
    display: flex;
    justify-content: center;
}
#my-music-footer{
    padding: 0;
    height: 50px;
}
#userIdContainer{
    height: 130px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
#userIDdisplay{
    color: white;
    font-size: 35px;
    padding-top: 0;
    margin-top:0;
    text-align: center;
}

#avatarUserContainer{
    background-color: bisque;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.myMusic-header {
    background-color: rgb(52, 53, 53);
    background-size: cover;
    height: 320px;
    width: 100%;
    padding: 0;
}
</style>


<script lang="ts">
    export default {
        name:"my_music"
    }

</script>


<script lang="ts" setup>
    import avatarFooter from './avatar_footer.vue'
    import Footer from './my_music_footer.vue'
    import {ref} from 'vue'
    import avatarUser from './avatar.vue'
    let userId=ref("深水先生")
    let follows=ref(1)
    let fans=ref(0)
    let mouseenterColor=ref('white');
    function handle1Enter(){
        mouseenterColor.value='#31c27c';
        document.querySelector('.handle1Info').style.color=`${mouseenterColor.value}`
    }
    function handle2Enter(){
        mouseenterColor.value='#31c27c';
        document.querySelector('.handle2Info').style.color=`${mouseenterColor.value}`
    }
    function handle1Leave(){
        mouseenterColor.value='white';
        document.querySelector('.handle1Info').style.color=`${mouseenterColor.value}`
    }
    function handle2Leave(){
        mouseenterColor.value='white';
        document.querySelector('.handle2Info').style.color=`${mouseenterColor.value}`
    }
</script>

