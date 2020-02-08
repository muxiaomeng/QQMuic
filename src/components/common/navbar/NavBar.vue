<template>
    <div id="navbar" >
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    #navbar{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;

    }
    #navbar div img{
        vertical-align: middle;
    }
    .center{
        flex-grow: 1;
    }
    .left,.right{
        width: 20%;
    }

</style>