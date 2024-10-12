function hisobla() {
    let fanNomi = document.getElementById("fanNomi").value;
    let otganlar = parseInt(document.getElementById("otganlar").value);
    let muvaffaqiyatsizliklar = parseInt(document.getElementById("muvaffaqiyatsizliklar").value);
    let kelmaganlar = parseInt(document.getElementById("kelmaganlar").value);

    let jamiTalabalar = otganlar + muvaffaqiyatsizliklar + kelmaganlar;

    if (isNaN(otganlar) || isNaN(muvaffaqiyatsizliklar) || isNaN(kelmaganlar) || jamiTalabalar === 0) {
        document.getElementById("natijam").textContent = "Iltimos, to'g'ri ma'lumotlarni kiriting.";
        return;
    }

    let otishFoizi = (otganlar / jamiTalabalar) * 100;
    let muvaffaqiyatsizlikFoizi = (muvaffaqiyatsizliklar / jamiTalabalar) * 100;
    let kelmaganlarFoizi = (kelmaganlar / jamiTalabalar) * 100;

    let natijaText = `${fanNomi} bo'yicha imtihon natijalari:\n`;
    natijaText += `O'tish foizi: ${otishFoizi.toFixed(1)}%\n`;
    natijaText += `Muvaffaqiyatsizlik foizi: ${muvaffaqiyatsizlikFoizi.toFixed(1)}%\n`;
    natijaText += `Qatnashmaganlar foizi: ${kelmaganlarFoizi.toFixed(1)}%\n`;

    document.getElementById("natijam").textContent = natijaText;
}
