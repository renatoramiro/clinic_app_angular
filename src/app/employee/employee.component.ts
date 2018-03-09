import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import "rxjs/Rx";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: Array<any>;

  constructor(private http: Http) {
    this.employees = [];
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/employees/?enabled=true", options)
      .map(result => result.json())
      .subscribe(result => {
        this.employees = result.data;
      });
  }
}
