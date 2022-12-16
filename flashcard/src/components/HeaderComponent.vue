<template>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top menu-color">
            <div class="container-fluid">
                <a href="/" class="navbar-brand px-4">
                    Flashcards
                </a>

                <div class="collapse navbar-collapse justify-content-end px-4" id="menuTop">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="class">Aulas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="search">Pesquisar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
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

    }
}
</script>