<template>
    <nav aria-label="breadcrumb" class="p-0">
        <ol class="breadcrumb">
            <li v-if="className == ''" class="breadcrumb-item active" aria-current="page">Aulas</li>
            <li v-if="className != ''" class="breadcrumb-item"><a href="class">Aulas ({{ className }})</a></li>


            <li v-if="lessonName == '' && className != ''" class="breadcrumb-item active" aria-current="page">Lições
            </li>
            <li v-if="lessonName != '' && className != ''" class="breadcrumb-item"><a href="lesson?id_class={{idClass}}">Lições
                    ({{ lessonName }})</a></li>

            <li v-if="className != '' && lessonName != ''" class="breadcrumb-item active" aria-current="page">Flashcards
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'BreadcrumbComponent',
    props: {
        className: String,
        lessonName: String,
        idClass: Number
    }
}
</script>