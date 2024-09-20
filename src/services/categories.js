import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

/*=====CATEGORIA=====*/

const handleFilterProductsByCategory= (categoryIn)=>{
    const products= handleGetProductLocalStorage();
    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result= products.filter((el)=> el.categories === categoryIn);
            handleRenderList(result);
        case "mayorPrecio":
            const resultPrecioMayor= products.sort((a, b)=> b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break;
        case "menorPrecio":
            const resultPrecioMenor= products.sort((a, b)=> a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break;
        default:
            break;
    };
}

//render de la vista categorías
export const renderCategories= () =>{
    const ulList= document.getElementById("listFilter");
    ulList.innerHTML= `
    <li id= "Todo">Todos los productos</li>
    <li id= "Hamburguesas">Hamburguesas</li>
    <li id= "Papas">Papas</li>
    <li id= "Gaseosas">Gaseosas</li>
    <li id= "mayorPrecio">Mayor Precio</li>
    <li id= "menorPrecio">Menor Precio</li>
    `;
    const liElements= ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click", ()=>{
            handleClick(liElement);
        });
    });
    const handleClick= (elemento) =>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if (el.classList.contains("liActive")){
                el.classList.remove("liActive");
            } else {
                if (elemento===el){
                    el.classList.add("liActive")
                }
            }
        })
    }
}