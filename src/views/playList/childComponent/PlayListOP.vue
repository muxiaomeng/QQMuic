<template>
    <Tabbar class="playListOP">
        <TabbarItem>
            <img src="~assets/img/playList/like.svg" alt=""><span>9.4万</span>
        </TabbarItem>
        <TabbarItem>
            <img src="~assets/img/playList/comment.svg" alt=""><span>225</span>
        </TabbarItem>
        <TabbarItem>
            <img src="~assets/img/playList/share.svg" alt=""><span>分享</span>
        </TabbarItem>
    </Tabbar>
</template>

<script>
    import Tabbar from "components/common/tabbar/Tabbar";
    import TabbarItem from "components/common/tabbar/TabbarItem";
    export default {
        name: "PlayListOP",
        components:{
            TabbarItem,
            Tabbar
        }
    }
</script>

<style scoped>
    .playListOP{
        padding: 15px 0;
    }
    .playListOP img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
    }
    .playListOP span{
        font-size: 14px;
        vertical-align: middle;
    }

</style>