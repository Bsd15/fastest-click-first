import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { GameHolderComponent } from './game-holder/game-holder.component';
import { CardsHolderComponent } from './cards-holder/cards-holder.component';
import { CardComponent } from './card/card.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [GameHolderComponent, CardsHolderComponent, CardComponent, TimerComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    GameHolderComponent
  ]
})
export class GameModule { }
