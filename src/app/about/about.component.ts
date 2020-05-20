import { Component, OnInit } from '@angular/core';
import { Animations } from '../animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [Animations.Triggers]
})
export class AboutComponent implements OnInit {
  hasAppear : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAppear() {
    console.log("has appeared");
    this.hasAppear = true;
  }

}
