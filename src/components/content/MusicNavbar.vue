<template>
    <div id="homeTop" v-show="showNav()">
        <NavBar>
            <template v-slot:left>
                <img src="~assets/img/navbar/more.svg" alt="">
            </template>
            <template v-slot:center>
                <MusicTabbar></MusicTabbar>
            </template>
            <template v-slot:right>
                <img src="~assets/img/navbar/add.svg" alt="">
            </template>
        </NavBar>
        <SearchBar></SearchBar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import MusicTabbar from "./MusicTabbar";
    import SearchBar from "./SearchBar";
    export default {
        name: "MusicNavbar",
        components:{
            MusicTabbar,
            SearchBar,
            NavBar
        },
        methods:{
            showNav(){
                const path = this.$route.path
                if(path==="/home"||path==="/discover"||path==="/musicHall"){
                    return true
                }
                else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    #homeTop{
        position: relative;
        z-index: 1;
        background: var(--background);
    }
</style>