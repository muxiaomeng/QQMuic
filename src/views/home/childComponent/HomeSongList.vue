<template>
    <div id="HomeSongList">

        <div id="listTop">
            <div :class="{active:isShowUserlist}" @click="clickUserList">自建歌单</div>
            <div><img src="~assets/img/home/homelist/line.svg" alt=""></div>
            <div :class="{active:!isShowUserlist}" @click="clickLikeList">收藏歌单</div>
        </div>

        <div id="listOp">
            <div>{{userList.length}}个歌单</div>
            <img src="~assets/img/home/homelist/add.svg"  class="addSongList">
            <img src="~assets/img/home/homelist/more.svg" class="moreSongList">
        </div>

        <div v-for="(song,index) in songList" class="song" @click="ToPlayList(song.dissid)">
            <img :src="song.imgurl" alt="" class="songImg">
            <div>
                <div>{{song.dissname}}</div>
                <div class="GrayFont">显示歌单数量</div>
            </div>
            <img src="~assets/img/home/homelist/arrow.svg" alt="">
        </div>
    </div>
</template>

<script>
    import {getDiscList} from "network";

    export default {
        name: "HomeSongList",
        data(){
            return{
                songList:[],
                userList:[],//自建歌单
                likeList:[],//收藏歌单
                isShowUserlist:true
            }
        },
        methods:{
            clickUserList(){
                if(this.isShowUserlist != true){
                    this.isShowUserlist = !this.isShowUserlist
                    this.songList = this.userList
                }
            },
            clickLikeList(){
                if(this.isShowUserlist == true){
                    this.isShowUserlist = !this.isShowUserlist
                    this.songList = this.likeList
                }
            },
            ToPlayList(dissid){
                this.$router.push({
                    path:"/playList",
                    query:{
                        dissid
                    }
                })
            }
        },
        mounted() {
            getDiscList().then((res) => {
                console.log(res)
                this.userList = res.data.list
                this.songList = res.data.list
            })
        }
    }
</script>

<style scoped>
    #HomeSongList>div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 95%;
        margin: auto;
    }
    /*自建歌单，收藏歌单部分*/
    #HomeSongList #listTop{
        padding: 15px;
        width: 60%;
        color: gray;
    }
    #listTop img{
        height: 20px;
        width: 20px;
    }
    /*歌单操作部分*/
    #HomeSongList #listOp {
        margin-bottom: 10px;
    }
    #listOp div{
        flex: 1;
        font-size: 16px;
    }
    #listOp img{
        margin-left: 10px;
        height: 20px;
        width: 20px;
    }
    /*歌单列表*/
    #HomeSongList .song{
        margin: 5px auto;
    }
    .song .songImg{
        height: 64px;
        width: 64px;
    }
    .song img{
        height: 20px;
        width: 20px;
    }
    .song div{
        flex: 1;
    }

    .active{
        color: black;
    }
</style>