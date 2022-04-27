// import Producto from "./modules/producto.js";

import { starWars, consolas, diversos } from "./modules/listas.js";
import {
  createList,
  listaStarwars,
  listaConsolas,
  listaDiversos,
} from "./modules/createList.js";

createList(listaStarwars, starWars);
createList(listaConsolas, consolas);
createList(listaDiversos, diversos);