// for (inicjalizacja; warunek; zwiększenie iteratora) {
//   code
// }

// for (let i = 0; i < 10; i++) {
//   console.log("patrz " + i);
// }


//while

//uruchamia blok kodu tak dlugo jak warunek jest spelniony

// let number = 0;

// while (number < 10) { //wlacznie z 10
//   number++;
//   console.log(number);
// }

//przyklad 2

// let money = 50;
// while (money >= 8) {
//   console.log('mam jeszcze ' + money + 'zlotych, pijem dalej!');
//   money -= 6;
// }

// alert(`za ${money} zł nic juz nie kupie`);

//przyklad 3

// let gas = 40;
// let km = 0;
// while (gas--) {
//   km += 18;
//   console.log(" Przejechałem " + km + " km Zostało nam jeszcze " + gas + " benzynki");
// }

//do .. while


// let study = "nie, wyrzucili mnie"
// do {
//   console.log("ide do szkoły");

// } while (study === true);

// pętla w pętli

// for (let i = 1; i < 3; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(` zmienna i czyli ${i} pomnożona przez j czyli ${j} da wynik ${j*i}`);
//   }
// }

//pętla w tabeli

// const usersAge = [18, 15, 19, 20, 46, 35, 33, 25];

// for (let i = 0; i < usersAge.length; i++) {
//   console.log(`wiek uzytkownika numer ${i} to ${usersAge[i]}`);
// }

// const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];

// for (let i = 0; i < guest.length; i++) {

//   if (guest[i] === "programista") {
//     console.log("przepraszam nie ma już miejsce (nie wpuszczać, (programiści to nudziarze - tylko nie mówić) ")
//   } else if (guest[i] === "polityk") {
//     console.log("Ojej jaka szkoda, nie ma już miejsc (po żadnym pozorem nie wpuszczać! Zepsują każdą imprezę)");
//   } else {
//     console.log("witamy Panie " + guest[i] + ", zapraszamy!");
//   }

// }


//pętla for - of

const colors = ["red", "blue", "white"];

for (const color of colors) {
  console.log(color)
}