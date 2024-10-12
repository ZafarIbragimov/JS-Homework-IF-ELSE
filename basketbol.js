function hisoblaOchko() {
    let uchOchko = document.getElementById("uchOchko").value;
    let ikkiOchko = document.getElementById("ikkiOchko").value;

    uchOchko = parseInt(uchOchko);
    ikkiOchko = parseInt(ikkiOchko);

    if (isNaN(uchOchko)) {
        uchOchko = 0;
    }
    if (isNaN(ikkiOchko)) {
        ikkiOchko = 0;
    }

    let yakuniyOchko = uchOchko * 3 + ikkiOchko * 2;

    document.getElementById("natija").innerHTML = "Yakuniy ochko: " + yakuniyOchko;
}
