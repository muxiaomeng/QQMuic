<template>

    <NavBar class="plNavbar">
        <template v-slot:left>
            <img src="~assets/img/playList/arrow.svg" @click="goback">
        </template>
        <template v-slot:center>
            <div class="word">歌单</div>
        </template>
        <template v-slot:right>
            <img src="~assets/img/playList/more.svg">
        </template>
    </NavBar>

</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "PlayListNavbar",
        methods:{
            goback(){
                this.$router.go(-1)
            }
        },
        components:{
            NavBar
        }

    }
</script>

<style scoped>
    /*pl == playList*/
    .plNavbar{
        padding-bottom: 5px;
        position: relative;
        background: #2fc379;
        z-index: 1;
    }
    .plNavbar img{
        width: 24px;
        height: 24px;
    }
    .word{
        font-size: 20px;
    }
</style>