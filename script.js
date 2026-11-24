
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

//  tester från uppgift 4
/*
console.log(add(0, 0));
console.log(add(0, 3));
console.log(add(5, 3));
console.log(add("5", 3));
*/

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

// Test 2
console.log("Test 2");
console.log(add("0", 3));

// Test 3
console.log("Test 3");
console.log(add(3, "num1"));

// Test 4
console.log("Test 4");
console.log(add(-5, num1));

// Test 5
console.log("Test 5");
console.log(add(arg1, 7));

// Test 6
console.log("Test 6");
console.log(add());

// Skriv ut num1 och sum
console.log(num1);
console.log(sum);


/*
Reflektion uppgift 5

1. Förklarar skillnaden mellan parameter, variabel och argument.

En parameter är en plats i funktionsdefinitionen
där ett värde kan skickas in när funktionen anropas.

En variabel är ett namn som refererar till ett värde

Ett argument är det faktiska värdet som skickas
till en funktion när den anropas.

2. Vilket output får du allra sist (värdet i num1) och varför?

num1 skriver ut 0 eftersom det är det värde som tilldelats
variabeln num1. Variabeln sum är false, men det påverkar inte
num1 eftersom de är separata variabler.

3. Förklarar steg för steg vad som händer i funktionen när den anropas: vilka värden parametrarna får, vad jämförelserna och villkorsoperatorn ger, om if-satsen släpps igenom, och vilket värde som returneras. Det räcker att göra hela genomgången för ett av anropen – för övriga anrop räcker det att förklara returvärdet.

Test 1: add(sum, 1)

- Parametrarna får värdena sum = false och num2 = 1.
jämförelserna:
num1 == 0  // true
num2 === "0"  // false
num2 === 0  // false
num1 == NaN  // false

Den första jämförelsen blir true eftersom num1 är false, vilket är falsy och jämförs med 0.
Den andra jämförelsen blir false eftersom num2 är 1, vilket inte är lika med strängen "0". 
Den tredje jämförelsen blir false eftersom num2 är 1, vilket inte är lika med 0.
Den fjärde jämförelsen blir false eftersom num1 är false, vilket inte är lika med NaN.

if-satsen släpps inte igenom eftersom num1 är falsy och inte uppfyller villkoren för att addera talen.
Returvärdet blir "Felaktiga värden" eftersom if-satsen inte uppfylls.

Test 2: add("0", 3)

Funktionen returnerar "Felaktiga värden"
eftersom "0" är en sträng och inte ett tal.


Test 3: add(3, "num1")

Funktionen returnerar "Felaktiga värden"
eftersom "num1" är en sträng.


Test 4: add(-5, num1)

Båda argumenten är tal.
Funktionen adderar -5 och 0.
Funktionen returnerar -5.


Test 5: add(arg1, 7)

arg1 har värdet undefined.
Funktionen returnerar "Felaktiga värden".


Test 6: add()

Inga argument skickas till funktionen.
Båda parametrarna blir undefined.

Funktionen returnerar "Felaktiga värden".


Till sist:

num1 skriver ut 0.
sum skriver ut false.

Värdena har inte ändrats eftersom
jag skriver ut funktionens returvärde
direkt med console.log().

*/