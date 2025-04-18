let buton1 = document.querySelector(".click");
  let buton = document.querySelector(".hidden");

  buton1.addEventListener("click", function () {
    if (getComputedStyle(buton).display === "none") {
      buton.style.display = "block";
    } else {
      buton.style.display = "none";
    }
  });
  console.log("Display atual:", getComputedStyle(buton).display);
