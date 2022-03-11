//Card Class
class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

//Deck Class
class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffleDeck();
  }

  createDeck() {
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < ranks.length; x++) {
        this.cards.push(new Card(suits[i], ranks[x], x + 1));
      }
    }
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

let deck = new Deck();
let newDeck1 = deck.cards.splice(0, 26);
let newDeck2 = deck.cards.splice(0);
// console.log(deck)

// Player creation
class Player {
  constructor(hand) {
    this.hand = hand;
  }
}

let playerOne = new Player(newDeck1);
let playerTwo = new Player(newDeck2);

//Verification of Player Hands --> NO ISSUES
// console.log(playerOne.hand, playerOne.hand.length)
// console.log(playerTwo.hand, playerTwo.hand.length)

function playGame() {
  while (playerOne.hand.length > 3 && playerTwo.hand.length > 3) {
    let battleHand = [playerOne.hand.pop(), playerTwo.hand.pop()];

    // Verified hands
    // console.log(battleHand);
    console.log(battleHand, "battleHand");

    //Player 1 vs Player 2 comparison
    breakme: if (battleHand[0].score > battleHand[1].score) {
      playerOne.hand.unshift(...battleHand);
      console.log("player one wins", playerOne.hand.length);
    } else if (battleHand[0].score < battleHand[1].score) {
      playerTwo.hand.unshift(...battleHand);
      console.log("player two wins", playerTwo.hand.length);
    }
    //If its a Tie
    else if (battleHand[0].score === battleHand[1].score) {
      console.log("its a Tie!");
      if (playerOne.hand.length < 4 && playerTwo.hand.length < 4) {
        break breakme;
      }
      let warOn = true;
      let playerOnePot = playerOne.hand.splice(playerOne.hand.length - 4);
      let playerTwoPot = playerTwo.hand.splice(playerTwo.hand.length - 4);
      let pile = [];
      while (warOn) {
        console.log(playerOnePot, playerTwoPot);
        //Comparison of 4th card in tie round
        if (playerOnePot[playerOnePot.length - 1].score > playerTwoPot[playerTwoPot.length - 1].score) {
          playerOne.hand.unshift(...playerOnePot, ...playerTwoPot, ...pile);
          warOn = false;
          console.log("player one wins", playerOne.hand.length);
        } else if (playerOnePot[playerOnePot.length - 1].score < playerTwoPot[playerTwoPot.length - 1].score) {
          playerTwo.hand.unshift(...playerOnePot, ...playerTwoPot, ...pile);
          warOn = false;
          console.log("player two wins", playerTwo.hand.length);
        } else if (playerOnePot[playerOnePot.length - 1].score === playerTwoPot[playerTwoPot.length - 1].score) {
          console.log("its a Tie!");
          pile.push(...playerOnePot, ...playerTwoPot);
          playerOnePot = playerOne.hand.splice(playerOne.hand.length - 4);
          playerTwoPot = playerTwo.hand.splice(playerTwo.hand.length - 4);
          console.log(
            playerOnePot,
            playerOne.hand.length,
            playerTwoPot,
            playerTwo.hand.length
          );
        }
      }
    }
  }

  if (playerOne.hand.length > 0) {
    console.log("player 1 wins!", playerOne.hand.length);
  } else if (playerTwo.hand.length > 0) {
    console.log("player 2 wins!", playerTwo.hand.length);
  }
}
playGame();


//Next Step --> create tie function and call again if another tie

// .pop (last card in array) and compare
// if  statement ==> greater value takes both cards .unshift to front of array

// if score === (splice 4 cards compare 4th card)
