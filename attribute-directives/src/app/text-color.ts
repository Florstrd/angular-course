import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true,
})
export class TextColor {

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

  @HostListener('input') onInput() {

    const text = this.element.nativeElement.value.toLowerCase();
    const includedColor = this.colors.find(color => text.includes(color));
    this.renderer.setStyle(this.element.nativeElement, "color", includedColor ?? "black");
    
  }
}
