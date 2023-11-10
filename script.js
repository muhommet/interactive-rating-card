const mainContainer = document.querySelector(".card");
const thankYouContainer = document.querySelector(".thank-you");
const submit = document.getElementById("button");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});
rateAgain.addEventListener("click", () => {
  thankYouContainer.classList.add("hidden");
  mainContainer.style.display = "flex";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.textContent = rate.textContent;
  });
});

// function validate() {
//   var ratingButtons = document.getElementsByClassName("btn");
//   var isAnyButtonChecked = false;
// }
// for (var i = 0; i < ratingButtons.length; i++) {
//   if (ratingButtons[i].checked) {
//     isAnyButtonChecked = true;
//     break;
//   }
// }

// if (!isAnyButtonChecked) {
//   alert("Please select a rating before submitting!");
//   return false;
// }
// return true;
