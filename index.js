import { tablazatMegjelenito } from "./tablazatMegjelenit.js";
import { sakkozok } from "./adatok.js";
import { rendezesEsemenykezelok, rendezesEsemenykezelokCsokk, sakkSzamolas } from "./fuggvenyek.js";


let tablazatElem = document.querySelector("#tablazat-torzs");

tablazatMegjelenito(sakkozok, tablazatElem);

rendezesEsemenykezelok(sakkozok,tablazatElem);
rendezesEsemenykezelokCsokk(sakkozok, tablazatElem)


sakkSzamolas()