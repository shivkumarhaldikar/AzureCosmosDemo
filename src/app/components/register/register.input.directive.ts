import { HostListener, Directive } from '@angular/core';

@Directive({
    selector: '[appInput]'
  })

  export class AppInputDirective {
  private lable: any;
  @HostListener('focus', ['$event'])
  @HostListener('keyup', ['$event'])
  @HostListener('blur', ['$event'])
  OnKeyUp(e: any) {
    this.lable = e.target.previousElementSibling;
    this.lable.className = '';
    if ((e.type === 'keyup' && e.target.value !== '') || (e.type === 'focus' && e.target.value === '')) {
      this.lable.className = 'active highlight';
    } else if (e.target.value !== '' && (e.type === 'blur' || e.type === 'focus')) {
      this.lable.className = 'active';
    }
  }
}
