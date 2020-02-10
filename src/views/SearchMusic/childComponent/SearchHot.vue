<template>
    <div>
        <div class="hotSearch" v-show="!isSearch" :nouse="addHistory">
            <div class="title">热门搜索</div>
            <div class="hotKey">
                <div v-for="(item,index) in hotkey" @click="search(item.k)">
                    {{item.k}}
                </div>
            </div>
            <div class="history">
                <span class="history-search">搜索历史</span>
                <span class="history-clear" @click="clearHistory">清空历史</span>
            </div>
        </div>
        <Scroll class="Scroll" v-show="!isSearch">
            <div v-for="(item,index) in history" :key="index" class="historyItem" >
                <span @click="search(item)">{{item}}</span>
                <img  @click="deleteHistory(index)" src="~assets/img/searchMusic/voice.svg">
            </div>
        </Scroll>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "components/common/Scroll";
    import {getHotSearch} from "network"
    export default {
        name: "SearchHot",
        props:{
            isSearch:{
                type:Boolean,
                default:false
            },
            w:{
                type:String,
                default: ""
            }
        },
        data(){
            return {
                hotkey:[],//热搜
                key:'',//没啥用
                history:["czk真的帅","czk正在学习","嘤嘤嘤","皮皮虾我们走",
                    "是czk不是cxk","热爱生活热爱小康","小康唱歌真好听",]//搜索历史
            }
        },
        methods:{
            search(w){
                this.$emit("hotsearch",w)
             },
            clearHistory(){
                this.history=[]
            },
            deleteHistory(index){
                this.history.splice(index,1)
            }
        },
        computed:{
            addHistory(){
                let isExist = false
                if(this.w===""){
                    return this.w
                }
                for(let i=0;i<this.history.length;i++){
                    if(this.history[i]===this.w){
                        this.history.splice(i,1)
                        this.history.unshift(this.w)
                        isExist = true
                        break
                    }
                }
                if(!isExist){
                    this.history.unshift(this.w)
                }

                return this.w
            }
        },
        components:{
            NavBar,
            Scroll
        },
        mounted() {
            //取得热搜词
            getHotSearch().then(res=>{
                for(let i=0;i<6;i++){
                    this.hotkey.push(res.data.hotkey[i])
                }
            })
        }
    }
</script>

<style scoped>
    .Scroll{
        height: calc(100vh - 218px - 62px - 25px);
    }
    /*热搜*/
    .hotSearch{
        background: #f4f4f4;
        position: relative;
        z-index: 1;
    }
    .hotSearch>div{
        width: 90%;
        margin: auto;
    }
    .hotSearch .title{
        font-size: 14px;
        color: gray;
        padding-top: 20px;
        padding-bottom: 10px;
    }
    .hotKey{
        display: flex;
        flex-wrap: wrap;
    }
    .hotKey div{
        border-radius: 20px;
        padding: 5px 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        border:1px solid gray;
    }
    /*搜索历史和清空历史*/
    .history{
        padding: 10px;
    }
    .history-search{
        color: gray;
        margin-left: 0;
    }
    .history-clear{
        color: var(--background);
        float: right;
    }
    /*搜索历史的单词样式*/
    .historyItem{
        width: 90%;
        margin: auto;
        padding: 10px 0;
        border-bottom: 1px solid #f6f6f6;
        display: flex;
        align-items: center;
    }
    .historyItem span{
        flex: 1;
    }
    .historyItem img{
        width: 16px;
        height: 16px;
    }
</style>