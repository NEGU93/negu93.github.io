import { Component, OnInit } from '@angular/core';
import { IPublication } from './publications';
import { PublicationService } from './publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  errorMessage = '';
  publications: IPublication[];
  hoverPublisher: string = null;
  awardVisible: number = 0;

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.publicationService.getPublications().subscribe({
      next: data => {
        this.publications = this.parseData(data);
      }, 
      error: err => this.errorMessage = err
    });
  }

  parseData(data : IPublication[]) : IPublication[] {
    for (let publication of data) {
      publication.year = new Date(publication.year)
    }
    return data.sort((a, b) => b.year - a.year);
  }

  mouseEnter(pub: string) {
    this.hoverPublisher = pub.toLowerCase();
  }

  mouseLeave() {
    this.hoverPublisher = null;
  }

  setAward(value: number) {
    this.awardVisible = this.awardVisible == value ? 0 : value;
  }
}
