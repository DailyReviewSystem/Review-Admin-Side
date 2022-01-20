<template>
    <k-loading
        :loading="loading"
        class="overlay"
        style="font-size: 2rem;"
    />
    <a-table :dataSource="users" :columns="columns" rowKey="id" />
</template>

<script setup>
import { ref, inject } from "vue";
import KLoading from "@/components/KLoading.vue";

const api = inject("api");

const loading = ref(true);
const users = ref([]);
const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "display_name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
];

api.get("/user").then( ({data}) => {
    users.value = data.data;
    loading.value = false;
});

</script>