import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-holder',
  templateUrl: './cards-holder.component.html',
  styleUrls: ['./cards-holder.component.css']
})
export class CardsHolderComponent implements OnInit {

  public cardsArray = [];
  // Used to enable and disable chances to player
  // Score is incremented only when chace is true
  private chance = false;

  private selectedCard = {};
  public score = 0;

  // Timer function
  private timeInterval = 1000;
  private timer: any;

  constructor() { }

  ngOnInit() {
    this.generateCards();
    this.timer = setInterval(() => {
      this.pickCard();
    }, this.timeInterval);
  }

  /**
   * Generate cards based on hardness level.
   */
  generateCards() {
    for (let index = 1; index <= 4; index++) {
      this.cardsArray.push({
        cardId: index,
        isActive: false
      });
    }
  }

  /**
   * Function to recieve click event from the card component and validate 
   * if the card clicked is the correct card or not.
   * @param cardId Id of the card clicked
   */
  cardClicked(cardId: number) {
    if ((this.selectedCard['cardId'] === cardId) && (this.chance === true)) {
      this.score++;
      this.chance = false;
      clearInterval(this.timer);
      this.pickCard();
      this.timer = setInterval(() => {
        this.pickCard();
      }, this.timeInterval);
    }
  }

  /**
   * Pick card object from cards array and change card color
   */
  pickCard() {
    this.selectedCard['isActive'] = false;
    let card = this.cardsArray[this.pickRandomCardId()];
    while (card === this.selectedCard) {
      card = this.cardsArray[this.pickRandomCardId()];
    }
    this.selectedCard = card;
    this.selectedCard['isActive'] = true;
    this.chance = true;
  }

  /**
   * Function used to generate a random number which is used as a card id.
   * TODO Change max to a constant and remove parameter
   */
  public pickRandomCardId(): number {
    return Math.floor(Math.random() * this.cardsArray.length);
  }

}
