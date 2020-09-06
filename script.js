let minButton = document.getElementById("myButton");

minButton.addEventListener("click", function () {
  //låter användarens värde sparas i en variable
  let minInput = document.getElementById("myInput").value;
  //converterar sträng variable till int
  let minInputInt = parseFloat(minInput, 10);

  if (minInputInt < 18 && minInputInt > 0) {
    //Skriv ut att personen är för ung
    return document.getElementById("answer").textContent = "Du är för ung...";
  }
  if (minInputInt >= 18 && minInputInt >= 65) {
    //Skriv ut att personen har rätt ålder
    return document.getElementById("answer").textContent = "Du har rätt ålder...";
  }
  if (minInputInt > 65) {
    //skriv ut att personen är för gammal
    return document.getElementById("answer").textContent = "Du är för gammal...";
  } else {
    //skriv ut att personen endast får skriva sin ålder i siffror
    return document.getElementById("answer").textContent = "Skriv din ålder i siffror tack...";
  }
});