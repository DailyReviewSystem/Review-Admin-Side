<style>
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.header.header {
    padding: 0 20px;
}

.logo {
    color: #FFF;
    padding: .5rem 1rem;
    border-radius: .25rem;
    font-size: 1.25em;
    margin-left: -10px;
}

.logo:hover {
    color: #000;
    background-color: #DDD;
}

.page-layout {
    min-height: 100vh!important;
}

.page-layout.login-page {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

<template>
    <a-layout :class="['page-layout', $route.path === '/login' ? 'login-page' : '' ]">
        <template v-if="$route.path === '/login'">
            <router-view></router-view>
        </template>

        <template v-else>
            <a-layout-header class="header">
                <router-link to="/" class="logo">Daily Review System</router-link>
            </a-layout-header>

            <a-layout style="flex-direction: row">
                <k-sidebar></k-sidebar>

                <a-layout style="padding: 0 24px 24px">
                    <a-breadcrumb style="margin: 16px 0">
                        <a-breadcrumb-item>Home</a-breadcrumb-item>
                        <a-breadcrumb-item>List</a-breadcrumb-item>
                        <a-breadcrumb-item>App</a-breadcrumb-item>
                    </a-breadcrumb>
                    <a-layout-content
                        :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px', position: 'relative' }"
                    >
                        <router-view></router-view>
                    </a-layout-content>
                </a-layout>
            </a-layout>
        </template>
    </a-layout>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

/**
 * Components, contribute to `setup`, no need to call `app.componnet`
 */
import KSidebar from "@/components/KSidebar.vue";
</script>