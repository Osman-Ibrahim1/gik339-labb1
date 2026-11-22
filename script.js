/*
    console.log(name);
    console.log(age)
    console.log(school)
    */
{
    
    let name ="Osman Adam";
    const age = 20;
    var school ="Högskolan dalarna";

    
    console.log(name);
    console.log(age)
    console.log(school)
    

  /*
Reflektion uppgift 2

1. Skillnaden mellan var, let och const:

let och const fungerar bara inom blocket
där de skapades.

var fungerar både inuti och utanför blocket.


2. Vad händer med console.log?

Före blocket:
name och age ger fel eftersom de inte
är skapade ännu.
school visar undefined eftersom den
är skapad med var men inte fått sitt värde.

Inuti blocket:
Alla variabler fungerar och skriver ut
sina värden i konsolen.

Efter blocket:
name och age ger fel eftersom de
bara fungerar inom blocket.

school fungerar eftersom den använder var
och skriver ut "Högskolan dalarna".
*/
}
/*
    console.log(name);
    console.log(age)
    console.log(school)
    */

    // uppgift 3
    const add = (num1, num2) => {
        return num1 + num2;


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



    }
