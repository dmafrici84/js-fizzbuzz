// Per l'esercizio di oggi, scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3 stampi “Fizz” al posto del numero.
// Per i multipli di 5 stampi "Buzz" al posto del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz" al posto
// del numero.

var j = 0;

for (var i = 1; i < 101; i++) {

  j = i;
  
  if (!(i % 3) && !(i % 5)) {
    j = "FizzBuzz";
  } else if (!(i % 3)) {
    j = "Fizz";
  } else if (!(i % 5)) {
    j = "Buzz";
  }

  console.log(j);
}
