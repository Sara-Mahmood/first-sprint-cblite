import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'

@Component({
  selector: 'app-canvas',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements AfterViewInit {
  showMe = false;


  @ViewChild('canvas')
  canvas?: ElementRef<HTMLCanvasElement>;

  @Input() public width = 400;
  @Input() public height = 400;

  private cx?: CanvasRenderingContext2D | null;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement | undefined = this.canvas?.nativeElement;
    this.cx = canvasEl?.getContext('2d');
    if (canvasEl != undefined){
      canvasEl.width = this.width;
      canvasEl.height = this.height;
    }

    if (this.cx != undefined){
      this.cx.lineWidth = 3;
      this.cx.lineCap = 'round';
      this.cx.strokeStyle = '#000';
    }
    
    if (canvasEl != undefined)
      this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    // fromEvent(canvasEl, 'mousedown')
    //   .pipe(
    //     switchMap((e) => {
    //       // after a mouse down, we'll record all mouse moves
    //       return fromEvent(canvasEl, 'mousemove')
    //         .pipe(
    //           // we'll stop (and unsubscribe) once the user releases the mouse
    //           // this will trigger a 'mouseup' event    
    //           takeUntil(fromEvent(canvasEl, 'mouseup')),
    //           // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
    //           takeUntil(fromEvent(canvasEl, 'mouseleave')),
    //           // pairwise lets us get the previous value to draw a line from
    //           // the previous point to the current point    
    //           pairwise()
    //         )
    //     })
    //   )
    //   .subscribe((res: [MouseEvent, MouseEvent]) => {
    //     const rect = canvasEl.getBoundingClientRect();

    //     // previous and current position with the offset
    //     const prevPos = {
    //       x: res[0].clientX - rect.left,
    //       y: res[0].clientY - rect.top
    //     };

    //     const currentPos = {
    //       x: res[1].clientX - rect.left,
    //       y: res[1].clientY - rect.top
    //     };

    //     // this method we'll implement soon to do the actual drawing
    //     this.drawOnCanvas(prevPos, currentPos);
    //   });
  }

  constructor() { }
  private drawOnCanvas(
    prevPos: { x: number, y: number }, 
    currentPos: { x: number, y: number }
  ) {
    // incase the context is not set
    if (!this.cx) { return; }
  
    // start our drawing path
    this.cx.beginPath();
  
    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
  
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);
  
      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }


}
