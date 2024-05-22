import { ref } from "vue";
import { defineStore } from  "pinia"; 

export const useProductsStore = defineStore('products', () =>{
    const products = ref([]); 
    const URL = "https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/products"

    const fetchProducts = async () =>{
        const request = await fetch(URL); 
        const response = await request.json(); 
        products.value = response;
        
    }
    return{products,fetchProducts}

})