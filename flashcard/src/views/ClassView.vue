<template>
  <div class="container-md" style="margin-bottom: 70px;">
    <BreadcrumbComponent className="" lessonName="" />
    <div class="card card-painel">
      <div class="card-header d-flex justify-content-end">
        <div>
          <a href="#" class="link-success"><span class="material-symbols-outlined">done</span></a>
          <a href="#" class="link-secondary"><span class="material-symbols-outlined">cancel</span></a>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-start">
          <div class="col">
            <label for="className" class="form-label">Nome da Aula</label>
            <input type="text" class="form-control" placeholder="Nome da Aula" id="className"> 
          </div> 
        </div>
      </div>
    </div>

    <div class="card card-painel mt-4">
      <div class="card-header d-flex justify-content-end">
        <div>          
          <a href="#" class="link-primary"><span class="material-symbols-outlined">edit</span></a>
          <a href="#" class="link-danger"><span class="material-symbols-outlined">delete</span></a>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-start">
          <div class="col">
            <h4>Inglês</h4>
            <a href="/lesson">
              <span class="badge bg-secondary mt-2">32 lições</span>
            </a>
          </div> 
        </div>
      </div>
    </div>

    <div class="card card-painel mt-4">
      <div class="card-header d-flex justify-content-end">
        <div>          
          <a href="#" class="link-primary"><span class="material-symbols-outlined">edit</span></a>
          <a href="#" class="link-danger"><span class="material-symbols-outlined">delete</span></a>
        </div>
      </div>
      <div class="card-body">
        <div class="row text-start">
          <div class="col">
            <h4>Português</h4>
            <a href="/lesson">
              <span class="badge bg-secondary mt-2">Criar lições</span>
            </a>
          </div> 
        </div>
      </div>
    </div>


    <div class="card card-painel mt-4">
      <div class="card-body">
        <a href="#">+ Adicionar Aula</a>
      </div>
    </div>  
  </div>

</template>

<script>

import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'

export default {
  name: 'ClassView',
  components: {
    BreadcrumbComponent
  }
}
</script>