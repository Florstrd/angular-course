import { Component } from '@angular/core';

@Component({
  selector: 'app-first-pipe',
  standalone: false,
  templateUrl: './first-pipe.html',
  styleUrl: './first-pipe.css',
})
export class FirstPipe {
  today: Date = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
}
