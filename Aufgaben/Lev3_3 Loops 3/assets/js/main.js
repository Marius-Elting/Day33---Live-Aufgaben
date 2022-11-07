function a() {
    let input = Number(document.getElementById("input").value);
    let osA = [];
    let gar = input % 2;
    console.log(gar);
    document.getElementById("outputP").innerHTML = "";
    if (input == 0) {
        alert("Fehler bitte gebe eine Zahl größer als 0 ein");
        return;
    }
    for (let i = 0; i <= input; i++) {
        if (i == 0) {
            continue;
        }

        if (gar == 0) {
            osA.push("o");
            console.log("gar0");
        } else if (gar !== 0 && i > 1) {
            osA.push("0");
            osA.push("o");
            console.log("gar1");
            i++;
        } else if (i == 1) {
            osA.push("o");
        }

    }
    let osJ = osA.join("");
    osJ.toString();
    document.getElementById("outputP").innerHTML = `l${osJ}p`;
}