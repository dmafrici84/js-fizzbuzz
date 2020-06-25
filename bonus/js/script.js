// Per l'esercizio di oggi, scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto
// del numero.
// Se finite presto, fate come bonus, la stampa su html della sequenza dei numeri e magari ci fate qualche aggiunta estetica. Il tutto rigorosamente in cartella bonus
var numeri = document.getElementById("numeri");
var numeri1 = document.getElementById("numeri1");
var numeri2 = document.getElementById("numeri2");
var numeri3 = document.getElementById("numeri3");
var numeri4 = document.getElementById("numeri4");

var j = 0;

for (var i = 1; i < 21; i++) {
  j = i;
  if (!(i % 3) && !(i % 5)) {
    j = "FizzBuzz";
    numeri.innerHTML += "<li class='fizzbuzz'>" + j + "</li>";
  } else if (!(i % 3)) {
    j = "Fizz";
    numeri.innerHTML += "<li class='fizz'>" + j + "</li>";
  } else if (!(i % 5)) {
    j = "Buzz";
    numeri.innerHTML += "<li class='buzz'>" + j + "</li>";
  } else {
    numeri.innerHTML += "<li>" + j + "</li>";
  }
  console.log(j);
}
for (var i = 21; i < 41; i++) {
  j = i;
  if (!(i % 3) && !(i % 5)) {
    j = "FizzBuzz";
    numeri1.innerHTML += "<li class='fizzbuzz'>" + j + "</li>";
  } else if (!(i % 3)) {
    j = "Fizz";
    numeri1.innerHTML += "<li class='fizz'>" + j + "</li>";
  } else if (!(i % 5)) {
    j = "Buzz";
    numeri1.innerHTML += "<li class='buzz'>" + j + "</li>";
  } else {
    numeri1.innerHTML += "<li>" + j + "</li>";
  }
  console.log(j);
}
for (var i = 41; i < 61; i++) {
  j = i;
  if (!(i % 3) && !(i % 5)) {
    j = "FizzBuzz";
    numeri2.innerHTML += "<li class='fizzbuzz'>" + j + "</li>";
  } else if (!(i % 3)) {
    j = "Fizz";
    numeri2.innerHTML += "<li class='fizz'>" + j + "</li>";
  } else if (!(i % 5)) {
    j = "Buzz";
    numeri2.innerHTML += "<li class='buzz'>" + j + "</li>";
  } else {
    numeri2.innerHTML += "<li>" + j + "</li>";
  }
  console.log(j);
}
for (var i = 61; i < 81; i++) {
  j = i;
  if (!(i % 3) && !(i % 5)) {
    j = "FizzBuzz";
    numeri3.innerHTML += "<li class='fizzbuzz'>" + j + "</li>";
  } else if (!(i % 3)) {
    j = "Fizz";
    numeri3.innerHTML += "<li class='fizz'>" + j + "</li>";
  } else if (!(i % 5)) {
    j = "Buzz";
    numeri3.innerHTML += "<li class='buzz'>" + j + "</li>";
  } else {
    numeri3.innerHTML += "<li>" + j + "</li>";
  }
  console.log(j);
}
for (var i = 81; i < 101; i++) {
  j = i;
  if (!(i % 3) && !(i % 5)) {
    j = "FizzBuzz";
    numeri4.innerHTML += "<li class='fizzbuzz'>" + j + "</li>";
  } else if (!(i % 3)) {
    j = "Fizz";
    numeri4.innerHTML += "<li class='fizz'>" + j + "</li>";
  } else if (!(i % 5)) {
    j = "Buzz";
    numeri4.innerHTML += "<li class='buzz'>" + j + "</li>";
  } else {
    numeri4.innerHTML += "<li>" + j + "</li>";
  }
  console.log(j);
}
