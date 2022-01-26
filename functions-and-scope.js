

// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// Script
// Stap 1: Je begint bij 0, want je wilt iets apart gaan optellen. Dit cijfer kan veranderen dus let gebruiken en declareren.
// Stap 2: Van de cijfers moet je met behulp van een forloop checken wanneer een cijfer hoger is dan 8. Indien hoger dan 8 dan speciale diploma's bestellen indien lager dan niet
// Stap 3: maak gebruik van de .lenght functie zodat de array goed werkt
// stap 4: if grades[i] kleiner of gelijk aan 8 dan

let cumLaudeCount = 0;

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        cumLaudeCount = cumLaudeCount + 1;
    }
}
console.log(cumLaudeCount)

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(gradesArray) {
    let count = 0;

    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] >= 8) {
            count = count + 1;
        }
    }
return count;
}

const diplomasOne = cumLaude([grades]);
const diplomasTwo = cumLaude([6, 4, 5])
const diplomasThree = cumLaude([8, 9, 4, 6, 10])

console.log(diplomasOne);
console.log(diplomasTwo);
console.log(diplomasThree);


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// stap 1: gemiddelde wordt berekend door het aantal cijfers te delen door 2
// stap 2: Je moet de aantallen cijfers verzamelen + het totale van de cijfers
// stap 3: om alle waardes uit de array te gebruiken gebruik maken van de .lenght functie

// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total = total + grades[i];
    }

    console.log(total / grades.length);


// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrade(gradesArray) {
    let total = 0;


    for (let i = 0; i < gradesArray.length; i++) {
    total = total + gradesArray[i];
    }
return total / gradesArray.length;
}

const averageGradeOne = averageGrade(grades);
const averageGradeTwo = averageGrade([6, 4, 5])
const averageGradeThree = averageGrade([8, 9, 4, 6, 10])

console.log(averageGradeOne.toFixed(2));
console.log(averageGradeTwo);
console.log(averageGradeThree);


// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log(averageGradeOne.toFixed(2));

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// stap 1: eerst 0 declareren waar je het hoogtste nummer in gaat opslaan
// stap 2: for loop maken om iedere waarde in de array langs te gaan
// stap 3: als de huidige opgeslagen waarde van grades hoger is dan highestGrade dan die waarde opslaan als nieuwe waarde (en dus hoogste cijfer)

// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

let highestGrade0 = 0;

for (let i = 0; i < grades.length; i++) {
    // als de huidige waarde van grades (grades[i]) hoger is dan mijn huidige opgeslagen waarde
    // sla dan dat nieuwe cijfer op als hoogste waarde!
    if (grades[i] > highestGrade0) {
        highestGrade0 = grades[i];
    }
}

console.log(highestGrade0);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrade(gradesArray) {
    let highestGrade = 0;

    for (let i = 0; i < gradesArray.length; i++) {
        if (gradesArray[i] > highestGrade) {
            highestGrade = gradesArray[i];
        }
    }

return highestGrade;
}

const highestOne = highestGrade(grades);
const highestSecond = highestGrade([6, 4, 5])
const highestThird = highestGrade([8, 9, 4, 6, 10])

console.log(highestOne, highestSecond, highestThird);

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
