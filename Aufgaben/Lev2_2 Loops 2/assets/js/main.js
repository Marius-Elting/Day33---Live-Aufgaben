function a() {
    let input = Number(document.getElementById("input").value);
    let osA = [];

    for (let i = 0; i <= input; i++) {
        if (i == 0) {
            continue;
        }
        console.log(i);
        osA.push("o");
    }
    let osJ = osA.join("");
    osJ.toString();
    document.getElementById("outputP").innerHTML = `l${osJ}p`;

}