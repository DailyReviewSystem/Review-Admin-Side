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
import { ref } from "vue";

const url = new URL( window.location );
const path = url.pathname;
const rootPath = '/' + path.split("/")[1];

// Data
const openKeys = ref([ rootPath ]);
const selectedKeys = ref([ path ]);
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

</script>