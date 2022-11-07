

// Wir wollen jede Zahl von 0 bis zu der Zahl, die der User in das Input-Feld eingegeben hat, überprüfen.

//Wenn diese Zahl durch eine der ausgewählten Zahlen teilbar ist, soll sie zur Gesamtsumme addiert werden

/*
Bsp: input: 10, select1: 3, select2: 5
    3+5+6+9 = 23
Bsp: input: 10, select1: 4, select2: 7
    4+7+8 = 19
*/

inputToZero = input - 1;

function quickMath() {
    let output = 0;
    let select1 = Number(document.getElementById("select1").value);
    let select2 = Number(document.getElementById("select2").value);
    let input = Number(document.getElementById("input").value);
    console.log(select1);
    console.log(select2);
    output = select1 + select2;

    for (x = 1; x < input; x++) {
        let sel1 = x % select1;
        let sel2 = x % select2;
        console.log(sel1);
        console.log(sel2);
        if (select1 == x || select2 == x) {
            continue;
        }
        if (sel1 == 0) {
            output = output + x;
            console.log("this is x sel1" + x);
        }
        if (sel2 == 0) {
            output = output + x;
            console.log("this is x sel2" + x);
        }
    }

    document.getElementById("outputP").innerHTML = output;
}
