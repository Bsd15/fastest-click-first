import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-holder',
  templateUrl: './cards-holder.component.html',
  styleUrls: ['./cards-holder.component.css']
})
export class CardsHolderComponent implements OnInit {

  public cardsArray = [];

  private selectedCard = {};

  constructor() { }

  ngOnInit() {
    this.generateCards();
    setInterval(() => {
      this.pickCard();
    }, 1500);
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
    console.log('From parent' + cardId);
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
  }

  /**
   * Function used to generate a random number which is used as a card id.
   * TODO Change max to a constant and remove parameter
   */
  public pickRandomCardId(): number {
    return Math.floor(Math.random() * this.cardsArray.length);
  }

}
