import { Component, OnInit } from '@angular/core';
import { IEvent } from './events';
import { EventService } from './event.service';
import { ActivatedRoute } from '@angular/router';
import { Animations } from '../animation';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [Animations.Triggers]
})
export class TimelineComponent implements OnInit  {
  errorMessage = '';
  expanded = false;
  _selectAll : boolean = true;
  get selectAll(): boolean {
    return this._selectAll;
  }
  set selectAll(value : boolean) {
    let input = document.getElementsByTagName('input');
    this._selectAll = value;
    for(let i = 0; i < input.length; i++) {
      input[i].checked = value;
    }
    this.education = value;
    this.experience = value;
    this.teaching = value;
    this.publication = value;
    this.course = value;
    this.competition = value;
    this.misc = value;
    this.updateSelectAll();
  }

  updateSelectAll () : void {
    if (this._education === true && this._experience === true && this._teaching === true && this._course === true && this._competition === true && this._misc === true) {    //  && this._publication === true
      this._selectAll = true;
      $(document).ready(function() {
        $("#checkboxes span").text('Deselect All');
      }
    );
    }
    if (this._education === false && this._experience === false && this._teaching === false && this._course === false && this._competition === false  && this._misc === false) {  //  && this._publication === false
      this._selectAll = false;
      $(document).ready(function() {
          $("#checkboxes span").text('Select All');
        }
      );
    }
  }

  _education : boolean = true;
  get education(): boolean {
    return this._education;
  }
  set education(value : boolean) {
    this._education = value;
    this.listFilter["education"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll()
  }
  _experience : boolean = true;
  get experience(): boolean {
    return this._experience;
  }
  set experience(value : boolean) {
    this._experience = value;
    this.listFilter["experience"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll()
  }
  _teaching : boolean = true;
  get teaching(): boolean {
    return this._teaching;
  }
  set teaching(value : boolean) {
    this._teaching = value;
    this.listFilter["teaching"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll();
  }
  _publication : boolean = true;
  get publication(): boolean {
    return this._publication;
  }
  set publication(value : boolean) {
    this._publication = value;
    this.listFilter["publication"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll();
  }
  _course : boolean = true;
  get course(): boolean {
    return this._course;
  }
  set course(value : boolean) {
    this._course = value;
    this.listFilter["course"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll();
  }
  _competition : boolean = true;
  get competition(): boolean {
    return this._competition;
  }
  set competition(value : boolean) {
    this._competition = value;
    this.listFilter["competition"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll();
  }
  _misc : boolean = true;
  get misc(): boolean {
    return this._misc;
  }
  set misc(value : boolean) {
    this._misc = value;
    this.listFilter["misc"] = value;
    this.filteredEvents = this.performFilter(this.listFilter);
    this.updateSelectAll();
  }
  listFilter = {
    "experience": this._experience,
    "education": this._education,
    "teaching": this._teaching,
    "publication": this._publication,
    "course": this._course,
    "competition": this._competition,
    "misc": this._misc,
  };
  filteredEvents: IEvent[]; 
  events: IEvent[] = [];
  hasAppeared: Array<boolean> = new Array(this.events.length);

  constructor(private eventService: EventService, private route: ActivatedRoute) { 
    //super();
    this.updateSelectAll();
  }

  ngOnInit(): void {
    //AOS.init();
    let id : string = this.route.snapshot.paramMap.get('id');
    if (id in this.listFilter) {
      this.experience = false;
      this.education = false;
      this.teaching = false;
      this.publication = false;
      this.course = false;
      this.competition = false;
      this.misc = false;
      switch(id) {
        case "experience": 
          this.experience = true;
          break;
        case "education":
          this.education = true;
          break;
        case "teaching":
          this.teaching = true;
          break;
        case "publication":
          this.publication = true;
          break;
        case "course":
          this.course = true;
          break;
        case "competition":
          this.competition = true;
          break;
        case "misc":
          this.misc = true;
          break;
        default:
          console.log("Warning: I should never have gotten here");
          break;
      }
    }
    this.eventService.getEvents().subscribe({
      next: data => {
        this.events = this.parseData(data);
        this.filteredEvents =  this.performFilter(this.listFilter);
      }, 
      error: err => this.errorMessage = err
    });   
    for (var i = 1; i<this.hasAppeared.length;i++) {
      this.hasAppeared[i] = false;
    }
    this.hasAppeared[0] = true;
    //this.hasAppeared[1] = true;
  }

  parseData(data : IEvent[]) : IEvent[] {
    for (let event of data) {
      if (event.endDate == "Present") {
        event.endDate = new Date();
      }
      else {
        event.endDate = new Date(event.endDate);
      }
      if (data.hasOwnProperty('startDate')) {
        event.endDate = new Date(event.startDate);
      }
    }
    return data.sort((a, b) => b.endDate - a.endDate);
  }

  performFilter( filterBy: Object) : IEvent[] {
    let temporalEvent : IEvent[] = [];
    for (var event of this.events) {
      if (filterBy.hasOwnProperty(event.eventName)) {
        if (filterBy[event.eventName]) {
          //console.log(temporalEvent);
          temporalEvent.push(event);
        }
      }
      else {
        console.log("Warning, unknown property " + event.eventName);
      }
      
    }
    return temporalEvent;
  }

  showCheckboxes() : void {
    var checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }

  onAppear(variable : number){
    this.hasAppeared[variable] = true;
    console.log("I have appeared!");
  }
}
