<template>
    <div class="playListTop">
        <!--设置背景色-->
        <div class="bgColor" :style='{background:"url("+this.cdlist.logo+")"}'></div>

        <div class="cdInfo" >
            <div class="cdImg">
                <img :src="cdlist.logo">
            </div>
            <div class="cdword">
                <div class="dissName">{{cdlist.dissname}}</div>
                <div class="authorInfo">
                    <img class="vip" v-show="cdlist.isvip" :src="cdlist.ifpicurl" alt="" >
                    <img class="headurl" :src="cdlist.headurl">
                    <div>{{cdlist.nick}}</div>
                </div>
                <div class="cddesc">简介:{{cdlist.desc}}</div>
            </div>
        </div>

        <PlayListOP></PlayListOP>

    </div>
</template>

<script>
    import PlayListOP from "./PlayListOP";
    export default {
        name: "PlayListInfo",
        props:{
            cdlist:{
                type:Object,
                default:{}
            },
            songlist:{
                type:Array,
                default: []
            }
        },

        components:{
            PlayListOP
        }
    }
</script>

<style scoped>
    .playListTop{
        color:white ;
    }
    .bgColor{
        filter:blur(30px) brightness(50%);
        height: 28vh;
        width: 100%;
        position: absolute;
        z-index: -1;
    }
    .cdInfo{
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
    }
    .cdImg{
        margin-right: 5px;
    }
    .cdImg img{
        width: 128px;
        height: 128px;
    }

    .cdword{
        width: calc(90vw - 133px);
    }
    .cdword .dissName{
        /*文本最多显示2行*/
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;


        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;

        font-size: 20px;
        margin-bottom: 10px;
    }
    .authorInfo{
        display: flex;
        align-items: center;
        position: relative;
    }
    .authorInfo .headurl{
        height: var(--headImgSize);
        width: var(--headImgSize);
        border-radius: calc(50%);
        margin-right: 5px;
    }
    .authorInfo div,.cddesc{
        /*设置文本溢出显示...*/
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .cddesc{
        font-size: 12px;
    }

    /*作者头像右下角五角星标识*/
    .vip{
        width: 12px;
        height: 12px;
        position: absolute;
        left: 20px;
        bottom: 0;
    }

</style>