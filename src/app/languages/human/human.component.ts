import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".skillbars").each(function(idNr) {
      var color = $(this).attr('data-color'),
      percent = $(this).attr('data-pr'),
      caption = $(this).attr('data-cap'),
      heightBar = $(this).attr('data-height'),
      //widthBar = $(this).attr('data-width'),
      skillLevel = "";
      let getPerAsNum;
      if (!heightBar) {
        heightBar = "5px";
      }
      /*if (!widthBar) {
        widthBar = "300px";
      }*/
      getPerAsNum = percent.split("%");
      if (getPerAsNum[0] == 25 || getPerAsNum[0] < 15) {
        skillLevel = "A1";
      }
      else if (getPerAsNum[0] <= 55) {
        skillLevel = "A2";
      }
      else if (getPerAsNum[0] <= 65) {
        skillLevel = "B1";
      }
      else if (getPerAsNum[0] <= 75) {
        skillLevel = "B2";
      }
      else if (getPerAsNum[0] <= 85) {
        skillLevel = "C1";
      }
      else if (getPerAsNum[0] <= 95) {
        skillLevel = "C2";
      }
      else {
        skillLevel = "native";
      }
      let text: string = "";
      let para = this.querySelector("p");
      if (para) {
        console.log(this.querySelector("p"));
        text = para.innerHTML;
        para.parentNode.removeChild(para);
      }

  
      var skillHtml = "<div class='skillbar'>" +
        "<h1 style='display: none; margin-bottom: .2em; margin-top: 2rem; color: #34495e; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 100;'>" + caption + "</h1>" +
        "<div class='skillbg' style='display: none; max-width: 500px; height: " + heightBar + "; background-color: #BFBFBF;'>" +
        "<div class='skill-skill-" + idNr + "' style='background-color: " + color + "; height: " + heightBar + ";' />" +
        "</div>" +
        "<p style='display: none; margin-bottom: 3rem;'>" + skillLevel + " | " + text + "</p>" +
        "</div>";
      setTimeout(function() {
        $(".skill-skill-" + idNr).css({
          width: '0px'
        });
        $(".skillbar h1").fadeIn(500, function() {
          $(".skillbg").fadeIn(500, function() {
            $(".skillbar p").fadeIn(500, function() {
              $("div.skill-skill-" + idNr).animate({
                width: percent
              }, 1500);
            });
          });
        });
      }, 100);
      $(this).prepend(skillHtml);
    });
  }

  openPdf(e, path, redirect) {
    // stop the browser from going to the href
    e = e || window.event; // for IE
    e.preventDefault(); 

    // launch a new window with your PDF
    window.open(path, 'somename');

    // redirect current page to new location
    window.location = redirect;
  }   

}
