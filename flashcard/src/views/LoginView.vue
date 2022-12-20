<template>
    <form @submit.prevent="login">
        <div class="row">
            <div class="col-md-5 col-sm-12 panel-login">
                <div class="login-page">
                    <div class="col-md-10">
                        <h2 class="mb-5"><b>Faça seu Login</b></h2>
                        <div class="mb-3 text-start">
                            <input type="email" v-bind:class="[v$.email.$error ? 'field-red' : '']" class="form-control"
                                placeholder="Email" v-model="state.email">
                            <span class="invalid-message" v-for="error of v$.email.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div class="mb-4 text-start">
                            <input type="password" v-bind:class="[v$.password.$error ? 'field-red' : '']" maxlength="50"
                                class="form-control" placeholder="Password" v-model="state.password">
                            <span class="invalid-message" v-for="error of v$.password.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-2 "><span
                                class="material-icons-outlined align-middle">login</span> <span
                                class="align-middle">Entrar</span></button>
                        <button type="button" class="btn btn-outline-secondary w-100" v-on:click="createUser()"><span
                                class="material-icons-outlined align-middle">account_circle</span> <span
                                class="align-middle">Criar
                                conta</span></button>
                    </div>
                </div>
            </div>
            <div class="col-md-7 d-md-flex justify-content-center align-items-center d-none">
                <img class="img-login" src="../assets/undraw_Login_re_4vu2.png">
            </div>
        </div>
    </form>
</template>

<script>
import { inject } from 'vue'
import { required, minLength, email, helpers, maxLength } from "@vuelidate/validators";
import { useVuelidate } from '@vuelidate/core'
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import api from '@/services/api.js'
import { useRouter } from 'vue-router'

export default {
    name: 'LoginView',
    components: {
    },
    setup() {

        const toast = inject('toast')
        const router = useRouter()
        const campoObrigatorio = '* Campo obrigatório';

        const state = reactive({
            email: '',
            password: ''
        })

        const rules = computed(() => ({
            email:
            {
                required: helpers.withMessage(campoObrigatorio, required),
                email: helpers.withMessage('* Email inválido', email)
            },
            password:
            {
                required: helpers.withMessage(campoObrigatorio, required),
                minLength: helpers.withMessage("* Password deve ter no minimo 6 caracteres", minLength(6)),
                maxLength: helpers.withMessage("* Password deve ter no máximo 50 caracteres", maxLength(50))
            }
        }))

        const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true })

        function login() {
            this.v$.$validate();
            if (!this.v$.$error) {
                api.post('authorize/login', state).then(response => {
                    localStorage.setItem('token', response.data);
                    router.push('/')
                }).catch(error => {
                    toast.error(error.response.data.error)
                });
            }
        }

        function createUser() {
            router.push('/add-user')
        }

        return { state, campoObrigatorio, login, createUser, v$ }
    }
}
</script>

<style>
.login-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-login {
    width: 100%;
}

.panel-login {
    background-color: #f2f2f2
}
</style>