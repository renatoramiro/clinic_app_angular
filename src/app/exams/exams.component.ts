import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  public exams: Array<any>;

  constructor(private http: Http) {
    this.exams = [];
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/exams/", options)
      .map(result => result.json())
      .subscribe(result => {
        this.exams = result.data;
      });
  }

}
