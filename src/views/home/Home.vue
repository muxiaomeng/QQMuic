<template>
    <Scroll class="scroll" @scroll="scroll">
        <HomeInfo :isBorder="isBorder"></HomeInfo>
        <HomeTabBar></HomeTabBar>
        <HomeSongList></HomeSongList>
    </Scroll>
</template>

<script>
    import HomeTabBar from "./childComponent/HomeTabBar";
    import HomeInfo from "./childComponent/HomeInfo";
    import HomeSongList from "./childComponent/HomeSongList";

    import Scroll from "components/common/Scroll";
    export default {
        name: "home",
        data(){
          return{
              isBorder:true
          }
        },
        components:{
            HomeTabBar,
            HomeInfo,
            HomeSongList,
            Scroll,
        },
        methods:{
            scroll(positionY){
                if(positionY!=0){
                    this.isBorder = false
                }
                else{
                    this.isBorder = true
                }
            }
        },
        created() {
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .scroll{
        height: calc(100vh - 68px - 62px);
    }
</style>