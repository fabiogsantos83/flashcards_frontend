<template>
    <form @submit.prevent="login">
        <div class="login-page">
            <div class="card col-md-5 ">
                <div class="card-header">
                    Login
                </div>
                <div class="card-body p-4">
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
                    <button type="submit" class="btn btn-outline-secondary w-100"><span
                            class="material-icons-outlined align-middle">account_circle</span> <span
                            class="align-middle">Criar conta</span></button>
                </div>
            </div>
        </div>

    </form>
</template>

<script>
import { required, minLength, email, helpers, maxLength } from "@vuelidate/validators";
import { useVuelidate } from '@vuelidate/core'
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

export default {
    name: 'LoginView',
    components: {
    },
    setup() {

        const state = reactive({
            email: '',
            password: ''
        })

        const campoObrigatorio = '* Campo obrigatório';

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
                alert('Sucesso')
            }
        }

        return { state, campoObrigatorio, login, v$ }
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
</style>