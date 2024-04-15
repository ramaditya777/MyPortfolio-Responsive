// Variables for handling the navigation menu
const sidemenu = document.getElementById("sidemenu");

// Functions to open and close the navigation menu
function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// Function to switch between tabs in the "About Me" section
function opentab(tabname) {
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  document.getElementById(tabname).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}

//Google Sheet form submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxgLSoQzrGAyfBa1b6li_YByfiefOmUmHa-dU8lJ60xOTAVfyRp_YpFxZA09UvE7N5ttg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.textContent = "Message sent successfully!";
      setTimeout(() => {
        msg.textContent = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbxgLSoQzrGAyfBa1b6li_YByfiefOmUmHa-dU8lJ60xOTAVfyRp_YpFxZA09UvE7N5ttg/exec";
// const form = document.forms["submit-to-google-sheet"];
// const msg = document.getElementById("msg");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       msg.innerHTML = "Message send successfully";
//       setTimeout(function () {
//         msg.innerHTML = "";
//       }, 5000);
//       form.reset();
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
