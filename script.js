
// Uppgift 2

/*
console.log(name);
console.log(age);
console.log(school);
*/

{
    let name = "Osman Adam";
    const age = 20;
    var school = "Högskolan dalarna";

    console.log(name);
    console.log(age);
    console.log(school);
}

/*
console.log(name);
console.log(age);
console.log(school);
*/

/*
Reflektion uppgift 2

1. Skillnaden mellan var, let och const:

let och const fungerar bara inom blocket
där de skapades.

var fungerar både inuti och utanför
ett vanligt block.

2. Vad händer med console.log?

Före blocket:
Variablerna name och age är inte tillgängliga.
school visar undefined eftersom den
är skapad med var men inte fått sitt värde.

Inuti blocket:
Alla variabler fungerar och skriver ut
sina värden i konsolen.

Efter blocket:
Variablerna name och age är inte tillgängliga
eftersom de bara fungerar inom blocket.

school fungerar eftersom den använder var
och skriver ut "Högskolan dalarna".

Obs: I webbläsaren finns även window.name,
som inte är samma variabel som name i blocket.
*/


// Uppgift 3 och 4

const add = (num1, num2) => {
    console.log(num1 == 0);
    console.log(num2 === "0");
    console.log(num2 === 0);
    console.log(num1 == NaN);

    console.log(num1 ? "truthy" : "falsy");

    if (
        num1 != null &&
        num2 != null &&
        typeof num1 === "number" &&
        typeof num2 === "number" &&
        !Number.isNaN(num1) &&
        !Number.isNaN(num2)
    ) {
        return num1 + num2;
    } else {
        return "Felaktiga värden";
    }
};


/*
Reflektion uppgift 3

1. Om jag använder let istället för const
fungerar funktionen på samma sätt.
Skillnaden är att let kan få ett nytt värde,
men const kan inte tilldelas ett nytt värde.

2. Samma funktion med funktionsdeklaration:

function add(num1, num2) {
    return num1 + num2;
}

3. Return betyder att funktionen skickar
tillbaka ett resultat.

Till exempel om num1 = 5 och num2 = 3
returnerar funktionen 8.
*/


/*
Reflektion uppgift 4

1. Vad är en ternary operator och hur
skiljer den sig från en if-sats?

En ternary operator är ett kortare sätt
att skriva en if/else-sats.

Den har tre delar: ett villkor, ett värde
om villkoret är sant och ett värde
om villkoret är falskt.

Exempel på en ternary operator:

const result = condition ? valueIfTrue : valueIfFalse;

Skillnaden är att ternary är mer kompakt
och kan användas direkt i uttryck,
medan en if-sats kan innehålla flera
rader kod.

2. Vad är skillnaden mellan == och ===?

== jämför värden och kan omvandla datatyper.

=== jämför både värden och datatyper.

Till exempel:

5 == "5"   // true
5 === "5"  // false

3. Hur löste jag if-satsens villkor?

Jag använde != null för att kontrollera
att num1 och num2 inte är null eller undefined.

Jag använde typeof för att kontrollera
att båda är tal.

Jag använde !Number.isNaN() för att kontrollera
att värdena inte är NaN.

Jag använde && eftersom alla villkor
måste vara sanna för att talen ska adderas.
*/


// Uppgift 5

const num1 = 0;
let arg1;
let sum = false;

// Test 1

console.log("Test 1");
console.log(add(sum, 1));
