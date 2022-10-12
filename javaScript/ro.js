!(function (d, s, id) {
  let js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");
function GetClock() {
  let d = new Date();
  let nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();
  let nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds();
  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  let clocktext =
    "" +
    ndate +
    "-" +
    (nmonth + 1) +
    "-" +
    nyear +
    " " +
    nhour +
    ":" +
    nmin +
    ":" +
    nsec +
    "";
  document.getElementById("datetime").innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);

let qr;

function generateQRCode() {
  //functie care imi genereaza codul QR pe baza datelor completate in formularul de Check-In
  let checkin = document.getElementById("check-in");
  let checkout = document.getElementById("check-out");
  let lastName = document.getElementById("lastName");
  let firstName = document.getElementById("firstName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let room = document.getElementById("room");
  let floor = document.getElementById("floor");
  let cardPay = document.getElementById("cardPay");
  let cashPay = document.getElementById("cashPay");

  let data =
    "\r Check-In: " +
    checkin.value +
    " \r\n " +
    "Check-Out: " +
    checkout.value +
    " \r\n " +
    "Last Name: " +
    lastName.value +
    " \r\n " +
    "First Name: " +
    firstName.value +
    " \r\n " +
    "Email: " +
    email.value +
    " \r\n " +
    "Phone: " +
    phone.value +
    " \r\n " +
    "Room: " +
    room.value +
    " \r\n " +
    "Floor: " +
    floor.value +
    " \r\n " +
    "Pay: " +
    cardPay.value +
    " card" +
    " \r\n " +
    +cashPay.value +
    " cash";
  document.getElementById("qr-result").innerHTML =
    "Codul QR pentru rezervarea cu numărul camerei " +
    room.value +
    " si etajul " +
    floor.value;

  qr = new QRious({ element: document.getElementById("qr-code") });
  qr.set({
    foreground: "black",
    size: 200,
    value: data,
  });
}

let aboutUs = document.getElementById("about-us");
let sightseeing = document.getElementById("sightseeing-content");
let grekNights = document.getElementById("greek-nights-content");
let checkInForm = document.getElementById("form-content");

let buttons = Array.from(document.getElementsByClassName("butoane")); //pun butoanele intr-un array
buttons.forEach((button) => button.addEventListener("click", show)); //si iterez prin ele, iar la evenimentul de click pe fiecare afisez continutul corespunzator lor

function show(e) {
  switch (e.target.id) {
    case "aboutBtn":
      aboutUs.style.display = "block";
      sightseeing.style.display = "none";
      grekNights.style.display = "none";
      checkInForm.style.display = "none";
      break;
    case "sightseeingBtn":
      aboutUs.style.display = "none";
      sightseeing.style.display = "block";
      grekNights.style.display = "none";
      checkInForm.style.display = "none";
      break;
    case "greekNightsBtn":
      aboutUs.style.display = "none";
      sightseeing.style.display = "none";
      grekNights.style.display = "block";
      checkInForm.style.display = "none";
      break;
    case "formBtn":
      aboutUs.style.display = "none";
      sightseeing.style.display = "none";
      grekNights.style.display = "none";
      checkInForm.style.display = "block";
      break;
  }
}
