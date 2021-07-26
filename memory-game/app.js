document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
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
    //     {
    //   name: 'tongue',
    //   img: 'assets/tongue.png'
    // },
    // {
    //   name: 'tongue',
    //   img: 'assets/tongue.png'
    // }
  ]

  // create the board
  const grid = document.querySelector('.grid');
  const cardsChosen = [];
  const cardsChosenId = [];

  const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');

      card.setAttribute('src', 'assets/blank.png');
      card.setAttribute('data-id', i);

      // card.addEventListener('click', flipCard);

      grid.appendChild(card);
    }
  }
  
  
  // flip the card
  const flipCard = () => {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
  }
  
  createBoard();
})