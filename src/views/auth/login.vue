<style>
.login-form {
    width: 300px;
}

.login-form button {
    width: 100%;
}

.login-form .ant-input-affix-wrapper {
    border-radius: .3rem;
}

.ant-input-prefix {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
}

.login-form {
    background-color: #FFF;
    padding: 3rem 2rem;
    border-radius: 5px;
}
.login-form h1 {
    margin-bottom: 2rem;
    text-align: center;
}

</style>

<template>
    <form class="login-form" ref="formEl" @submit.prevent="submit">
        <h1>Login - DRS</h1>

        <a-form-item>
            <a-input placeholder="username" size="large" name="username" autocomplete="off" required>
                <template #prefix>
                    <user-outlined type="user" />
                </template>
            </a-input>
        </a-form-item>

        <a-form-item>
            <a-input placeholder="password" size="large" name="password" type="password" required>
                <template #prefix>
                    <lock-outlined type="lock" />
                </template>
            </a-input>
        </a-form-item>

        <a-button type="primary" size="large" htmlType="submit">Login</a-button>
    </form>
</template>

<script setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const formEl = ref(null);
const api = inject('api');
const router = useRouter();
const store = useStore();

function submit() {
    const data = new FormData( formEl.value );

    api.post("/auth/backend/login", data).then( ({ data }) => {
        if( data?.token ) {
            store.dispatch("storeToken", data.token );

            console.log( 1 );

            // alert
            router.push("/");
        }
    }).catch( e => {

    });
}
</script>