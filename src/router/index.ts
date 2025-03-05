import {createRouter,createWebHistory} from 'vue-router'
import music_pavilion from '@/components/music_pavilion.vue'
import my_music from '@/components/my_music.vue'
import open_platform from '@/components/open_platform.vue'
import client from '@/components/client.vue'
import vip from '@/components/vip.vue'
import category_playlists from '@/components/pavilion_children/category_playlists.vue'
import charts from '@/components/pavilion_children/charts.vue'
import digital_album from '@/components/pavilion_children/digital_album.vue'
import home_page from '@/components/pavilion_children/home_page.vue'
import ladar from '@/components/pavilion_children/ladar.vue'
import mv from '@/components/pavilion_children/mv.vue'
import new_disc from '@/components/pavilion_children/new_disc.vue'
import singer from '@/components/pavilion_children/singer.vue'
import music_player from '@/components/pavilion_children/music_player.vue'
import userFavour from '@/pages/userFavour.vue'
import PlayLists from '@/pages/playList.vue'
import Song from '@/pages/song.vue'
import userFollowers from '@/pages/userFollowers.vue'
import UserFans from '@/pages/userFans.vue'
import UserVideo from '@/pages/userVideo.vue'
import UserPlayList from '@/pages/UserPlayList.vue'
import Albums from '@/pages/Albums.vue'
import UserMv from '@/pages/UserMv.vue'
import login from '@/components/login.vue'
const router=createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path:"",
                redirect:"/music_pavilion/home_page",
                meta: { nav: true },
            },
            {
                path:"/player",
                component:music_player,
                name:"player",
                meta: { nav: false },
            },
            {
                path:"/login",
                component: login,
            },
            {
                
                path:"/music_pavilion",
                component:music_pavilion,
                name:'music_pavilion',
                meta: { nav: true },
                children:[
                    {
                        path:"/music_pavilion",
                        redirect:"/music_pavilion/home_page",
                        meta: { nav: true },
                    },
                    
                    {
                        path:"home_page",
                        component:home_page,
                        name:'home_page',
                        meta: { nav: true },
                    },
                    {
                        path:"singer",
                        component:singer,
                        name:'singer',
                        meta: { nav: true },
                    },
                    {
                        path:"new_disc",
                        component:new_disc,
                        name:'new_disc',
                        meta: { nav: true },
                    },
                    {
                        path:"charts",
                        component:charts,
                        name:'charts',
                        meta: { nav: true },
                    },
                    {
                        path:"category_playlists",
                        component:category_playlists,
                        name:'category_playlists',
                        meta: { nav: true },
                    },
                    {
                        path:"ladar",
                        component:ladar,
                        name:'ladar',
                        meta: { nav: true },
                    },
                    {
                        path:"mv",
                        component:mv,
                        name:'mv',
                        meta: { nav: true },
                    },
                    {
                        path:"digital_album",
                        component:digital_album,
                        name:'digital_album',
                        meta: { nav: true },
                    },
                ]

            },
            {
                path:"/my_music",
                component:my_music,
                name:'my_music',
                meta: { nav: true },
                redirect:"/my_music/userfavour/song",
                children:[
                    {
                        name:"userfavour",
                        path:"userfavour",
                        component:userFavour,
                        meta: { nav: true },
                        children:[
                            {
                                name:"song",
                                path:"song",
                                component:Song,
                                meta: { nav: true },
                            },
                            {
                                name:'userplaylist',
                                path:"userplaylist",
                                component: UserPlayList,
                                meta: { nav: true },
                            },
                            {
                                name:'albums',
                                path:"albums",
                                component:Albums,
                                meta: { nav: true },
                            },
                            {
                                name:'usermv',
                                path:'usermv',
                                component:UserMv,
                                meta: { nav: true },
                            } 
                        ]
                    },
                    {
                        name:"playlists",
                        path:"PlayLists",
                        component:PlayLists,
                        meta: { nav: true },
                    },
                    {
                        name:"userfollowers",
                        path:"userfollowers",
                        component:userFollowers,
                        meta: { nav: true },
                    },
                    {
                        name:"userfans",
                        path:"userfans",
                        component:UserFans,
                        meta: { nav: true },
                    },
                    {
                        name:"uservideos",
                        path:"uservideos",
                        component:UserVideo,
                        meta: { nav: true },
                    }

                ]
            },
            {
                path:"/client",
                component:client,
                name:'client',
                meta: { nav: true },
            },
            {
                path:"/open_platform",
                component:open_platform,
                name:'open_platform',
                meta: { nav: true },
            },
            {
                path:"/vip",
                component:vip,
                name:'vip',
                meta: { nav: true },
            }
        ]
    }
)

export default router