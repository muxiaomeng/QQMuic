<template>
    <div class="song">
        <audio
                :src="$store.state.song.songurl"
                autoplay ref="audio"
                @play="changePlay(true)"
                @pause="changePlay(false)"
        ></audio>
        <div class="songInfo">
            <img :class="{active:true,pause:!$store.state.isplay}" :src="songImg" alt="">
            <div>
                <div class="songName">{{$store.state.song.songname}}</div>
                <div class="songLyric GrayFont" >这里放歌词</div>
            </div>
        </div>
        <img v-show="!this.$store.state.isplay" src="~assets/img/playMusic/play.svg" @click="changePlay(true)">
        <img v-show="this.$store.state.isplay" src="~assets/img/playMusic/pause.svg" @click="changePlay(false)">
        <img class="moreImg" src="~assets/img/playMusic/more.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "PlayMusic",
        methods:{
            changePlay(bool){
                this.$store.commit("changePlay",bool)
                this.playMuisc()
            },
            playMuisc(){
                if(this.$store.state.isplay){
                    this.$refs.audio.play()
                }
                else{
                    this.$refs.audio.pause()
                }
            }
        },
        computed:{
            songImg(){
                return "https://y.gtimg.cn/music/photo_new/T002R300x300M000"+this.$store.state.song.album.mid+".jpg?max_age=2592000"
            },
        },

    }
</script>

<style scoped>
    .song{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        background: white;
        padding: 7px;
    }
    .song>img{
        margin:0 15px;
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
    .songInfo div{
        margin-left: 5px;
    }
    .songInfo .songName{
        font-weight: bold;
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
</style>