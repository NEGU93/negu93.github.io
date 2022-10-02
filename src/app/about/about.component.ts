import { Component, OnInit } from '@angular/core';
import { Animations } from '../animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [Animations.Triggers],
})
export class AboutComponent implements OnInit {
  hasAppear: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onAppear() {
    this.hasAppear = true;
  }
}
