import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstpipePipe } from '../firstpipe-pipe';


@Component({
  selector: 'app-custom-pipe',
  imports: [FormsModule, FirstpipePipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css'
})
export class CustomPipe {
  outputString:string = "";
  inputString:string = "";

  transformString() {
    this.outputString = this.inputString;
  }
}
