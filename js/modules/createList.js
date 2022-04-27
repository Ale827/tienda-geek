export function createList(lista, items) {
  const preList = document.createDocumentFragment();

  for (let i = 0; i < items.length; i++) {
    const item = document.createElement("li");
    const img = document.createElement("img");
    const nombreProducto = document.createElement("h3");
    const precio = document.createElement("p");
    const link = document.createElement("a");

    item.classList.add("container__cards-productos");
    link.classList.add('seeProduct')

    img.src = items[i].image;
    nombreProducto.textContent = items[i].titulo;
    precio.textContent = items[i].precio;
    link.href = items[i].enlace;
    link.textContent = "Ver producto";

    item.appendChild(img);
    item.appendChild(nombreProducto);
    item.appendChild(precio);
    item.appendChild(link);

    preList.appendChild(item);
  }

  lista.appendChild(preList);
}



export const listaStarwars = document.querySelector("[data-list-starwars]");
export const listaConsolas = document.querySelector("[data-list-consolas]");
export const listaDiversos = document.querySelector("[data-list-diversos]");
