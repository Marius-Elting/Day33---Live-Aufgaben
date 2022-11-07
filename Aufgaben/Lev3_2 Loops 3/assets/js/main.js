numArr = [5, 22, 15, 100, 55];



for (let num of numArr) {
    for (let x = 2; x < num; x++) {
        let y = num % x;
        if (y == 0) {
            console.log("fuck you");
            let z = num / x;
            console.log(x);
            console.log(y);
            console.log(z);
            document.getElementById("output").innerHTML += `${num} lässt sich durch ${x} teilen! Das Ergebnis ist ${z}` + "<br>";
        }
    }
}

