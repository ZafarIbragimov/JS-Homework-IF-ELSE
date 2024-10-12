function hisobla() {
    let mahsulotNomi = document.getElementById("mahsulotNomi").value;
    let narxi = parseFloat(document.getElementById("narxi").value);
    let miqdor = parseInt(document.getElementById("miqdor").value);

    if (isNaN(narxi)) {
        narxi = 0;
    }
    if (isNaN(miqdor)) {
        miqdor = 0;
    }

    let umumiyNarx = narxi * miqdor;

    let natijaText = "Buyum    Narxi   Miqdor  Umumiy Narx\n";
    natijaText += "-----    ------  ------  -----------\n";
    natijaText += `${mahsulotNomi.padEnd(7)} ${narxi.toFixed(2).padStart(6)}   ${miqdor.toString().padStart(6)}   ${umumiyNarx.toFixed(2).padStart(11)}\n`;

    document.getElementById("natijam").textContent = natijaText;
}
