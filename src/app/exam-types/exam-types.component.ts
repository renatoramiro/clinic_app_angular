import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-exam-types',
  templateUrl: './exam-types.component.html',
  styleUrls: ['./exam-types.component.css']
})
export class ExamTypesComponent implements OnInit {

  public exam_types: Array<any>;

  constructor(private http: Http) {
    this.exam_types = [];
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/exam_types/", options)
      .map(result => result.json())
      .subscribe(result => {
        this.exam_types = result.data;
      });
  }

}
