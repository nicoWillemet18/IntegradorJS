import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

/*=====POPUP=====*/

const cancelButton= document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    closeModal();
})

//FUNCIONES ABRIR CERRAR MODAL
export const openModal= ()=>{
    const modal= document.getElementById("modalPopUp");
    modal.style.display= "flex"
    const buttonDelete= document.getElementById("deleteButton");

    if (productoActivo){
        buttonDelete.style.display= "block";
    } else {
        buttonDelete.style.display= "none";
    }

    if (productoActivo) {
        const nombre= document.getElementById("nombre"),
            imagen= document.getElementById("img"),
            precio= document.getElementById("precio"),
            categories= document.getElementById("categoria");
        imagen.value= productoActivo.imagen;
        precio.value= productoActivo.precio;
        nombre.value= productoActivo.nombre;
        categories.value= productoActivo.categories;
    } else {
        
    }
};
export const closeModal= ()=>{
    const modal= document.getElementById("modalPopUp");
    modal.style.display= "none"
    setProductoActivo(null);
    resetModal();
};

const resetModal= ()=>{
    const nombre= document.getElementById("nombre"),
        imagen= document.getElementById("img"),
        precio= document.getElementById("precio"),
        categories= document.getElementById("categoria");
        imagen.value= "";
        precio.value= 0;
        nombre.value= "";
        categories.value= "Seleccione una categoría";
};

const deleteButton= document.getElementById("deleteButton");
deleteButton.addEventListener("click",()=>{
    handleButtonDelete();
});
const handleButtonDelete= ()=>{
    handleDeleteProduct();
}