<template>
    <div>
        <PlayListNavbar></PlayListNavbar>
        <Scroll class="scroll">
            <PlayListInfo :cdlist="cdlist" :songlist="songlist"></PlayListInfo>
            <PlayListSongs :songlist="songlist"></PlayListSongs>
        </Scroll>
    </div>
</template>

<script>
    import PlayListNavbar from "./childComponent/PlayListNavbar";
    import PlayListInfo from "./childComponent/PlayListInfo";
    import PlayListSongs from "./childComponent/PlayListSongs";

    import Scroll from "components/common/Scroll";
    import {getCdInfo} from 'network'

    export default {
        name: "PlayList",
        data(){
            return {
                dissid: null,
                cdlist:{},
                songlist:[],
            }
        },
        components:{
            PlayListNavbar,
            PlayListInfo,
            PlayListSongs,
            Scroll
        },
        mounted() {
            this.dissid = this.$route.query.dissid
            getCdInfo(this.dissid).then(res=>{
                this.cdlist = res.cdlist[0]
                this.songlist = res.cdlist[0].songlist
                console.log(res)
            })
        }

    }
</script>

<style scoped>
    .scroll{
        height: calc(100vh - 31px - 62px);
    }
</style>