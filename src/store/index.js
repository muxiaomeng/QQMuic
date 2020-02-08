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
            songurl:"",
            album:{
                name:"item.albumname",
                mid:"001jmC6x1RMfh0"
            }
        },
        isplay:false   //当前是否有音乐播放
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
    actions:{

    },
    getters:{

    },
    modules:{

    }
})
//3导出对象
export default store;