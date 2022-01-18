<template>
    <aside class="ant-layout-sider ant-layout-sider-dark" style="background: rgb(255, 255, 255); flex: 0 0 200px; max-width: 200px; min-width: 200px; width: 200px;">
        <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0 }"
        >
            <a-sub-menu key="/user">
                <template #title>
              <span>
                <user-outlined/>
                <span>Users</span>
              </span>
                </template>
                <a-menu-item key="/user">
                    <router-link to="/user">User List</router-link>
                </a-menu-item>

                <a-menu-item key="/user/add">
                    <router-link to="/user/add">Create User</router-link>
                </a-menu-item>

            </a-sub-menu>

            <a-sub-menu key="/org">
                <template #title>
              <span>
                <laptop-outlined/>
                <span>Organizations</span>
              </span>
                </template>
                <a-menu-item key="/org">
                    <router-link to="/org">Organization List</router-link>
                </a-menu-item>

                <a-menu-item key="/org/add">
                    <router-link to="/org/add">Create Organization</router-link>
                </a-menu-item>
            </a-sub-menu>

            <a-sub-menu key="form">
                <template #title>
              <span>
                <notification-outlined/>
                <span>Forms</span>
              </span>
                </template>

                <a-menu-item key="/form">
                    <router-link to="/form">Form List</router-link>
                </a-menu-item>

                <a-menu-item key="/form/add">
                    <router-link to="/form/add">Create Form</router-link>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </aside>
</template>

<script setup>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";

const route = useRoute();
const path = computed(() => route.path );
const matched = computed( () => route.matched );

const openKeys = ref([]);
const selectedKeys = ref([]);

watch( path, newPath => {
    openKeys.value.push( route.matched[0].path );
    selectedKeys.value.push( newPath );

    console.log( openKeys.value, selectedKeys.value );
});

watch( openKeys.value, newVal => {
    console.log("Updated");
})

</script>