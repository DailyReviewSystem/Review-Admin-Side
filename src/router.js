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
            meta: {
                title: "Dashboard",
            }
        },

        {
            path: "/org",
            component: parent,

            children: [
                {
                    path: "",
                    component: org_index,
                    meta: {
                        title: "Organization List",
                    }
                },

                {
                    path: "add",
                    component: org_create,
                    meta: {
                        title: "Create Organization",
                    }
                }
            ]
        },

        {
            path: "/user",
            component: parent,

            children: [
                {
                    path: "",
                    component: user_index,
                    meta: {
                        title: "User List",
                    }
                },

                {
                    path: "add",
                    component: user_create,
                    meta: {
                        title: "Create User",
                    }
                }
            ]
        },

        {
            path: "/form",
            component: parent,

            children: [
                {
                    path: "",
                    component: form_index,
                    meta: {
                        title: "Form List",
                    }
                },

                {
                    path: "add",
                    component: form_create,
                    meta: {
                        title: "Create Form",
                    }
                }
            ]
        },
    ]
});

router.beforeEach( (to, from, next) => {
    next();
});

/**
 * After Jump
 */
router.afterEach((to, from) => {
    /**
     * Setting Page Title
     */
    if( to?.meta?.title ) {
        document.title = to?.meta?.title + " - Daily Review System"
    }
});

export default router;