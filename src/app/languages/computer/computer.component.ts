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
