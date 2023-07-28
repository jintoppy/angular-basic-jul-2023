import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent {
  @Input()
  imgList: string[] = [];

  @Input()
  slideshowTitle: string = '';

  activeIndex = 0;

  next() {
    if (this.activeIndex === this.imgList.length - 1) {
      this.activeIndex = 0;
      return;
    }
    this.activeIndex++;
  }

  prev() {
    if (this.activeIndex === 0) {
      return;
    }
    this.activeIndex--;
  }
}
