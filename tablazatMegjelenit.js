export function megjelenit(adat, tablazatElem) {
    tablazatElem.innerHTML += `
        <tr>
            <td>${adat.nev}</td>
            <td>${adat.nemzetiseg}</td>
            <td>${adat.gyozelmek_szama}</td>
        </tr>
    `;
}

export function tablazatMegjelenito(sakkozok, tablazatElem) {
    tablazatElem.innerHTML = "";

    for (let i = 0; i < sakkozok.length; i++) {
        megjelenit(sakkozok[i], tablazatElem);
    }
}

