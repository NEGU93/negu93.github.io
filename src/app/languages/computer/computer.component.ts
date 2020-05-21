import { Component, OnInit } from '@angular/core';
//import 'src/app/languages/computer/script.js';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit { 
  url = "assets/js/velocity.js";
  loadAPI : any;

  constructor() { }

  ngOnInit(): void {
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });
    $(".skillbars").each(function(idNr) {
      var color = $(this).attr('data-color'),
      percent = $(this).attr('data-pr'),
      caption = $(this).attr('data-cap'),
      heightBar = $(this).attr('data-height'),
      widthBar = $(this).attr('data-width'),
      skillLevel = "";
      let getPerAsNum;
      if (!heightBar) {
        heightBar = "5px";
      }
      if (!widthBar) {
        widthBar = "400px";
      }
      getPerAsNum = parseInt(percent.split("%")[0], 10);
      if (getPerAsNum < 50) {
        skillLevel = "Basic";
      }
      else if ( getPerAsNum < 70 ) {
        skillLevel = "Standard";
      }
      else if ( getPerAsNum < 90 ) {
        skillLevel = "Advanced";
      }
      else if ( getPerAsNum <= 100 ) {
        skillLevel = "Expert";
      }
      let text: string = "";
      let para = this.querySelector("p");
      if (para) {
        console.log(this.querySelector("p"));
        text = para.innerHTML;
        para.parentNode.removeChild(para);
      }

  
      var skillHtml = "<div class='skillbar'>" +
        "<h1 style='display: none; margin-bottom: .2em; margin-top: 1rem; color: #34495e; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 100;'>" + caption + "</h1>" +
        "<div class='skillbg' style='display: none; width: " + widthBar + "; height: " + heightBar + "; background-color: #BFBFBF;'>" +
        "<div class='skill-skill-" + idNr + "' style='background-color: " + color + "; height: " + heightBar + ";' />" +
        "</div>" +
        "<p>" + skillLevel + " | " + percent + "</p>" +
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

  loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  skillBarAnimate( skill : string ) : void {
    console.log("animate skill bar");
    let percent : string = $("div.skill-skill-" + skill).attr('data-pr');
    let getPerAsNum = parseInt(percent.split("%")[0], 10);
    let skillLevel : string;
    if (getPerAsNum < 50) {
      skillLevel = "Basic";
    }
    else if ( getPerAsNum < 70 ) {
      skillLevel = "Standard";
    }
    else if ( getPerAsNum < 90 ) {
      skillLevel = "Advanced";
    }
    else if ( getPerAsNum <= 100 ) {
      skillLevel = "Expert";
    }
    var skillHtml = "<div><p style='display: none; margin-bottom: 3rem;'>" + skillLevel + " | " + percent + "</p></div>";
    $(".skill-text").html(skillLevel + " | " + percent );

    $(".skill-skill-" + skill).css({ width: '0px' });

    $("div.skill-skill-" + skill).animate({
      width: percent
    }, 1500);
  }

}
