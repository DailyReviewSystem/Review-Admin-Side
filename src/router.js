import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index.js";

import login from "@/views/auth/login.vue";

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
                auth: true,
                title: "Dashboard",
            }
        },

        {
            path: "/login",
            component: login,
            meta: {
                title: "Login Page"
            }
        },

        {
            path: "/org",
            component: parent,
            meta: {
                auth: true,
            },

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
            meta: {
                auth: true,
            },

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
            path: "/template",
            component: parent,
            meta: {
                auth: true,
            },

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

/**
 * Init Store ( get token )
 */
store.dispatch("init");

/**
 * Before Each Route Enter ( Check Authentication )
 */
router.beforeEach( (to, from, next) => {
    const requireAuth = to.matched.some( route => route.meta.auth );

    if( requireAuth ) {
        // Have Token, Might Authenticated
        if( store.state.token ) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

/**
 * After Jump, Setting Title Of Page
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