import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimerService {
  // Hold time left text (in seconds)
  private timeLeft = 60;
  // Variable to hold timer subscribe function
  private timerHolder: any;
  // Subject to emit time
  private timeHolderSubject = new Subject<number>();
  constructor() { }

  /**
   * Start the game timer by subscribing to timer object.
   * Send the changed time to subscribe objects.
   */
  startGameTimer() {
    // Rxjs Timer function holder
    this.timerHolder = timer(1000,1000).subscribe(val => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.timeHolderSubject.next(this.timeLeft);
      }
    });
  }

  /**
   * Stop the timer by unsubscribing the timerHolder observable returned by timer
   * function.
   */
  stopGameTimer() {
    this.timerHolder.unsubscribe();
  }

/**
 * Return an Observable to subscribe to timer.
 */
  getTimer(): Observable<number> {
    return this.timeHolderSubject.asObservable();
  }

}
