import { createStore } from "vuex";
import StoreManager from "./manager.js";

const store = createStore({
    state() {
        return {
            init: false,
            token: null,

            appLoading: true,
        }
    },

    mutations: {
        loadToken( state, token ) {
            state.token = token;
        },

        finishInit( state ) {
            state.init = true;
        },

        loading( state ) {
            state.appLoading = true;
        },

        loaded( state ) {
            state.appLoading = false;
        }
    },

    actions: {
        init( context ) {
            /**
             * Init Only Once
             */
            if( context.state.init ) return;

            /**
             * Load Token From Persist Storage
             */
            if( StoreManager.get("token") ) {
                context.commit("loadToken", StoreManager.get("token") );
            }

            /**
             * Init Done
             */
            context.commit("finishInit");
        },

        /**
         * Store Token in Persist Storage
         */
        storeToken( context, token ) {
            // Persist
            StoreManager.set("token", token );
            // In Vuex
            context.commit("loadToken", token );
        }
    }
});

export default store;