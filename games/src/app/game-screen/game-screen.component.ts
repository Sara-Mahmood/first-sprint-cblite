import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements AfterViewInit {
  showMe = false;


  @ViewChild('gameCanvas')
  gameCanvas?: ElementRef<HTMLCanvasElement>;

  public context?: CanvasRenderingContext2D | null;


  constructor() { }

  ngAfterViewInit(): void {
    this.showMe = true;
    
    if (this.gameCanvas?.nativeElement.getContext('2d') != null){
      this.context = this.gameCanvas?.nativeElement.getContext('2d');
    }
    
  }

}
