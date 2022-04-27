import { starWars, consolas, diversos, } from "./modules/listas.js";
import { createList, listaStarwars, listaConsolas, listaDiversos } from "./modules/createList.js";

const tiTle = document.querySelector('.name__product');
const price = document.querySelector('.price__product');
const imageProducto = document.querySelector('.container__img');
tiTle.textContent = starWars[1].titulo;
price.textContent = starWars[1].precio;

const lista = document.getElementById('lista');

starWars[1].addEventListener('click', () =>{
    document.imageProducto.style.backgroundImage = "url('assets/multimedia/multimedia/starwars/1ra.png')"
})




createList(lista,starWars)