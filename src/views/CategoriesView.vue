<script setup>
    import { onMounted } from 'vue';
    import CategorieItem from '@/components/CategorieItem.vue'
    import ButtonSearch from '@/components/Utils/ButtonSearch.vue'
    
    import { useCategorieStore } from '@/stores/categories';
    
    const store = useCategorieStore();

    onMounted(() => {
        store.chamaAPI();
    })
</script>

<template>
    <main>
        <h1>Categories</h1>
        <ButtonSearch/>

        <div class="categorias">
            <CategorieItem v-for="categorie in store.categories"
             :categorie="categorie"/>
        </div>
    </main>
</template>

<style scoped>
    main{
        color: black;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        padding: 30px;
        padding-top: 96px;
        background-color: rgba(246, 245, 245, 1);
        gap: 20px;
    }
    .categorias{
        display: flex;
        flex-wrap: wrap;
        overflow: scroll;
    }

    ::-webkit-scrollbar {
       width: 10px;
       background: transparent;
    }
</style>