<template>
  <div id="app">
    <MusicNavbar></MusicNavbar>
    <keep-alive exclude="PlayList">
      <router-view></router-view>
    </keep-alive>
    <PlayMusic></PlayMusic>
  </div>
</template>

<script>
import MusicNavbar from "components/content/MusicNavbar";
import PlayMusic from "components/content/PlayMusic";
export default {
  name: 'app',
  components: {
    MusicNavbar,
    PlayMusic
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>