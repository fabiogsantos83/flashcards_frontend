<template>
  <div class="container-md" style="margin-bottom: 70px; margin-top: 80px;">
    <BreadcrumbComponent className="" lessonName="" />

    <div v-for="aula of state.listClass" :key="aula.id" class="card card-painel mt-4">

      <div v-if="!aula.edit">
        <div class="card-header d-flex justify-content-end">
          <div>
            <button class="btn btn-sm btn-primary" style="margin-right: 10px;" v-on:click="aula.toEdit()">
              <span class="material-symbols-outlined align-middle">edit</span>
            </button>
            <button class="btn btn-sm btn-danger" v-on:click="deleteClass(aula)">
              <span class="material-symbols-outlined align-middle">delete</span>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row text-start">
            <div class="col">
              <h4>{{ aula.name }}</h4>
              <a v-bind:href="'/lesson?id_class' + aula.id">
                <span v-if="aula.qtd_lessons > 0" class="badge bg-secondary mt-2">{{ aula.qtd_lessons }} lições</span>
                <span v-if="aula.qtd_lessons === 0" class="badge bg-secondary mt-2">Criar lições</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="aula.edit">
        <div class="card-header d-flex justify-content-end ">
          <div>
            <button class="btn btn-sm btn-primary" v-on:click="updateClass(aula)" style="margin-right: 10px;">
              <span class="material-symbols-outlined align-middle">done</span>
            </button>
            <button class="btn btn-sm btn-secondary" v-on:click="aula.rollbackEdit()">
              <span class="material-symbols-outlined align-middle">cancel</span>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row text-start">
            <div class="col">
              <input type="text" class="form-control" v-model="aula.name" placeholder="Nome da Aula" id="className"
                maxlength="100" minlength="2">
            </div>
          </div>
        </div>
      </div>

    </div>

    <div v-if="state.addClass" class="card card-painel mt-4">
      <div class="card-header d-flex justify-content-end ">
        <div>
          <button class="btn btn-sm btn-primary" v-on:click="saveNewClass" style="margin-right: 10px;">
            <span class="material-symbols-outlined align-middle">done</span>
          </button>
          <button class="btn btn-sm btn-secondary" v-on:click="cancelNewClass">
            <span class="material-symbols-outlined align-middle">cancel</span>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-start">
          <div class="col">
            <input type="text" class="form-control" v-model="state.nameNewClass" placeholder="Nome da Aula"
              id="className" maxlength="100" minlength="2">
          </div>
        </div>
      </div>
    </div>


    <div class="d-flex justify-content-end mt-4">
      <button class="btn btn-secondary" style="margin-right: 10px;" v-on:click="back()">
        <span class="material-symbols-outlined align-middle">arrow_back</span>
        <span class="align-middle"> Voltar</span>
      </button>
      <button class="btn btn-primary" v-on:click="addClass()">
        <span class="material-symbols-outlined align-middle">add_to_photos</span>
        <span class="align-middle"> Adicionar Aula</span>
      </button>
    </div>

  </div>

</template>

<script>

import { inject } from 'vue'
import api from '@/services/api.js'
import getUserLogin from '@/helpers/tokenDecriptor.js'
import validateLogin from '@/helpers/validateLogin.js'
import ClassViewModel from '@/models/classViewModel.js'
import { reactive } from '@vue/reactivity';
import handleError from "@/helpers/handleError.js"
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'
import { useRouter } from "vue-router";

export default {
  name: 'ClassView',
  components: {
    BreadcrumbComponent
  },
  setup() {

    const toast = inject('toast')

    if (!validateLogin()) return;

    const user = getUserLogin()
    const router = useRouter()

    const state = reactive({
      listClass: [],
      addClass: Boolean,
      nameNewClass: ''
    })

    state.addClass = false

    function getClasses() {
      api.get('class/list?id_user=' + user.id, {
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      }).then(response => {
        console.log(response.data)
        mapperViewModel(response.data)
      }).catch(error => {
        if (handleError(error, router, toast)) return;        
      });
    }

    function mapperViewModel(data) {

      state.listClass = []

      data.forEach(element => {
        state.listClass.push(new ClassViewModel(element.id, element.name, element.qtd_lessons))
      });

    }

    getClasses()

    function addClass() {
      state.nameNewClass = '';
      state.addClass = true
    }

    function cancelNewClass() {
      state.nameNewClass = '';
      state.addClass = false
    }

    function saveNewClass() {

      let newClass =
      {
        id_user: user.id,
        name: state.nameNewClass
      }

      api.post('class', newClass, {
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      }).then(() => {

        cancelNewClass()
        getClasses()

        toast.success("Aula criada com sucesso!")

      }).catch(error => {
        if (handleError(error, router, toast)) return;        
      });
    }

    function updateClass(aula) {

      let updateClass =
      {
        id: aula.id,
        name: aula.name
      }

      api.put('class', updateClass, {
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      }).then(() => {

        aula.commitEdit()
        toast.success("Aula alterada com sucesso!")

      }).catch(error => {
        if (handleError(error, router, toast)) return;        
      });
    }

    function deleteClass(aula) {
      api.delete('class?id_class=' + aula.id, {
        headers: {
          'Authorization': 'Bearer ' + user.token
        }
      }).then(() => {
        getClasses();
        toast.success("Aula excluida com sucesso!");
      }).catch(error => {
        if (handleError(error, router, toast)) return;        
      });
    }

    function back(){
      router.push('/')
    }

    return { state, addClass, cancelNewClass, saveNewClass, updateClass, deleteClass, back }

  }
}
</script>