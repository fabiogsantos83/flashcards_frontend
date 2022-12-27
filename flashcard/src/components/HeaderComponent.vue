<template>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top menu-color">
            <div class="container-fluid">
                <a href="/" class="navbar-brand px-4">
                    Flashcards
                </a>

                <div v-if="ViewMenu()" class="collapse navbar-collapse justify-content-end px-4" id="menuTop">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">
                                <span class="material-symbols-outlined align-middle">cognition</span>
                                <span class="align-middle"> Estudar</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="class">
                                <span class="material-symbols-outlined align-middle">add_to_photos</span>
                                <span class="align-middle"> Cadastrar Aulas</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="search">
                                <span class="material-symbols-outlined align-middle">search</span>
                                <span class="align-middle"> Pesquisar</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span class="material-symbols-outlined align-middle">logout</span>
                                <span class="align-middle"> Sair</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
    },
    methods: {
        ViewMenu() {
            if (this.$route.name === 'login' || this.$route.name === 'add-user')
                return false;
            return true;
        }
    }

}
</script>