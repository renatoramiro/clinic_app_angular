import { Component, OnInit } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-show',
  templateUrl: './employee-show.component.html',
  styleUrls: ['./employee-show.component.css']
})
export class EmployeeShowComponent implements OnInit {
  public employee: any;
  private id: number;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.employee = {};
    this.route.params.subscribe(params => this.id = params["id"]);
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/employees/" + this.id, options)
      .map(result => result.json())
      .subscribe(result => {
        this.employee = result.data;
      });
  }

}
