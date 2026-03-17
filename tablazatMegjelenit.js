export function megjelenit(adat, tablazatElem) {
    tablazatElem.innerHTML += `
        <tr>
            <td>${adat.nev}</td>
            <td>${adat.nemzetiseg}</td>
            <td>${adat.gyozelmek_szama}</td>
        </tr>
    `;
}

export function tablazatMegjelenito(lista, tablazatElem) {
    tablazatElem.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        megjelenit(lista[i], tablazatElem);
    }
}