document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardsArray = [
    {
      name: 'cute',
      img: 'assets/cute.png'
    },
    {
      name: 'cute',
      img: 'assets/cute.png'
    },
        {
      name: 'ear',
      img: 'assets/ear.png'
    },
    {
      name: 'ear',
      img: 'assets/ear.png'
    },
        {
      name: 'play',
      img: 'assets/play.png'
    },
    {
      name: 'play',
      img: 'assets/play.png'
    },
        {
      name: 'sit',
      img: 'assets/sit.png'
    },
    {
      name: 'sit',
      img: 'assets/sit.png'
    },
        {
      name: 'sleepy',
      img: 'assets/sleepy.png'
    },
    {
      name: 'sleepy',
      img: 'assets/sleepy.png'
    },
        {
      name: 'small',
      img: 'assets/small.png'
    },
    {
      name: 'small',
      img: 'assets/small.png'
    },
  ]
  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const results = document.querySelector('#result')
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = []

  // create board
  function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'assets/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'assets/white.png');
      cards[optionTwoId].setAttribute('src', 'assets/white.png');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'assets/blank.png');
      cards[optionTwoId].setAttribute('src', 'assets/blank.png');
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    results.textContent = cardsWon.length;
    if (cardsWon.length === cardsArray.length/2) {
      results.textContent = 'Congratulations! You found them all'
    }
  }
  
  // flip the card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardsArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  
  createBoard();
})