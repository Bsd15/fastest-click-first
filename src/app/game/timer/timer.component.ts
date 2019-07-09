import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  public timer: any;

  constructor(public timerService: TimerService) { }

  ngOnInit() {
    this.timerService.getTimer().subscribe(time => {
      if (time > 0) {
        this.timer = time;
      } else {
        this.timer = 'Time up';
      }
    });
  }

}
