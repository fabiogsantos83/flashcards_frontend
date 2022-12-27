<template>

  <div class="container-md" style="margin-top: 80px;">
    <BreadcrumbComponent className="" lessonName="" />
    <div class="accordion col-md-12 mx-auto" id="accordionPanelsStayOpenExample">
      <div v-for="aula of state.listClassLesson" :key="aula.id_class" class="accordion-item">
        <h2 class="accordion-header" v-bind:id="'panelsStayOpen-heading' + aula.id_class.toString()">
          <button class="accordion-button show" type="button" data-bs-toggle="collapse"
            v-bind:data-bs-target="'#panelsStayOpen-' + aula.id_class.toString()" aria-expanded="true"
            v-bind:aria-controls="'panelsStayOpen-' + aula.id_class.toString()">
            <span class="material-symbols-outlined" style="padding-right: 10px;">
              school
            </span>
            {{ aula.name }}
          </button>
        </h2>
        <div v-bind:id="'panelsStayOpen-' + aula.id_class.toString()" class="accordion-collapse collapse show"
          v-bind:aria-labelledby="'panelsStayOpen-heading' + aula.id_class.toString()">
          <div class="accordion-body">

            <div class="row">
              <div v-for="lesson of aula.lessons" :key="lesson.id_lesson" class="col-sm-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div>
                      <h6 class="card-title">{{ lesson.name }}</h6>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">{{ lesson.quantity + ' flashcards' }}</span>
                    <a href="#" class="btn btn-primary">
                      <span class="material-symbols-outlined align-middle">cognition</span>
                      <span class="align-middle"> Estudar</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.card-height {
  height: 200px !important;
}
</style>

<script>
import api from '@/services/api.js'
import getUserLogin from '@/helpers/tokenDecriptor.js'
import validateLogin from '@/helpers/validateLogin.js'
import { reactive } from '@vue/reactivity';
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'

export default {
  name: 'HomeView',
  components: {
    BreadcrumbComponent
  },
  setup() {

    if (!validateLogin()) return;

    const user = getUserLogin()

    const state = reactive({
      listClassLesson: Array
    })


    api.get('class/list-class-lesson?id_user=' + user.id, {
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    }).then(response => {
      console.log(response.data)
      state.listClassLesson = response.data
    }).catch(error => {
      console.log(error);
    });

    return { state }

  }
}
</script>
