import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'

@Component({
  selector: 'app-canvas',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements AfterViewInit {
  showMe = true;


  @ViewChild('gameCanvas')
  gameCanvas?: ElementRef<HTMLCanvasElement>;

  public context?: CanvasRenderingContext2D | null;


  constructor() { }

  ngAfterViewInit(): void {
    this.showMe = true;
    this.context = this.gameCanvas?.nativeElement.getContext('2d');
    
  }

}
