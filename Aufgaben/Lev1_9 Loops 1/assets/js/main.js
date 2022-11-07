let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

function b() {
    let wordinput = document.getElementById("inputword").value;
    words.push(wordinput);
    let wordinputlet = document.getElementById("inputword").value = "";
}
function a() {
    document.getElementById("outputP").innerHTML = "";
    let input = Number(document.getElementById("input").value);
    console.log(input);
    for (let word of words) {
        if (word.length == input) {
            document.getElementById("outputP").innerHTML += (word + "<br>");
        }
    }
}