<template>

  <div class="container-md" style="margin-top: 80px;">
    <h2>Estudar</h2>
    <div class="accordion col-md-10 mx-auto" id="accordionPanelsStayOpenExample">
      <div v-for="aula of state.listClassLesson" :key="aula.id_class" class="accordion-item">
        <h2 class="accordion-header" v-bind:id="'panelsStayOpen-heading' + aula.id_class.toString()">
          <button class="accordion-button show" type="button" data-bs-toggle="collapse"
            v-bind:data-bs-target="'#panelsStayOpen-' + aula.id_class.toString()" aria-expanded="true"
            v-bind:aria-controls="'panelsStayOpen-' + aula.id_class.toString()">
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
                      <h5 class="card-title">{{ lesson.name }}</h5>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">{{ lesson.quantity }}</span>
                    <a href="#" class="btn btn-primary">Estudar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo">
            Português
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">

            <div class="row">
              <div class="col-sm-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div>
                      <h5 class="card-title">This/That/These/Thouse</h5>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">32 flashcards</span>
                    <a href="#" class="btn btn-primary">Estudar</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card ">
                  <div class="card-body">
                    <div>
                      <h5 class="card-title">This/That/These/Thouse</h5>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">32 flashcards</span>
                    <a href="#" class="btn btn-primary">Estudar</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card ">
                  <div class="card-body">
                    <div>
                      <h5 class="card-title">This/That/These/Thouse</h5>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">32 flashcards</span>
                    <a href="#" class="btn btn-primary">Estudar</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card ">
                  <div class="card-body">
                    <div>
                      <h5 class="card-title">This/That/These/Thouse</h5>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">32 flashcards</span>
                    <a href="#" class="btn btn-primary">Estudar</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card ">
                  <div class="card-body">
                    <div>
                      <h5 class="card-title">This/That/These/Thouse</h5>
                    </div>
                    <span class="badge bg-secondary mb-3 d-table m-auto">32 flashcards</span>
                    <a href="#" class="btn btn-primary">Estudar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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

export default {
  name: 'HomeView',
  components: {
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
