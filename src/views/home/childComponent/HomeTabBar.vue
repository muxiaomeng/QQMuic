<template>
    <div id="homm-tabbar">
        <Tabbar class="tabbar">
            <TabbarItem v-for="(item,index) in items" :key="index" class="tabbarItem">
                <template>
                        <img :src="item.img" alt="">
                        <div>{{item.word}}</div>
                        <div v-show="item.number" class="item-number GrayFont">{{item.number}}</div>
                </template>
            </TabbarItem>
        </Tabbar>
    </div>
</template>

<script>
    import Tabbar from "components/common/tabbar/Tabbar";
    import TabbarItem from "components/common/tabbar/TabbarItem";
    export default {
        name: "HomeTabBar",
        data(){
          return {
              items:[
                  {
                      img:require("assets/img/homeTab/music.svg"),
                      word:'本地音乐',
                      number:"0"
                  },
                  {
                      img:require("assets/img/homeTab/download.svg"),
                      word:'下载音乐',
                      number:"0"
                  },
                  {
                      img:require("assets/img/homeTab/lately.svg"),
                      word:'最近播放',
                      number:"0"
                  },
                  {
                      img:require("assets/img/homeTab/like.svg"),
                      word:'我喜欢',
                      number:"0"
                  },
                  {
                      img:require("assets/img/homeTab/buyMusic.svg"),
                      word:'已购音乐',
                  },
                  {
                      img:require("assets/img/homeTab/run.svg"),
                      word:'跑步电台',
                  },
              ]
          }
        },
        components:{
            TabbarItem,
            Tabbar
        }
    }
</script>

<style scoped>
    .tabbar{
        flex-wrap: wrap;
        width: 100%;
    }
    .tabbarItem{
        width: 30%;
    }
</style>