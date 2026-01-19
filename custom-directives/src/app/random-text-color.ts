import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomTextColor]',
  standalone: false,
})
export class RandomTextColor {

  private colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'black',
    'gray'
  ];

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") changeColor() {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.renderer.setStyle(this.element.nativeElement.previousElementSibling, "color", color);
  }

}
