let minButton = document.getElementById("myButton");

minButton.addEventListener("click", function () {
  //låter användarens värde sparas i en variable
  let minInput = document.getElementById("myInput").value;
  //converterar sträng variable till int

  



  if (minInput < 18 && minInput > 0) {
    //Skriv ut att personen är för ung
    document.getElementById("answer").innerHTML = "<h2>Du är för ung...</h2>"
  }
  if (minInput >= 18 && minInput >= 65) {
    //Skriv ut att personen har rätt ålder
    document.getElementById("answer").innerHTML = "<h2>Du har rätt ålder...</h2>"
  }
  if (minInput > 65) {
    //skriv ut att personen är för gammal
    document.getElementById("answer").innerHTML = "<h2>Du är för gammal...</h2>"
  } else {
    //skriv ut att personen endast får skriva sin ålder i siffror
    document.getElementById("answer").innerHTML = "<h2>Skriv din ålder i siffror tack...</h2>"
  }
});