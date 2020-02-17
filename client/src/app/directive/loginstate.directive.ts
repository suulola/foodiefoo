import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoginstate]'
})
export class LoginstateDirective {

  @Input() appLoginstate: boolean;
  constructor() { }
  

}
