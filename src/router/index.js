import Vue from "vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Discover = ()=>import('views/discover/Discover')
const Home = ()=>import('views/home/Home')
const MusicHall = ()=>import('views/musicHall/MusicHall')
const PlayList = ()=>import('views/playList/PlayList.vue')
const SearchMusic = ()=>import('views/SearchMusic/SearchMusic.vue')

const routes = [
    {
        path:"",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/discover",
        component:Discover
    },
    {
        path:"/musicHall",
        component:MusicHall
    },
    {
        path:"/playList",
        component:PlayList
    },
    {
        path:"/search",
        component:SearchMusic
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router