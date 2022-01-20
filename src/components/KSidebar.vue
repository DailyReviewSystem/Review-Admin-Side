<template>
    <aside class="ant-layout-sider ant-layout-sider-dark" style="background: rgb(255, 255, 255); flex: 0 0 200px; max-width: 200px; min-width: 200px; width: 200px;">
        <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys"
            v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0 }"
        >
            <a-sub-menu
                v-for="item in sidebar" :key="item.link"
            >
                <template #title>
                    <span>
                        <component :is="item.icon"></component>
                        <span>{{ item.name }}</span>
                    </span>
                </template>

                <template v-if="item.children.length">
                    <a-menu-item
                        v-for="sub in item.children"
                        :key="item.link + (sub.link || '')"
                    >
                        <router-link :to="item.link + (sub.link || '')">{{ sub.name }}</router-link>
                    </a-menu-item>
                </template>
            </a-sub-menu>
        </a-menu>
    </aside>
</template>

<script setup>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { useRoute } from "vue-router";
import { ref, watch, computed } from "vue";

// Tools
const route = useRoute();

// Computed
const path = computed(() => route.path );
const matched = computed( () => route.matched );

// Data
const openKeys = ref([]);
const selectedKeys = ref([]);
const sidebar = [
    {
        name: "Users",
        link: "/user",
        icon: UserOutlined,
        children: [
            {
                name: "User List",
            },
            {
                name: "Create User",
                link: "/add"
            },
        ]
    },

    {
        name: "Organizations",
        link: "/org",
        icon: LaptopOutlined,
        children: [
            {
                name: "Organization List",
            },
            {
                name: "Create Organization",
                link: "/add"
            },
        ]
    },

    {
        name: "Form Templates",
        link: "/template",
        icon: NotificationOutlined,
        children: [
            {
                name: "Template List",
            },
            {
                name: "Create Template",
                link: "/add"
            },
        ]
    },
];

watch( path, newPath => {
    openKeys.value.push( route.matched[0].path );
    selectedKeys.value.push( newPath );

    console.log( openKeys.value, selectedKeys.value );
});

watch( openKeys.value, newVal => {
    console.log("Updated");
})

</script>