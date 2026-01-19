import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
  standalone: false,
})
export class ChangeBg {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBg('grey')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBg('white')
  }

  private changeBg(color: string) {
    this.renderer.setStyle(this.element.nativeElement.parentElement, "background-color", color);
  }

}
