import { Component, OnInit } from '@angular/core';
import { IEvent } from './events';
import { EventService } from './event.service';
import { ActivatedRoute } from '@angular/router';
import { Animations } from '../animation';
// import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [Animations.Triggers]
})
export class TimelineComponent implements OnInit  {
  errorMessage = '';
  expanded = false;
  tagExpanded = false;

  listFilter = {
    "experience" : true,
    "education" : true,
    "teaching" : true,
    "publication" : true,
    "course" : true,
    "competition" : true,
    "misc" : true
  };
  _selectAll : boolean = true;
  get selectAll(): boolean {
    return this._selectAll;
  };
  set selectAll(value : boolean) {
    this._selectAll = value;
    let input = document.getElementsByClassName('label__checkbox') as HTMLCollectionOf<HTMLInputElement>;   // .getElementsByTagName('input')
    for(let i = 0; i < input.length; i++) {
      input[i].checked = value;
    }
    this.listFilter.education = value;
    this.listFilter.experience = value;
    this.listFilter.teaching = value;
    this.listFilter.publication = value;
    this.listFilter.course = value;
    this.listFilter.competition = value;
    this.listFilter.misc = value;
  };
  filteredEvents: IEvent[]; 
  events: IEvent[] = [];
  hasAppeared: Array<boolean> = new Array(this.events.length);
  tagsOfEvents = new Set();
  tagFilter = new Set();

  constructor(private eventService: EventService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    //AOS.init();
    let id : string = this.route.snapshot.paramMap.get('id');
    let start_value = false;
    if (id in this.listFilter) {
      this.selectAll = false;   // This will set all to false automatically.
      this.updateSelectAll();
      start_value = true;
      switch(id) {
        case "experience": 
          this.listFilter.experience = true;
          break;
        case "education":
          this.listFilter.education = true;
          break;
        case "teaching":
          this.listFilter.teaching = true;
          break;
        case "publication":
          this.listFilter.publication = true;
          break;
        case "course":
          this.listFilter.course = true;
          break;
        case "competition":
          this.listFilter.competition = true;
          break;
        case "misc":
          this.listFilter.misc = true;
          break;
        default:
          console.log("Warning: I should never have gotten here");
          break;
      }
    }
    this.eventService.getEvents().subscribe({
      next: data => {
        this.events = this.parseData(data);
        this.filteredEvents =  this.performFilter();
        this.events.forEach(event => event.tags && event.tags.forEach(tag => this.tagsOfEvents.add(tag)));
        //console.log(this.tagsOfEvents);
      }, 
      error: err => this.errorMessage = err
    });   
    for (var i = 1; i<this.hasAppeared.length;i++) {
      this.hasAppeared[i] = start_value;
    }
    this.hasAppeared[0] = true;
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
        event.startDate = new Date(event.startDate); 
      }
    }
    return data.sort((a, b) => b.endDate - a.endDate);
  }

  changeToCheckbox() {
    //console.log("Change done to checkbox");
    this.updateSelectAll();
    this.filteredEvents = this.performFilter();
  }

  performFilter() : IEvent[] {
    let temporalEvent : IEvent[] = [];
    for (var event of this.events) {
      if (this.listFilter.hasOwnProperty(event.eventName)) {
        if (this.listFilter[event.eventName]) {
          if (this.tagFilter.size==0 || (event.tags && event.tags.some((tag) => this.tagFilter.has(tag)))) {
            temporalEvent.push(event);
          }
        }
      }
      else {
        console.log("Warning, unknown property " + event.eventName);
      }
    }
    return temporalEvent;
  }

  showCheckboxes() : void {
    var checkboxes = document.getElementById("type_checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "flex";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
    checkboxes = document.getElementById("tag_checkboxes");
    checkboxes.style.display = "none";
    this.tagExpanded = false;
  }

  showTags() : void {
    var checkboxes = document.getElementById("tag_checkboxes");
    if (!this.tagExpanded) {
      checkboxes.style.display = "flex";
      this.tagExpanded = true;
    } else {
      checkboxes.style.display = "none";
      this.tagExpanded = false;
    }
    checkboxes = document.getElementById("type_checkboxes");
    checkboxes.style.display = "none";
    this.expanded = false;
  }

  onAppear(variable : number){
    this.hasAppeared[variable] = true;
  }

  allTrue() {
    for (var key in this.listFilter) {
      if (this.listFilter.hasOwnProperty(key)) {  // check if the property/key is defined in the object itself, not in parent    
        //console.log(key, this.listFilter[key]);     
        if(!this.listFilter[key]) {
          //console.log("All not true");
          return false;
        }
      }
    }
    //console.log("All true");
    return true;
  }

  allFalse() {
    for (var key in this.listFilter) {
      if (this.listFilter.hasOwnProperty(key)) {  // check if the property/key is defined in the object itself, not in parent    
        //console.log(key, this.listFilter[key]);     
        if(this.listFilter[key]) {
          return false;
        }
      }
    }
    return true;
  }

  updateSelectAll() {
    /* 
    Changes the value of Select all if all checkboxes are in the same state.
    */
    //console.log("Update select all");
    if (this.allFalse()) {
      $(document).ready(function() {
        $("#type_checkboxes span").text('Select All');
      });
      this.selectAll = false;
    }
    else if (this.allTrue()) {
      //console.log("All true");
      $(document).ready(function() {
        $("#type_checkboxes span").text('Deselect All');
      });
      this.selectAll = true;
    }
  }

  toggleTag(tagName) {
    if (this.tagFilter.has(tagName)) {
      //console.log("Deleting " + tagName);
      this.tagFilter.delete(tagName);
    }
    else {
      //console.log("Adding " + tagName);
      this.tagFilter.add(tagName);
    }
    //console.log(this.tagFilter);
    this.filteredEvents = this.performFilter();
  }
}
