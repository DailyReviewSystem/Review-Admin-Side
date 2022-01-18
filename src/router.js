import { createRouter, createWebHistory } from "vue-router";

import index from "@/views/index.vue";
import parent from "@/views/parent.vue";

import org_index from "@/views/org/index.vue";
import org_create from "@/views/org/create.vue";

import user_index from "@/views/user/index.vue";
import user_create from "@/views/user/create.vue";

import form_index from "@/views/form/index.vue";
import form_create from "@/views/form/create.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: index,
        },

        {
            path: "/org",
            component: parent,

            children: [
                {
                    path: "/",
                    component: org_index
                },

                {
                    path: "add",
                    component: org_create
                }
            ]
        },

        {
            path: "/user",
            component: parent,

            children: [
                {
                    path: "/",
                    component: user_index
                },

                {
                    path: "add",
                    component: user_create
                }
            ]
        },

        {
            path: "/form",
            component: parent,

            children: [
                {
                    path: "/",
                    component: form_index
                },

                {
                    path: "add",
                    component: form_create
                }
            ]
        },
    ]
});

export default router;