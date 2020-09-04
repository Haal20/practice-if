//skapar mina variablar
let minButton = document.getElementById("myButton");

minButton.addEventListener("click", function () {
  let minInput = document.getElementById("myInput").value;
  if (minInput < 18 && minInput > 0) {
    //Skriv ut att personen är för ung
  }
  if (minInput >= 18 && minInput >= 65) {
    //Skriv ut att personen har rätt ålder
  }
  if (minInput > 65) {
    //skriv ut att personen är för gammal
  } else {
    //skriv ut att personen endast får skriva sin ålder i siffror
  }
});
