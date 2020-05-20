import { Component, OnInit } from '@angular/core';
import { Animations } from '../animation';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  animations: [
    Animations.Triggers
  ]
})
export class MeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
