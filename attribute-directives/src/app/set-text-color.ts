import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetTextColor]',
  standalone: true,
})
export class SetTextColor {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input()
  set appSetTextColor(color: string) {
    this.renderer.setStyle(this.element.nativeElement, "color", color || "black")
  }

}
