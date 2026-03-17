import { tablazatMegjelenito , rendezes} from "./tablazatMegjelenit.js";
import { sakkozok } from "./adatok.js";


let tablazatElem = document.querySelector("#tablazat-torzs");

tablazatMegjelenito(sakkozok, tablazatElem);
