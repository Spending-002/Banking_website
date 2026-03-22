    let clicked = false;
    
const tranHistory = document.querySelector('.transaction');
const history = document.querySelector('.transaction-history');
const receipt = document.querySelector('.receipt');
const amount = document.getElementById('amount');

tranHistory.addEventListener('click', () => {
  clicked = !clicked;
  if(clicked){
  history.style.height = '30px';
  history.style.border = '1px solid gainsboro';
  }else{
   history.style.height = '0px';
  history.style.border = 'none';
  }
});

const addMoney = document.querySelector('.add-money');
const moneyModal = document.getElementById('addMoney-modal');

addMoney.addEventListener('click', ()=>{
    moneyModal.style.display = 'block';
    bgCover.style.display = 'block';
});

  const copy = document.getElementById('copy');
   let pressTimer = null;
   let isPressing = false;
   
   CONST HOLD_DURATION = 3000;
   copy.addEventListener('ponterdown',(e)=>{
     if(isPressing) return;
     
     isPressing = true;
     
     pressTimer = setTimeout()=>{
       handleLongPress();
       },HOLD_DURATION);
     }
   }
   copy.addEventListener('pointerup', cancelPress);
   copy.addEventListener('pointerleave', cancelPress);
   copy.addEventListener('pointercancel', cancelPress);
   
   function cancelPress(){
     isPressing = false;
     clearTimeout(pressTimer);
   }
   
   function handleLongPress(){
     alert('Copied');
     isPressing = false;
   }