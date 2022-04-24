import {Directive, ElementRef, OnDestroy, Renderer2} from '@angular/core';
import {fromEvent} from "rxjs";

@Directive({
    selector: '[appDefaultImage]'
})
export class DefaultImageDirective implements OnDestroy {

    defaultImage!: any;

    constructor(
        private el: ElementRef<HTMLImageElement>,
        private renderer: Renderer2,
    ) {
        this.defaultImage = renderer.createElement('img');
        this.defaultImage.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';
        this.defaultImage.style = 'width: 300px';
        this.el.nativeElement.hidden = true;
        this.renderer.appendChild(this.el.nativeElement.parentElement, this.defaultImage);

        const imageElement = this.el.nativeElement;

        fromEvent(imageElement, 'load').subscribe({
            next: (_ => {
                this.renderer.removeChild(this.el.nativeElement.parentElement, this.defaultImage);
                this.el.nativeElement.hidden = false;
            })
        })
    }

    ngOnDestroy(): void {
    }

}
