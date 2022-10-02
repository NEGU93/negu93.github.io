import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  currentCategory: string;

  constructor() {
    this.currentCategory = 'computer';
  }

  ngOnInit(): void {}

  setCategory(cat: string) {
    this.currentCategory = cat;
  }
}
