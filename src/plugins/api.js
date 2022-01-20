import axios from "axios";
import store from "@/store/index.js";

export default {
    install( app ) {
        /**
         * Create Instance
         * @type {AxiosInstance}
         */
        const api = axios.create({
            baseURL: "http://localhost:8000/api"
        });

        api.interceptors.request.use(config => {
            if( store.state.token ) {
                config.headers.Authorization = "Bearer " + store.state.token;
            }

            return config;
        });

        app.provide("api", api);
    }
}