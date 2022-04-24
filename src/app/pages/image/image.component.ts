import {Component} from '@angular/core';
import {ImageService} from "@share/services/image.service";

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent {
    imagesBlob: string[] = [];

    constructor(private imageService: ImageService) {
    }

    getImage(): void {
        const index = this.imagesBlob.push('') - 1;
        this.imageService
            .getData('https://picsum.photos/200/300/?random')
            .subscribe({
                next: (imgData) => {
                    this.imagesBlob[index] = imgData;
                },
                error: (error) => console.log(error)
            });
    }

}
