import { Directive, ElementRef, HostListener, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDecoration]'
})
export class Decoration{
  private targetElement = inject(ElementRef)
  private targetRender = inject(Renderer2)

  @HostListener('click')
  onClicked(){
    this.targetElement.nativeElement.style.padding="20px"
    this.targetElement.nativeElement.style.borderRadius="30px"
    this.targetElement.nativeElement.style.boxShadow="10px 10px 10px grey"
  }
  @HostListener('dblclick')
  onDoubleClicked(){
    this.targetElement.nativeElement.style.borderRadius="0px"
    this.targetElement.nativeElement.style.boxShadow="0px 0px 0px white"
    this.targetElement.nativeElement.style.padding="20px"
  }
  

  ngOnInit(): void {
    this.targetRender.setStyle(
      this.targetElement.nativeElement,"width","400px"
    )
    this.targetRender.setStyle(
      this.targetElement.nativeElement,"height","200px"
    )
  }
}
