class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
  }
  
  createDeck() {
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < ranks.length; x++) {
        this.cards.push(new Card(suits[i], ranks[x], x + 1));
      }
    }

  }  
shuffleDeck () {
  Math.floor(Math.random()* Deck.cards.length)
}

  shuffleDeck();

let deck = new Deck()
console.log(deck)