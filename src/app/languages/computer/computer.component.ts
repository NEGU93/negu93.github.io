import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { map, throttleTime, startWith } from 'rxjs/operators';
//import 'src/app/languages/computer/script.js';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit { 
  url = "assets/js/velocity.js";
  loadAPI : any;
  mobile : boolean;
  subscription: Subscription;
  isScreenSmall: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
    // console.log(screen.width);
    // Checks if screen size is less than 700 pixels
    const checkScreenSize = () => document.body.offsetWidth < 700;

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged = fromEvent(window, 'resize').pipe(throttleTime(500), map(checkScreenSize));

    this.isScreenSmall = screenSizeChanged.pipe(startWith(checkScreenSize()))
    this.subscription = this.isScreenSmall.subscribe(data => {
      this.mobile = data;
    });
  }

  ngAfterViewInit() {
    this.loadAnimations();
  }

  loadAnimations() {
    console.log("Load animations");
    if (!this.mobile) {
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
      });
    }
    else {
      this.animateMobileSkillBar();
    }
  }

  animateMobileSkillBar() : void {
    //$( document ).ready(function() {
      $(".skillbars").each(function() {
        let percent = $(this).attr('data-pr');
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
        $(".skill-text", this).html(skillLevel + " | " + percent );
        $(".skill-skill", this).css({ width: '0px' });
        $(".skill-skill", this).animate({
          width: percent
        }, 1500);
      });
    //});
  }

  loadScript() : void {
    console.log("load script");
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  skillBarAnimate( skill : string ) : void {
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
    //var skillHtml = "<div><p style='display: none; margin-bottom: 3rem;'>" + skillLevel + " | " + percent + "</p></div>";
    $(".skill-text").html(skillLevel + " | " + percent );

    $(".skill-skill-" + skill).css({ width: '0px' });

    $("div.skill-skill-" + skill).animate({
      width: percent
    }, 1500);
  }

}
