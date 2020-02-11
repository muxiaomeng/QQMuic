import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //用户信息 目前先写死
        userID:1023110828,
        userName:"TWOSIX",
        userImg:require("assets/img/user.png"),

        //播放音乐的信息
        song:{
            songname:"czk唱歌真的很好听",
            songmid:"004ENQPZ0dHaqy",
            songid:0,
            songurl:"",
            singer:"czk",
            album:{
                name:"风儿甚是喧嚣",
                mid:"001jmC6x1RMfh0"
            }
        },
        isplay:false   //当前是否有音乐播放
    },
    actions:{

    },
    mutations:{
        changeShowNav(state){
            state.isShowNav = !state.isShowNav
        },

        changeSong(state,payload){
            state.song = payload
            // state.songurl = payload.songurl
           /* state.songId = song.songId
            state.singer = song.singer
            state.songurl = song.songurl*/
        },
        changePlay(state,boolean){
            state.isplay = boolean
        }
    },
    getters:{
        getImg(state){
            return "https://y.gtimg.cn/music/photo_new/T002R300x300M000"+state.song.album.mid+".jpg?max_age=2592000"
        },
    },
    modules:{

    }
})
//3导出对象
export default store;