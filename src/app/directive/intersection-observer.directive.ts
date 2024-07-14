import { Directive, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements OnDestroy {
  @Input() margemRaiz: string = '0px';
  @Input() limite: number[] = [];
  @Output() isIntersecting = new EventEmitter<boolean>();

  private observador!: IntersectionObserver;

  constructor(private elemento: ElementRef) { 
    this.observador = new IntersectionObserver(this.onIntersection.bind(this),{
      root: null,
      rootMargin:this.margemRaiz,
      threshold: this.limite
    })

    this.observador.observe(this.elemento.nativeElement)
  }

  private onIntersection(entries: IntersectionObserverEntry[]){
    entries.forEach(entry => {
      this.isIntersecting.emit(entry.isIntersecting);
    })
  }

  ngOnDestroy(): void {
    this.observador.disconnect();
  }

}
