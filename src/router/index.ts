import {createRouter,createWebHistory} from 'vue-router'
import music_pavilion from '@/components/music_pavilion.vue'
import my_music from '@/components/my_music.vue'
import open_platform from '@/components/open_platform.vue'
import client from '@/components/client.vue'
import vip from '@/components/vip.vue'

const router=createRouter(
    {
        history:createWebHistory(),
        routes:[
            {
                path:"/",
                redirect:"/music_pavilion"
            },
            {
                path:"/music_pavilion",
                component:music_pavilion,
                name:'music_pavilion'

            },
            {
                path:"/my_music",
                component:my_music,
                name:'my_music'
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