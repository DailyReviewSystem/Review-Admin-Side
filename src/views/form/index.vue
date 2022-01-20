<template>
    <div class="container">
        <k-loading
            :loading="loading"
            class="overlay"
            style="font-size: 2rem;"
        />

        <a-table
            :dataSource="forms"
            :columns="columns"
            rowKey="id"
        >
            <template #name="{ text: form }">
                <router-link
                    :to="'/form/' + form.id"
                >{{ form.name }}</router-link>
            </template>
        </a-table>
    </div>
</template>

<script setup>
import { inject, ref } from "vue";
import KLoading from "@/components/KLoading.vue";

// Tools
const api = inject("api");
const store = inject("store");

// Data
const loading = ref( true );
const forms = ref([]);
const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", key: "name", slots: { customRender: 'name' } },
    { title: "Creator", dataIndex: "creator.name", key: "creator" },
];

store.commit("loading");

api.get("/form").then( ({data}) => {
    if( data?.data ) forms.value = data.data;
    store.commit("loaded");

    loading.value = false;
});
</script>