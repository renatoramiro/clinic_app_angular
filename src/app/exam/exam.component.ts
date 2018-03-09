import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  public exam: any;
  private id: number;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.exam = {};
    this.route.params.subscribe(params => this.id = params["id"]);
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/exams/" + this.id, options)
      .map(result => result.json())
      .subscribe(result => {
        this.exam = result.data;
      });
  }

}
