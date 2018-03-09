import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  public clients: Array<any>;

  constructor(private http: Http) {
    this.clients = [];
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/clients/", options)
      .map(result => result.json())
      .subscribe(result => {
        this.clients = result.data;
      });
  }

}
