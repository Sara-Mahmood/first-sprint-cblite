import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  games:any[] = ['Letter Tracing Game', 'Other Game'];
  constructor() { }

  ngOnInit(): void {
  }

}
