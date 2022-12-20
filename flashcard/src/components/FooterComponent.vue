<template>
    <div v-if="ViewMenu()" class="d-lg-none d-sm-block">
        <nav class="navbar navbar-expand-sm fixed-bottom menu-color">
            <div class=" container-fluid justify-content-center">

                <a class="navbar-item px-4" aria-current="page" href="/">
                    <span class="material-symbols-outlined">
                        home
                    </span>
                </a>
                <a class="navbar-item px-4" href="class">
                    <span class="material-symbols-outlined">
                        web_stories
                    </span>
                </a>
                <a class="navbar-item px-4" href="#">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </a>
                <a class="navbar-item px-4" href="#">
                    <span class="material-symbols-outlined">
                        account_circle
                    </span>
                </a>

            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent',
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