import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCategorieStore = defineStore('category', () => {
  const URL = "https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/categories"; 
  const categories = ref([]);
  const selectedCategorie = ref(''); 


  async function chamaAPI(){
      const request = await fetch(URL);
      const response = await request.json();
      categories.value = response;           
  }
  const selectCategorie = async (categorieName) => {
    selectedCategorie.value= categorieName;
  }

  
  return{chamaAPI, 
    categories, 
    selectCategorie, 
    selectedCategorie}
})
