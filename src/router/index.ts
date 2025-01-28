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
import userFavour from '@/pages/userFavour.vue'
import PlayLists from '@/pages/playList.vue'
import Song from '@/pages/song.vue'
import userFollowers from '@/pages/userFollowers.vue'
import UserFans from '@/pages/userFans.vue'
import UserVideo from '@/pages/userVideo.vue'
import UserPlayList from '@/pages/UserPlayList.vue'
import Albums from '@/pages/Albums.vue'
import UserMv from '@/pages/UserMv.vue'

const router=createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path:"",
                redirect:"/music_pavilion/home_page"
            },
            {
                
                path:"/music_pavilion",
                component:music_pavilion,
                name:'music_pavilion',
                children:[
                    
                    {
                        path:"home_page",
                        component:home_page,
                        name:'home_page'
                    },
                    {
                        path:"singer",
                        component:singer,
                        name:'singer'
                    },
                    {
                        path:"new_disc",
                        component:new_disc,
                        name:'new_disc'
                    },
                    {
                        path:"charts",
                        component:charts,
                        name:'charts'
                    },
                    {
                        path:"category_playlists",
                        component:category_playlists,
                        name:'category_playlists'
                    },
                    {
                        path:"ladar",
                        component:ladar,
                        name:'ladar'
                    },
                    {
                        path:"mv",
                        component:mv,
                        name:'mv'
                    },
                    {
                        path:"digital_album",
                        component:digital_album,
                        name:'digital_album'
                    },
                ]

            },
            {
                path:"/my_music",
                component:my_music,
                name:'my_music',
                redirect:"/my_music/userfavour/song",
                children:[
                    {
                        name:"userfavour",
                        path:"userfavour",
                        component:userFavour,
                        children:[
                            {
                                name:"song",
                                path:"song",
                                component:Song,
                            },
                            {
                                name:'userplaylist',
                                path:"userplaylist",
                                component: UserPlayList
                            },
                            {
                                name:'albums',
                                path:"albums",
                                component:Albums
                            },
                            {
                                name:'usermv',
                                path:'usermv',
                                component:UserMv
                            } 
                        ]
                    },
                    {
                        name:"playlists",
                        path:"PlayLists",
                        component:PlayLists
                    },
                    {
                        name:"userfollowers",
                        path:"userfollowers",
                        component:userFollowers
                    },
                    {
                        name:"userfans",
                        path:"userfans",
                        component:UserFans
                    },
                    {
                        name:"uservideos",
                        path:"uservideos",
                        component:UserVideo
                    }

                ]
            },
            {
                path:"/client",
                component:client,
                name:'client'
            },
            {
                path:"/open_platform",
                component:open_platform,
                name:'open_platform'
            },
            {
                path:"/vip",
                component:vip,
                name:'vip'
            }
        ]
    }
)

export default router