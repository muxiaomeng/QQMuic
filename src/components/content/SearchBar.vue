<template>
    <div class="searchBar">
        <input type="search" class="searchBar-input" @focus="focus">
        <div class="search">
            <img src="~assets/img/searchBar/search.svg" alt="">搜索
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchBar",
        methods:{
            focus(){
                this.$router.push("/search")
            }
        }

    }
</script>

<style scoped>
 .searchBar{
     background:#2fc379 ;
     height: 33px;
     text-align: center;
     position: relative;
 }
 .searchBar-input{
     background: #2aaf70;
     border: none;
     width: 95%;
     height: 25px;
     color: white;
     outline: none;
 }
 .searchBar-input::placeholder{
     color: white;
 }
.search{
    position: absolute;
    left: 43%;
    top: 3px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
 .search img{
     width: 16px;
     height: 16px;
 }
</style>