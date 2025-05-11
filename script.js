const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let par = 15;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    par--;
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 18);
     card.style.order = ramdomPos;
   });
 })();
  cards.forEach(card => card.addEventListener('click', flipCard));

function time(){
  let min = document.getElementById("Min").innerHTML;
  let interval = setInterval(function(){ 
    min--;  
    document.getElementById("Min").innerHTML = min;
    if (min == 0){
    clearInterval(interval);
    if (par >0){
      alert("Вы проиграли")
    }
     else {
      alert("Вы выйграли!")
    }
  }
  }, 1000)
  

}
time()