<template>
    <div id="HomeInfo">
        <div class="greenbar"></div>
        <div id="info" :class="{active:isBorder}">
            <div id="info1">
                <div id="profile">
                    <img :src="$store.state.userImg"/><span>{{$store.state.userName}}</span>
                </div>
                <!--<div id="green">
                    <img src="" alt="绿钻">
                    <img src="" alt="音乐包">
                </div>-->
            </div>
            <div id="info2">
                <div id="activity">
                    <div>活动中心</div>
                    <div class="GrayFont">有7个任务待完成</div>
                </div>
                <div><img src="~assets/img/home/homeInfo/line.svg" alt=""></div>
                <div id="VIP">
                    <div>会员中心</div>
                    <div class="GrayFont">新用户9员首开</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeInfo",
        props:{
            isBorder:{
                type:Boolean,
                default:true
            }
        }
    }
</script>

<style scoped>
    .greenbar{
        background: var(--background);
        height: 10px;
        margin-bottom: 140px;
    }

    #HomeInfo{
        position: relative;
    }
    #info{
        position: absolute;
        top: 0;
        left: 2.5%;
        right: 2.5%;
        background: white;
        padding: 20px;

    }
    #info1,#info2{
        display: flex;
        align-items: center;
    }

    #info1{
        justify-content: center;
        margin-bottom: 10px;
    }
    #profile img{
        height: var(--headImgSize);
        width: var(--headImgSize);
        border-radius: calc(50%);
        vertical-align: middle;
    }
    #profile span{
        vertical-align: middle;
        font-weight: bold;
    }

    #info2{
        justify-content: space-around;
        text-align: center;
    }

    .active{
        box-shadow: 1px 1px 3px #eeeeee;
    }

</style>