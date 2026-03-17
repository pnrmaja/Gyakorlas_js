import { tablazatMegjelenito } from "./tablazatMegjelenit";
export function rendezesEsemenykezelok(lista,szuloElem) {
  let nevNo = document.getElementById("novekvo");

  nevNo.addEventListener("click", function () {
    console.log(this.id);
    lista.sort(function (a, b) {
      return a.nev < b.nev ? -1 : 1;
    });
    tablazatMegjelenito(lista,szuloElem);
  });
}