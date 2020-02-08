<template>
    <Tabbar>
        <TabbarItem v-for="(item,index) in items" :key="index"
                    :class="{active:currentIndex ===index}"
                    @click.native="tabClick(item.path,index)">
            <template>{{item.name}}</template>
        </TabbarItem>
    </Tabbar>
</template>

<script>
    import Tabbar from "../common/tabbar/Tabbar";
    import TabbarItem from "../common/tabbar/TabbarItem";
    export default {
        name: "MusicTabbar",
        data(){
          return {
              items:[
                  {
                  name:'我的',
                  path:'/home'
              },
                  {
                  name:'音乐馆',
                  path:"/musicHall"
              },
                  {
                  name: '发现',
                  path:"/discover"
              }],
              currentIndex: 0
          }
        },
        components:{
            TabbarItem,
            Tabbar,
        },
        methods:{
            //事件方法
            tabClick(path,index){
                this.changeRoute(path)
                this.changeCurrentIndex(index)
            },
            changeRoute(path){
                if(this.$route.path!=path){
                    this.$router.push(path)
                }
            },
            changeCurrentIndex(index){
                this.currentIndex=index
            }
        }
    }
</script>

<style scoped>
    .active{
        font-weight: bold;
    }
</style>