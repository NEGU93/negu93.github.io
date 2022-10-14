import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  public githubRepoStatus: any;
  public infoKeys = {
    "stars": {"key": 'stargazers_count',  "logo": "fas fa-star"},
    "watchers": {"key": 'subscribers_count', "logo": "fas fa-eye"}, 
    "forks": {"key": 'forks', "logo": "fa fa-code-fork"}
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.style();
  }

  async style(){
    // curl -s "https://api.github.com/repos/NEGU93/cvnn?page=$i&per_page=100"
    const url = 'https://api.github.com/repos/NEGU93/cvnn?page=$i&per_page=100';
    // githubRepoStatus: any;
    

    await this.http.get<any>(url).subscribe(data => {
      this.githubRepoStatus = data;
      console.log(this.githubRepoStatus);
    });
  }

}
