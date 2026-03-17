import { tablazatMegjelenito } from "./tablazatMegjelenit.js";

export function rendezesEsemenykezelok(lista, szuloElem) {
  let nevNo = document.getElementById("novekvo");

  nevNo.addEventListener("click", function () {
    lista.sort((a, b) => (a.nev < b.nev ? -1 : 1));
    tablazatMegjelenito(lista, szuloElem);
  });
}

export function rendezesEsemenykezelokCsokk(lista, szuloElem) {
  let csokkenoNev = document.getElementById("csokkeno");

  csokkenoNev.addEventListener("click", function () {
    lista.sort((a, b) => (a.nev > b.nev ? -1 : 1));
    tablazatMegjelenito(lista, szuloElem);
  });
}

export const OSZLOPOK = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
};

export function sakkSzamolas() {
  let pozicio1Elem = document.querySelector("#pozicio1");
  let pozicio2Elem = document.querySelector("#pozicio2");
  let gombElem = document.querySelector("#ellenoriz-gomb");
  let eredmenyElem = document.querySelector("#eredmeny");

  gombElem.addEventListener("click", function () {
    let elsoOszlop = pozicio1Elem.value[0]?.toLowerCase();
    let elsoErtek = Number(pozicio1Elem.value[1]);

    let masodikOszlop = pozicio2Elem.value[0]?.toLowerCase();
    let masodikErtek = Number(pozicio2Elem.value[1]);

    if (
      !OSZLOPOK[elsoOszlop] ||
      !OSZLOPOK[masodikOszlop] ||
      elsoErtek < 1 || elsoErtek > 8 ||
      masodikErtek < 1 || masodikErtek > 8
    ) {
      eredmenyElem.textContent = "Hibás bemenet! (pl: e4)";
      return;
    }

    if (elsoOszlop === masodikOszlop) {
      eredmenyElem.textContent = "Ütik egymást oszlopban!";
    } else if (elsoErtek === masodikErtek) {
      eredmenyElem.textContent = "Ütik egymást sorban!";
    } else if (
      Math.abs(OSZLOPOK[elsoOszlop] - OSZLOPOK[masodikOszlop]) ===
      Math.abs(elsoErtek - masodikErtek)
    ) {
      eredmenyElem.textContent = "Ütik egymást átlóban!";
    } else {
      eredmenyElem.textContent = "Nem ütik egymást.";
    }
  });
}