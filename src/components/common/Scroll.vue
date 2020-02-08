<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        data(){
          return {
              scroll:null
          }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true,
                probeType: 3,
                pullUpLoad:true,
                // pullDownRefresh: true,
                bounce:{
                    top:false
                }
            })
            //监听滚动距离
            this.scroll.on("scroll",(position)=> {
                this.$emit("scroll",position.y)
            })

            //监听上拉事件   pullUpLoad必须为true
            this.scroll.on("pullingUp",()=>{
                this.$emit('pullingUp')
            })
        },
        methods:{
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time);
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll&&this.scroll.refresh()
            },
            getY(){
                return this.scroll.y
            },
            scrollToElement(el,delay){
                this.scroll.scrollToElement(el,delay)
            }
        }
    }
</script>

<style scoped>

</style>