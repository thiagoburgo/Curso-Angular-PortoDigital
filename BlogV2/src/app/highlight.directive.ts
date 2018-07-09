import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  @Input('appHighlight')
  highlightColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    const teste = this.renderer.createText('<h1>Teste</h1>');
    const button = this.renderer.createElement('button');
    this.renderer.appendChild(button, teste);
    this.renderer.appendChild(this.el.nativeElement, button);

    // this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
