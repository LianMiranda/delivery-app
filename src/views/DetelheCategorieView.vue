<script setup>
    import { useCategorieStore } from '@/stores/categories';
    import { onMounted } from 'vue'
    import { useProductsStore } from '@/stores/products';
    import ButtonSearch from '@/components/Utils/ButtonSearch.vue';

    const categorieStore =  useCategorieStore();
    const productStore = useProductsStore();

    onMounted(() => {
        productStore.fetchProducts();
    })
</script>

<template>
    <main class="main">
        <h1>{{ categorieStore.selectedCategorie }}</h1>
        <!-- <ButtonSearch/> -->
        <p v-for="product in productStore.products">{{ product.name }}</p>
    </main>
</template>

<style scoped>
    .main{
        display: flex;
        flex-direction: column;
    }
</style>