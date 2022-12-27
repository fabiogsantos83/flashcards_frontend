export default class ClassViewModel {
  constructor(id, name, qtd_lessons) {
    this.id = id;
    this.name = name;
    this.qtd_lessons = qtd_lessons;
    this.edit = false;
    this.nameBeforeEdit = name
  }

  toEdit() {
    this.edit = true;
    this.nameBeforeEdit = this.name;
  }

  rollbackEdit() {
    this.edit = false;
    this.name = this.nameBeforeEdit;
  }

  commitEdit(){
    this.edit = false;
    this.nameBeforeEdit = this.name
  }
}
