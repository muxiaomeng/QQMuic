<template>
    <div class="playmusic" :class="{topshow:isshow}">
        <div class="song"  v-show="!isshow">
            <audio
                    :src="$store.state.song.songurl"
                    autoplay
                    ref="audio"
                    @play="changePlay(true)"
                    @pause="changePlay(false)"
                    @timeupdate="updateLyric"
            ></audio>
            <div class="songInfo" @click="changeShow(true)">
                <img :class="{active:true,pause:!$store.state.isplay}" :src="$store.getters.getImg" alt="">
                <div>
                    <div class="songName">{{$store.state.song.songname}}</div>
                    <div class="songLyric GrayFont">{{word}}{{getLyric}}</div>
                </div>
            </div>
            <img v-show="!$store.state.isplay" src="~assets/img/playMusic/play.svg" @click="playMusic">
            <img v-show="$store.state.isplay" src="~assets/img/playMusic/pause.svg" @click="pauseMusic">
            <img class="moreImg" src="~assets/img/playMusic/more.svg" alt="">
        </div>

        <Song
                :lyric="lyric"
                :time-lyric="timeLyric"
                :trans="trans"
                :time-trans="timeTrans"
                :word="word"
                :current-time="currentTime"
                :duration="duration"
                v-show="isshow"
                @changeShow="changeShow"
                @playMusic="playMusic"
                @pauseMusic="pauseMusic"
                @changeTime="changeTime"
        ></Song>
    </div>
</template>

<script>
    import Song from "./Song";
    import {getLyric} from 'network'
    export default {
        name: "PlayMusic",
        data(){
            return {
                lyric:[],
                trans:[],
                timeLyric:[],
                timeTrans:[],
                word:"rua!!!!",//歌词
                img:"",
                isshow:false,
                duration:120,//歌曲时长
                currentTime:0//当前时间
            }
        },
        methods:{
            //改变播放状态
            changePlay(bool){
                this.$store.commit("changePlay",bool)
                if(bool){
                    this.playMusic()
                }
            },
            playMusic(){
                this.$refs.audio.play()
            },
            pauseMusic(){
                this.$refs.audio.pause()
            },
            //更新歌词
            updateLyric(){
                //更新时间
                this.duration = this.$refs.audio.duration
                let audio = this.$refs.audio
                let currentTime = audio.currentTime
                this.currentTime = audio.currentTime
                for(let i=0;i<this.timeLyric.length;i++){
                    if(this.timeLyric[i]>=currentTime){
                        // this.word = this.timeLyric[i]+this.lyric[i-1]+currentTime
                        this.word = this.lyric[i-1]
                        break
                    }
                }
            },
            //格式化歌词 参数： 歌词数组 存放歌词 存放时间
            formatLyric(lyric,sLyric,sTime){
                let timeReg = /\[(\d*:\d*\.\d*)\]/
                lyric = lyric.split("\n")
                lyric.forEach((str,index) =>{
                    //处理歌词
                    let lrc = str.split("]")[1];
                    if(lrc==undefined||lrc.length <= 1) return //排除空字符串
                    sLyric.push(lrc);
                    //处理时间，使之变成浮动数
                    let time = timeReg.exec(str)
                    if(time==null){
                        return
                    }
                    time = time[1].split(":")
                    let min = parseInt(time[0])*60
                    let sec = parseFloat(time[1]);
                    time = Number(min+sec).toFixed(2)//时间保留2位小数
                    time = parseFloat(time)//字符转为浮点数
                    sTime.push(time)
                })
            },
            changeShow(bool){
                this.isshow = bool
            },
            changeTime(time){
                this.$refs.audio.currentTime = time
            }
        },
        computed:{
            getLyric(){
                getLyric(this.$store.state.song.songid).then(res=>{
                    // console.log(res,this.$store.state.song.songid)
                    let lyric = res.lyric
                    let trans = res.trans
                    //清空原先歌词 和时间
                    this.lyric=[]
                    this.trans=[]
                    this.timeLyric=[]
                    this.timeTrans=[]
                    //可能有的歌没有歌词
                    if(lyric == undefined){
                        return
                    }
                    this.formatLyric(lyric,this.lyric,this.timeLyric)
                    //有翻译歌词的话
                    if(trans!=""){
                        this.formatLyric(trans,this.trans,this.timeTrans)
                    }
                })
            }
        },
        components:{
            Song
        },

    }
</script>

<style scoped>
    .playmusic{
        position:fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .song{

        display: flex;
        align-items: center;
        background: white;
        padding: 7px;
    }
    .song>img{
        margin:0 10px;
    }
    .songInfo{
        flex: 1;
        display: flex;
        align-items: center;
    }
    .songInfo img{
        height: 48px;
        width: 48px;
        border-radius: calc(50%);
    }
    .songInfo>div{
        margin-left: 5px;
        width: 45vw;
    }
    .songName{
        font-weight: bold;
    }
    .songName, .songLyric{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .moreImg{
        width: 24px;
        height: 24px;
    }

    /*图片旋转动画*/
    @keyframes imgRolate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .active{
        animation: imgRolate infinite 15s linear;
    }
    .pause {
        animation-play-state: paused;
    }
    .topshow{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 100;
    }
</style>