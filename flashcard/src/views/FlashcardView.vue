<template>
  <div class="container-md">
    <BreadcrumbComponent className="Inglês" lessonName="There" />
    <div class="card card-painel">
      <div class="card-header d-flex justify-content-end">

        <div>
          <a href="#" class="text-end"><span class="material-symbols-outlined">delete</span></a>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-start">
          <div class="col-lg-6 pb-3">
            <label for="front" class="form-label">Frente</label>
            <textarea class="form-control text-area" id="front" rows="3"></textarea>
          </div>
          <div class="col-lg-6 pb-3">
            <label for="back" class="form-label">Verso</label>
            <textarea class="form-control text-area" id="back" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="card card-painel mt-4">
      <div class="card-header d-flex justify-content-end">
        <div>
          <a href="#" class="text-end"><span class="material-symbols-outlined">delete</span></a>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-start">
          <div class="col-lg-6 pb-3">
            <label for="front" class="form-label">Frente</label>
            <textarea class="form-control text-area" id="front" rows="3"></textarea>
          </div>
          <div class="col-lg-6 pb-3">
            <label for="back" class="form-label">Verso</label>
            <textarea class="form-control text-area" id="back" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>


    <div class="card card-painel mt-4">
      <div class="card-body">
        <a href="#">+ Adicionar Cartão</a>
      </div>

    </div>
  </div>

</template>

<script>

import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'

export default {
  name: 'FlashcardView',
  components: {
    BreadcrumbComponent
  }
}
</script>


<style>
.card-painel {
  background-color: rgb(237, 237, 240);
}

.text-area {
  resize: none;
}
</style>