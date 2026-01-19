import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTransform]',
  standalone: true,
})
export class TextTransform {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input()
  set appTextTransform(size: string) {
    this.renderer.setStyle(this.element.nativeElement, "text-transform", size)
  }

}
