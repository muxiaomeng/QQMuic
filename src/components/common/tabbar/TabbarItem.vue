<template>
    <div class="tabbarItem" >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabbarItem",
    }
</script>

<style scoped>
    .tabbarItem{
        text-align: center;
    }
</style>