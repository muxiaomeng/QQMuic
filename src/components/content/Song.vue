<template>
    <div class="songPage">
        <div class="bgColor" :style='{background:"url("+$store.getters.getImg+")"}'></div>
        <div class="bg_black"></div>
        <NavBar class="songTop">
            <template v-slot:left>
                <img src="~assets/img/song/down.svg" @click="changeShow(false)">
            </template>
            <template v-slot:center>
               <div class="singerName">{{$store.state.song.songname}}</div>
            </template>
            <template v-slot:right>
                <img src="~assets/img/song/more.svg" alt="">
            </template>
        </NavBar>
        <div>
            <div>-- {{$store.state.song.singer}} --</div>
            <img class="songImg" :class="{active:true,pause:!$store.state.isplay}" :src="$store.getters.getImg" alt="">
            <div class="songword">{{this.word}}</div>
        </div>
        <div class="songBottom">
            <NavBar>
                <template v-slot:left>
                    <div class="processTime">{{formatTime}}</div>
                </template>
                <template v-slot:center>
                    <div ref="process" class="process" @click="changeTime">
                        <div class="currentPro" :style="{width: dotIsMove==false?processTime+'%':x}">
                            <div ref="dot"
                                 class="process_dot"
                                 :style="{left:dotIsMove==false?processTime+'%':x}"
                                 @touchstart="changePro"></div>
                        </div>
                    </div>
                </template>
                <template v-slot:right>
                    <div class="processTime">{{formatDuration}}</div>
                </template>
            </NavBar>
            <NavBar>
                <template v-slot:left>
                    <img class="catogary" src="~assets/img/song/loop1.svg" @click="changeShow(false)">
                </template>
                <template v-slot:center>
                    <img class="lastMusic" src="~assets/img/song/last.svg" alt="">

                    <img class="play" v-show="!$store.state.isplay" src="~assets/img/song/play.svg" @click="playMusic">
                    <img class="play" v-show="$store.state.isplay" src="~assets/img/song/pause.svg" @click="pauseMusic">

                    <img src="~assets/img/song/last.svg" alt="">
                </template>
                <template v-slot:right>
                    <img class="moreMusic" src="~assets/img/song/moreMusic.svg" alt="">
                </template>
            </NavBar>
            <div class="songOP">
                <img src="~assets/img/song/like.svg" alt="">
                <img src="~assets/img/song/download.svg" alt="">
                <img src="~assets/img/song/share.svg" alt="">
                <img src="~assets/img/song/comment.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Song",
        props:{
            lyric:{
                type:Array,
                default:[]
            },
            trans:{
                type:Array,
                default:[]
            },
            timeLyric:{
                type:Array,
                default:[]
            },
            timeTrans:{
                type:Array,
                default:[]
            },
            word:{
                type:String,
                default:""
            },
            currentTime:{
                type:Number,
                default:0
            },
            duration:{
                type:Number,
                default:0
            }
        },
        data(){
          return {
              dotIsMove:false,
              x:0
          }
        },
        methods:{
            changeShow(bool){
                this.$emit("changeShow",bool)
            },
            playMusic(){
                this.$emit("playMusic")
            },
            pauseMusic(){
                this.$emit("pauseMusic")
            },
            //改变当前时间 点击进度条
            changeTime(event){
                let time = (event.offsetX/this.$refs.process.clientWidth)*this.duration
                this.$emit("changeTime",time)
            },
            //改变当前时间 滑动进度条
            changePro(event){
                let dot = this.$refs.dot
                let proWidth = this.$refs.process.clientWidth
                //最大最小 滑动距离
                let min = (document.body.clientWidth-proWidth)/2
                let max = min + proWidth
                //x为偏移起点距离
                let x = dot.offsetLeft
                document.ontouchmove = (event) =>{
                    this.dotIsMove = true
                    let temp = event.touches[0].pageX
                    //当前滑动距离大于最大
                    if(temp>max){
                        x = proWidth
                    }
                    else if(temp<min){
                        x = 0
                    }
                    else {
                        x =  temp- min
                    }
                    this.x=x+"px"
                }
                document.ontouchend = (event)=> {
                    this.dotIsMove = false
                    let time = (x/proWidth)*this.duration
                    this.$emit("changeTime",time)
                    document.ontouchmove = null
                    document.ontouchend = null
                }
            }
        },
        computed:{
            formatTime(){
                let currentTime = Math.floor(this.currentTime)
                let min =Math.floor(currentTime/60)
                let sec =Math.floor(currentTime%60)
                if(min<10){
                    min = "0"+min
                }
                if(sec<10){
                    sec = "0"+sec
                }
                return min+":"+sec
            },
            formatDuration(){
                let duration = Math.floor(this.duration)
                let min =Math.floor(duration/60)
                let sec =Math.floor(duration%60)
                if(min<10){
                    min = "0"+min
                }
                if(sec<10){
                    sec = "0"+sec
                }
                return min+":"+sec
            },
            //当前进度
            processTime(){
                let pro = (this.currentTime/this.duration)*100
                return Math.floor(pro)
            },
        },
        components:{
            NavBar
        },
    }
</script>

<style scoped>
    .bgColor{
        filter:blur(30px) brightness(50%);
        height: 100vh;
        width: 100%;
        position: absolute;
        z-index: -2;
    }
    .bg_black{
        height: 100vh;
        width: 100%;
        position: absolute;
        z-index: -1;
        background-color: rgba(0,0,0,0.35);
    }
    .songPage{
        position: relative;
        height: 100vh;
        width: 100vw;
        z-index: 1;
        background-color: white;
        color: white;
        text-align: center;
    }
    .songTop img{
        width: 24px;
        height: 24px;
    }
    .singerName{
        font-size: 20px;
        width: 60vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .songImg{
        border-radius: 50%;
        margin: 20px 0;
    }

    .songword{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .songBottom{
        position: fixed;
        bottom: 20px;
        right: 0;
        left: 0;
    }
    /*进度条一栏*/
    .processTime{
        opacity: 0.6;
    }
    .process{
        width: 100%;
        height: 3px;
        background: rgba(255,255,255,0.6);
        position: relative;
    }
    .currentPro{
        width: 10%;
        height: 100%;
        background-color: #2fc379;
    }
    .process_dot{
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background-color: white;
        position: absolute;
        top:-5px;
        left: -5px;
    }
    /*播放按钮那一栏*/
    .play{
        width: 48px;
        height: 48px;
        margin: 20px;
    }
    .lastMusic{
        transform: rotate(180deg);
    }
    .catogary,.moreMusic{
        width: 24px;
        height: 24px;
        opacity: 0.6;
    }
    /*底部操作一栏*/
    .songOP{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .songOP img{
        width: 24px;
        height: 24px;
        opacity: 0.6;
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
</style>