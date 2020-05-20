import { Component, OnInit } from '@angular/core';
import 'src/app/languages/computer/script.js';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit { 
  

  constructor() { }

  ngOnInit(): void {
    //var require: any;
    //require('src/app/languages/computer/script.js');
    /*var System: any; 
    System.import('script-loader!src/app/languages/computer/script.js').then(file=>{
      //file.test(); // perform additional interactions after the resource has been asynchronously fetched
    });*/
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
