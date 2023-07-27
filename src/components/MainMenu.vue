<template>
    <div class="main-menu">
        <ul class="menu">
            <li
                v-for="route in routes"
                :key="route.path" class="item"
            >
                <RouterLink :to="route.path">{{ route.meta.title }}</RouterLink>
                
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { routes } from '@/routers';

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
