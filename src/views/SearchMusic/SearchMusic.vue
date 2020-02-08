<template>
    <div>
        <NavBar class="searchNavbar">
            <template v-slot:left>
                <img src="~assets/img/searchBar/arrow.svg" @click="goback">
            </template>
            <template v-slot:center>
                <input v-model="value"
                       type="search"
                       class="searchBar-input"
                       placeholder="搜索音乐、MV、歌单、用户"
                       @search="searchSong(value)"
                >
            </template>
            <template v-slot:right>
                <img src="~assets/img/searchBar/voice.svg">
            </template>
        </NavBar>
        <SearchHot @hotsearch="hotsearch"
                   :w="w"
                   :is-search="isSearch"></SearchHot>
        <SearchSong @pullingUp="pullingUp" :songlist="songlist" ref="song"></SearchSong>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/Scroll";

    import SearchHot from "./childComponent/SearchHot";
    import SearchSong from "./childComponent/SearchSong";

    import {searchSong} from "network"

    export default {
        name: "SearchMusic",
        data(){
            return {
                value:"",//搜索框的内容
                ischange:false,//搜索框内容是否改变
                isSearch:false,//是否在搜索歌曲
                w:"",  //搜索歌曲关键字
                songlist:[],
                curnum:0,
                totalnum:0,
                curpage:1,
            }
        },
        methods:{
            goback(){
                this.songlist=[]
                this.isSearch=false
                this.$router.go(-1)
            },
            searchSong(w,curpage=1){
                this.isSearch = true
                if(w===""){
                    this.isSearch=false
                }
                searchSong(curpage,20,w).then(res=>{
                    const item = res.data.song
                    // console.log(item)
                    this.w = w
                    this.value = w
                    this.curnum = item.curnum
                    this.totalnum = item.totalnum
                    if(curpage===1){
                        this.songlist = []
                    }
                    this.songlist.push(...item.list)
                    //刷新scroll
                    this.$refs.song.refresh()
                })
            },
            hotsearch(w){
                this.searchSong(w)
            },
            pullingUp(){
                if(this.totalnum<=this.songlist.length){
                    return
                }
                this.curpage++
                if(this.totalnum>this.curnum){
                    this.searchSong(this.w,this.curpage)
                }
            },

        },
        components:{
            NavBar,
            Scroll,
            SearchHot,
            SearchSong
        },
    }
</script>

<style scoped>
    /*导航栏样式*/
    .searchNavbar{
        background: #2fc379;
        position: relative;
        z-index: 9;
    }
    .searchNavbar img{
        width: 24px;
        height: 24px;
    }
    .searchBar-input{
        background: #2aaf70;
        border: none;
        width: 95%;
        height: 25px;
        color: white;
        outline: none;
    }
    .searchBar-input::placeholder{
        color: white;
    }
</style>