const transaction = document.querySelector('.transaction');
const indexPage = document.getElementById('index');
const historyPage = document.querySelector('.history');
const historyContent = document.getElementById('content');

transaction.addEventListener('click', ()=>{
  indexPage.style.opacity = "0";
  historyPage.style.pointerEvents = "auto";
  historyPage.style.opacity = "1";
  historyContent.textContent = "No transaction";
});

function goBack(){
  indexPage.style.opacity = "1";
  indexPage.style.pointerEvents = "auto";
  historyPage.style.pointerEvents = "none";
  historyPage.style.opacity = "0";
};

/*Add Money*/
const addMoney = document.querySelector('.add-money');
const addMoneyModal = document.querySelector('.add-money-modal');

addMoney.addEventListener('click', ()=>{
  indexPage.style.opacity = "0";
  addMoneyModal.style.opacity = "1";
});

/*Toggle Balance*/

let balance = 00.00;
let isVisible = true;

document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
  const savedPreference = localStorage.getItem('balanceVisible');

  if (savedPreference !== null) {
    isVisible = savedPreference === 'true';
  }

  updateBalanceUI();
}

const toggleBtn = document.querySelector('.toggle-balance');

toggleBtn.addEventListener('click', () => {
  isVisible = !isVisible;

  localStorage.setItem('balanceVisible', isVisible);

  updateBalanceUI();
});

const balanceDisplay = document.querySelector('.balance');

function updateBalanceUI() {
  if (isVisible) {
    balanceDisplay.textContent = "₦ " + balance.toLocaleString();
  } else {
    balanceDisplay.textContent = "••••••";
  }
}