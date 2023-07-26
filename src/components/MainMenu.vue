<template>
    <div class="main-menu">
        <ul class="menu">
            <li class="item">
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="item">
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'main-menu',
});
</script>

<style lang="less" scoped>
.main-menu {
    width: 100%;
    .menu {
        .item {
            list-style: none;
        }
    }
}
</style>
