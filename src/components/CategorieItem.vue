<script setup>
    import { useCategorieStore } from '@/stores/categories';
    import { useRouter } from 'vue-router';

    const store = useCategorieStore(); 
    const router = useRouter(); 
    const props = defineProps(['categorie']);
 

    const onCategorieClick = () => {
        store.selectCategorie(props.categorie.name);
        router.push("/detalhe-categorie")
    }
</script>

<template>
        <div class="list-categories" @click="onCategorieClick">
            <img :src="categorie.image"  alt="img-categoria">
            <h3>{{ categorie.name  }}</h3>
            <span>({{ categorie.quantity }})</span>
        </div>
</template> 

<style>
    .list-categories{
        width: 46%;
        border-radius: 5px;
        border: 1px solid #a9a9a9;
        margin: 5px;
    }

    .list-categories img {
        width: 100%;
    }
</style>