
const dropdowns = document.querySelectorAll("[data-dropdown]");

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector(".dropdown-toggle");

  button.addEventListener("click", (e) => {
    e.stopPropagation();

    // close others
    dropdowns.forEach(d => d.classList.remove("active"));

    // open current
    dropdown.classList.toggle("active");
  });
});

// click outside closes all
document.addEventListener("click", () => {
  dropdowns.forEach(d => d.classList.remove("active"));
});

const airtimeType = document.getElementById('airtime-type');
const airtel = document.getElementById('airtel');
const glo = document.getElementById('glo');
const mtn = document.getElementById('mtn');

 airtel.addEventListener('click', function(){
  airtimeType.style.backgroundImage = "url('image/airtel.png')";
 });
 glo.addEventListener('click', function(){
  airtimeType.style.backgroundImage = "url('image/glo.jpeg')";
 });
 mtn.addEventListener('click', function(){
  airtimeType.style.backgroundImage = "url('image/mtn.png')";
 });

