<template>
    <div>
        <div id="PlayListSongs">
            <div id="listOp">
                <div class="play">
                    <img src="~assets/img/playList/play.svg">
                    <span class="playCenter">全部播放</span>
                    <span>共{{songlist.length}}首</span>
                </div>
                <img src="~assets/img/playList/download.svg" class="download">
                <img src="~assets/img/playList/more2.svg" >
            </div>
        </div>
        <div class="song" v-for="(item,index) in songlist">
            <div class="songInfo" @click="playsong(item.mid,'C400'+item.mid+'.m4a',item)">
                <div>{{item.name}}</div>
                <div class="GrayFont">{{item.singer[0].name}}·{{item.album.name}}</div>
            </div>
            <img  class="moreImg" src="~assets/img/playList/more3.svg" alt="">
        </div>
    </div>
</template>

<script>
    import {getSongToken} from "network"
    export default {
        name: "PlayListSongs",
        props:{
            songlist:{
                type:Array,
                default:[]
            }
        },
        data(){
          return{
              songurl:null
          }
        },
        methods:{
            playsong(songmid,filename,item){
                getSongToken(songmid,filename).then(res=>{
                    const vkey = res.data.items[0].vkey
                    const songurl = "http://ws.stream.qqmusic.qq.com/"+filename+"?"+"fromtag=0&guid=1023110828&vkey="+vkey
                    const payload = {
                        songname:item.name,
                        songmid:item.mid,
                        songid:item.id,
                        songurl,
                        singer:item.singer[0].name,
                        album:{
                            name:item.album.name,
                            mid:item.album.pmid
                        }
                    }
                    this.$store.commit("changeSong",payload)
                    this.$store.commit("changePlay",true)
                })

            }
        }
    }
</script>

<style scoped>
    /*全部播放 下载 更多的操作*/
    #listOp {
        border-bottom: 1px solid #e4e4e4;
        display: flex;
        padding: 10px 5%;
        background: white;
    }
    #listOp .play{
        flex: 1;
        display: flex;
        align-items: center;
    }
    span:nth-child(1){
        font-size: 20px;
    }
    #listOp img{
        height: 24px;
        width: 24px;
    }
    .playCenter{
        margin: 0 10px;
    }
    .download{
        margin-right: 20px;
    }

    .song{
        display: flex;
        align-items: center;
        width: 90%;
        margin: 10px auto;
        background: white;
        border-bottom: 1px solid #e4e4e4;
    }
    .songInfo{
        flex: 1;
    }
    .songInfo div{
        width: 80vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .moreImg{
        width: 16px;
        height: 16px;
    }

</style>