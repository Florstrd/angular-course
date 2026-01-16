import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  standalone: false,
  templateUrl: './json-pipe.html',
  styleUrl: './json-pipe.css',
})
export class JsonPipe {
  testObject = { name: 'Sam', age: 51, job: 'Teacher' };
  testArray = [5, 15, 53, 1, 2];
}
