import {Component, OnInit, RendererFactory2} from '@angular/core';
import {Injectable, Renderer2} from '@angular/core';
import {by, element} from 'protractor';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

  renderer: Renderer2;
  begin: boolean;
  premoveX: number;
  premoveY: number;
  premoveEvent: any;
  event: any;
  class: string;
  show: boolean;


  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.begin = true;
    this.show = false;
  }


  move(startEvent: any, x: number, y: number): void {

    if (this.begin === true) {

      this.premoveX = x;
      this.premoveY = y;
      this.premoveEvent = startEvent;
      // tslint:disable-next-line:no-unused-expression
      this.class = this.premoveEvent.srcElement.className.slice(6, 20);
      this.renderer.addClass(this.premoveEvent.target, 'yellow');
      this.begin = false;

    } else {

      this.event = startEvent;
      this.renderer.removeClass(this.premoveEvent.target, 'yellow');
      this.post(this.premoveX, this.premoveY, x, y);
      this.begin = true;

    }
  }

  post(x1: number, y1: number, x2: number, y2: number): void {
    console.log(x1, y1);
    console.log(x2, y2);
    this.put();
  }



  put(): void {
    this.removeclass();
    this.renderer.removeClass(this.premoveEvent.target, this.class);
    this.renderer.addClass(this.event.target, this.class);
    this.show = true;

  }

  removeclass(): void {
    this.renderer.removeClass(this.event.target, 'white_king');
    this.renderer.removeClass(this.event.target, 'black_king');
  }




  input(premove: string, move: string): void {
    const firstEl: HTMLElement = document.getElementById(premove) as HTMLElement;
    firstEl.click();
    const secondEl: HTMLElement = document.getElementById(move) as HTMLElement;
    secondEl.click();
    this.show = false;


  }
}
