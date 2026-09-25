import { AfterViewInit, Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElapsation]'
})
export class Elapsation implements AfterViewInit{

  private element=inject(ElementRef)
  private render = inject(Renderer2)
  
  ngAfterViewInit(): void {
    const totalText = this.element.nativeElement.innerHTML
    const noOfWords = totalText.trim().split(/\s+/).length
    const wordsPerMinute=30;
    const mint = Math.ceil(noOfWords/wordsPerMinute)
    const elapsTime = this.render.createElement('small')
    this.render.setProperty(elapsTime,'textContent',`Elapse time to read ${mint} min`)
    this.render.setStyle(elapsTime,"color","red")
    this.render.appendChild(this.element.nativeElement,elapsTime)
  }
}