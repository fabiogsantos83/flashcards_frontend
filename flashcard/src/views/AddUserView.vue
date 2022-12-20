<template>
    <form @submit.prevent="create">
        <div class="row">
            <div class="col-md-7 d-md-flex justify-content-center align-items-center d-none">
                <img class="img-login" src="../assets/undraw_Add_user_re_5oib.png">
            </div>
            <div class="col-md-5 col-sm-12 panel-login">
                <div class="login-page">
                    <div class="col-md-10">

                        <h2 class="mb-5"><b>Criar Conta</b></h2>
                        <div class="mb-3 text-start">
                            <input type="text" v-bind:class="[v$.name.$error ? 'field-red' : '']" class="form-control"
                                placeholder="Nome" v-model="state.name">
                            <span class="invalid-message" v-for="error of v$.name.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div class="mb-3 text-start">
                            <input type="email" v-bind:class="[v$.email.$error ? 'field-red' : '']" class="form-control"
                                placeholder="Email" v-model="state.email">
                            <span class="invalid-message" v-for="error of v$.email.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div class="mb-3 text-start">
                            <input type="password" v-bind:class="[v$.password.$error ? 'field-red' : '']" maxlength="50"
                                class="form-control" placeholder="Password" v-model="state.password">
                            <span class="invalid-message" v-for="error of v$.password.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                        <div class="mb-4 text-start">
                            <input type="password" v-bind:class="[v$.confirmPassword.$error ? 'field-red' : '']"
                                maxlength="50" class="form-control" placeholder="Confirme Password"
                                v-model="state.confirmPassword">
                            <span class="invalid-message" v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-2 "><span
                                class="material-icons-outlined align-middle">person_add</span> <span
                                class="align-middle">Criar Conta</span></button>
                        <button type="button" class="btn btn-outline-secondary w-100" v-on:click="back()"><span
                                class="material-icons-outlined align-middle">arrow_back</span> <span
                                class="align-middle">Voltar</span></button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { inject } from 'vue'
import { required, minLength, email, helpers, maxLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from '@vuelidate/core'
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import api from '@/services/api.js'
import { useRouter } from 'vue-router'

export default {
    name: 'AddUserView',
    components: {
    },
    setup() {

        const toast = inject('toast')
        const router = useRouter()
        const campoObrigatorio = '* Campo obrigatório';

        const state = reactive({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        const rules = computed(() => ({
            name:
            {
                required: helpers.withMessage(campoObrigatorio, required),                
                minLength: helpers.withMessage("* Nome deve ter no minimo 2 caracteres", minLength(2)),
                maxLength: helpers.withMessage("* Nome deve ter no máximo 100 caracteres", maxLength(100))
            },
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
            },
            confirmPassword:
            {
                required: helpers.withMessage(campoObrigatorio, required),
                minLength: helpers.withMessage("* Password deve ter no minimo 6 caracteres", minLength(6)),
                maxLength: helpers.withMessage("* Password deve ter no máximo 50 caracteres", maxLength(50)),
                confirmePassword: helpers.withMessage("* Password incorreta", sameAs(state.password)),
            }
        }))

        const v$ = useVuelidate(rules, state, { $lazy: true, $autoDirty: true })

        function create() {
            this.v$.$validate();
            if (!this.v$.$error) {
                api.post('user', state).then(() => {
                    toast.success("Cadastro feito com sucesso!")                    
                    router.push('login')
                }).catch(error => {
                    toast.error(error.response.data.error)
                });
            }
        }

        function back() {
            router.push('/login')
        }

        return { state, campoObrigatorio, create, back, v$ }
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