<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    .tabbar{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 20px;
    }
</style>