import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {
    $('.menu-toggler').on("click", function () {
      $(this).toggleClass("open");
      $('.top-nav').toggleClass('open');
    });
  }

  closeNav(): void {
    $('.menu-toggler').toggleClass("open");
    $('.top-nav').toggleClass('open');
  }

  scrollToTop() : void {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
}
