import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    ) { }

  ngOnInit() {

  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    console.log(eventData)
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'red');

  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');

  }


}
