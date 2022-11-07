//Neues Thema: Loops

//Was macht ein Loop?
//ein block von Code der wiederholt ausgeführt wird. 

let zähler = 0;

if (zähler < 5) {
    console.log("Wird ausgeführt");
}

// neues Keyword "while"

//wird unendlich lang ausgeführt
//das while funktioniert wie ein if 
//(ein If was immerwieder ausgeführt wird)
//Loop wird unterbrochen sobald das if-Statement nicht mehr "true" ist
while (zähler < 5) {
    console.log("Wird ausgeführt");
    zähler += 1;
}

//Unterschied zum If!
// If wird nur 0-1 mal ausgeführt
// While wird 0-bis die bedingung nicht mehr true ist



// 3.00 euro
let money = 300;
let colaKracher = 0;
// wenn Money Größer als null ist wird der  Codeblock ausgeführt
if (money > 0) {
    // Es werden 5 cent abgezogen
    money = money - 5;
    console.log("Hier hast du einen Colakracher");
    // Es wird ein Colakracher hinzugefügt
    colaKracher += 1;
    console.log(`Money: ${money}, Colakracher: ${colaKracher}`);
}


// wenn Money Größer als null ist wird der  Codeblock ausgeführt
while (money > 0) {
    // Es werden 5 cent abgezogen
    money = money - 5;
    console.log("Hier hast du einen Colakracher");
    // Es wird ein Colakracher hinzugefügt
    colaKracher += 1;
    console.log(`Money: ${money}, Colakracher: ${colaKracher}`);
}

// Der unterschied hier ist, dass bei der if Funktion nur einmal Geld abgezogen wird 
// bei der while Funktion wird so lange ausgeführt bis money kleiner als 0 ist

// WICHTIG: Wenn das while einmal abgelaufen st kanne es nicht nochmal neu gestartet werden


//! Sonderfälle

let sofortBeenden = false;

//Frühzeitiges ausbrechen aus dem Code
while (money > 0) {
    money = money - 5;
    console.log("Hier hast du einen Colakracher");
    //Frühzeitiges ausbrechen aus dem Code
    // dafür im while ein If statement.
    if (sofortBeenden == true) {
        //mit dem Break wird der Loop sofort beendet 
        break;
    }
    colaKracher += 1;
    console.log(`Money: ${money}, Colakracher: ${colaKracher}`);
}
colaKracher = 0;
money = 300;
while (money >= 5) {
    money = money - 5;
    console.log("Hier hast du einen Colakracher");
    //Frühzeitiges ausbrechen aus dem Code
    // dafür im while ein If statement.
    colaKracher += 1;
    if (money > 0) {
        //continue sagt "fang wieder von vorne an"
        //wenn der Kontostand 0 ist  wird der nachfolgende code (das console log) nicht ausgeführt und es wird wieer von vorne angefangen
        // das Console.log wird nur ausgeführt sobald das if statemant false ist.
        continue;
    }
    console.log(`Money: ${money}, Colakracher: ${colaKracher}`);
}

// erst ausführen und dann checken ob die Bedingung true ist 

//do-while Loop
// do {
//     //  code der ausgeführt werden soll
// } while ("bedinung");

zähler = 0;

do {
    console.log("Zähler: " + zähler);
    zähler++;
    // wird ausgeführt bis das while true ist 
} while (zähler < 5);

money = 300;
colaKracher = 0;
do {
    colaKracher++;
    money = money - 5;
    console.log(`Money: ${money}, Colakracher: ${colaKracher}`);
} while (money >= 5);


// For Loop

// for (epxpression 1, exporession2, expression3){
//code
//}
//expression 1 = wird einmal ganz am Anfang ausgeführt (z.B. definition einer Variable)
//expression 2 = das "IF" , Die Bedinung die erfüllt sein muss, damit der code weiterhin ausgeführt wird.
//expression 3 = Wird jedes mal am Ende des code Blocks ausgeführt. wird verwendet um unsere Variable zu verändern. Wird immer als letztes ausgeführt (ganz am Ende vom Code)
for (let zähler = 0; zähler < 5; zähler = zähler + 1) {
    console.log(zähler);
}


//ColaKracher als for Loop
colaKracher = 0;
money = 0;
for (let money = 300; money >= 5; money = money - 5) {
    colaKracher += 1;
    console.log(`Money: ${money}, Colakracher: ${colaKracher}`);
    // expression 3 wird hier ausgeführt. 
}

let fruits = ["apple", "mango", "banana"];
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    console.log(i, fruit);
}

fruits.forEach((fruit) => console.log(fruit));


// for-of loop

for (let fruit of fruits) {
    console.log(fruit);
}

let text = "Javascript";
for (let j of text) {
    console.log(j);
}