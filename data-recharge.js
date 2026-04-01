
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

/*Airttime Toggle*/
const networkItems = document.querySelectorAll(".dropdown-item");
const display = document.getElementById("data-type");

networkItems.forEach(item => {
  item.addEventListener("click", () => {
    const src = item.src;
    display.innerHTML = `<img src="${src}" style="width:30px; height: 30px; border-radius: 100%;">`;
    item.closest(".dropdown").classList.remove("active");
  });
});

const flashy = document.getElementById('flashy');
const daily = document.getElementById('daily');
const bestOffer = document.getElementById('best-offer');
const dailyOffer = document.getElementById('daily-offer');

daily.addEventListener('click',()=>{
  daily.style.border = "1px solid navy";
  daily.style.padding = "3px";
  daily.style.borderRadius = "5px";
  daily.style.textAlign = "center";
  daily.style.background = "navy"
  daily.style.color = "white";
  daily.style.fontWeight = "bold";
  bestOffer.style.opacity  = "0";
  bestOffer.style.display  = "none";
  bestOffer.style.pointerEvents = "none";
  dailyOffer.style.opacity  = "1";
  dailyOffer.style.pointerEvents = "auto";
  dailyOffer.style.display  = "grid";
});
flashy.addEventListener('click',()=>{
  daily.style.border = "none";
  daily.style.padding = "0";
  daily.style.borderRadius = "0";
  daily.style.textAlign = "center";
  daily.style.background = "white"
  daily.style.color = "black";
  daily.style.fontWeight = "normal";
  bestOffer.style.opacity  = "1";
  bestOffer.style.display  = "grid";
  bestOffer.style.pointerEvents = "auto";
  dailyOffer.style.opacity  = "0";
  dailyOffer.style.pointerEvents = "none";
  dailyOffer.style.display  = "none";
})