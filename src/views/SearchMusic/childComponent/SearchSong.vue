<template>
    <Scroll class="scroll" ref="scroll" @pullingUp="pullingUp">
        <div v-for="(item,index) in songlist" class="song">
            <div class="songInfo" @click="playsong(item.songmid,'C400'+item.songmid+'.m4a',item)">
                <div>{{item.songname}}</div>
                <div class="GrayFont">{{item.singer[0].name}}·{{item.albumname}}</div>
            </div>
            <img src="~assets/img/playList/more3.svg" alt="" class="moreImg">
        </div>
    </Scroll>
</template>

<script>
    import Scroll from "components/common/Scroll";
    import {getSongToken} from "network"
    export default {
        name: "SearchSong",
        props:{
            songlist:{
                type:Array,
                default: []
            }
        },
        methods:{
            pullingUp(){
                this.$emit("pullingUp")
            },
            refresh(){
                //这里finishPuLLUp以及下面的refrssh方法是封装过的
                //由于网络延迟存在，当下拉加载时，可能会导致scroll高度与实际高度不一致
                // 这时候我们要手动刷新，当然不提倡下面的刷新，muxiaomeng偷懒了
                setTimeout( ()=> {
                    this.$refs.scroll.finishPullUp()
                    this.$refs.scroll.refresh()
                },300)
            },
            playsong(songmid,filename,item){
                getSongToken(songmid,filename).then(res=>{
                    const vkey = res.data.items[0].vkey
                    const songurl = "http://ws.stream.qqmusic.qq.com/"+filename+"?"+"fromtag=0&guid=1023110828&vkey="+vkey
                    const payload = {
                        songname:item.songname,
                        songmid:item.songmid,
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
        },
        components:{
            Scroll
        }
    }
</script>

<style scoped>
    .scroll{
        height: calc(100vh - 25px - 62px);
    }
    /*搜索到的歌曲样式，和歌单歌曲样式有点想同，可以考虑优化一下*/
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
    .moreImg{
        width: 16px;
        height: 16px;
    }
</style>