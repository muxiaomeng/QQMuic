<!--对应QQ音乐更多版本-->
<template>
    <div class="othersong" v-show="item.grp.length>0">
        <div v-show="isShow">
            <div v-for="song in item.grp">
                <div class="song">
                    <div class="songInfo" @click="playsong(song.songmid,'C400'+song.songmid+'.m4a',song)">
                        <div>{{song.songname}}</div>
                        <div class="GrayFont">{{song.singer[0].name}}·{{song.albumname}}</div>
                    </div>
                    <img src="~assets/img/playList/more3.svg" alt="" class="moreImg">
                </div>
            </div>
        </div>
        <div class="more GrayFont" v-show="!isShow" @click="showsong(true)">
            更多版本 <img src="~assets/img/searchMusic/show.svg" alt="">
        </div>
        <div class="more GrayFont" v-show="isShow" @click="showsong(false)">
            收起更多版本 <img class="hiddenImg" src="~assets/img/searchMusic/show.svg" alt="">
        </div>
    </div>
</template>

<script>
    import {getSongToken} from "network"
    export default {
        name: "SearchOther",
        props:{
          item:{
              type:Object,
              default:{}
          }
        },
        data(){
            return {
                isShow:false
            }
        },
        methods:{
            showsong(bool){
                this.isShow = bool
            },
            playsong(songmid,filename,item){
                getSongToken(songmid,filename).then(res=>{
                    const vkey = res.data.items[0].vkey
                    const songurl = "http://ws.stream.qqmusic.qq.com/"+filename+"?"+"fromtag=0&guid=1023110828&vkey="+vkey
                    const payload = {
                        songname:item.songname,
                        songmid:item.songmid,
                        songid:item.songid,
                        songurl,
                        album:{
                            name:item.albumname,
                            mid:item.albummid
                        }
                    }
                    this.$store.commit("changeSong",payload)
                    this.$store.commit("changePlay",true)
                })
            },
        }
    }
</script>

<style scoped>

    .song{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 10px auto;
        background: white;
        border-bottom: 1px solid #C1C1C1;
    }
    .song .songInfo{
        flex: 1;
    }
    .songInfo>div{
        width: 80vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .moreImg{
        width: 16px;
        height: 16px;
    }
    /*其他版本的歌曲*/
    .othersong img{
        width: 16px;
        height: 16px;
    }
    .more{
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
    }
    .hiddenImg{
        transform: rotate(180deg);
    }
</style>