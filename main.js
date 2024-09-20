import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStorage } from "./src/views/store";
import "./style.css"

/*=====ALICACION=====*/

export let categoriaActiva= null;
export const setCategoriaActiva= (categoriaIn)=>{
    categoriaActiva= categoriaIn;
}

export let productoActivo= null;
export const setProductoActivo= (productoIn)=>{
    productoActivo= productoIn;
}

handleGetProductsToStorage();
renderCategories();

/*=====HEADER=====*/

const buttonAdd= document.getElementById("buttonAddElement");
buttonAdd.addEventListener("click", ()=>{
    openModal();
})

//buttonSearch
const buttonSearch= document.getElementById("buttonSearch")
buttonSearch.addEventListener("click", ()=>{
    handleSearchProductByName();
})