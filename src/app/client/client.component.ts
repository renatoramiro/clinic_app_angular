import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public client: any;
  private id: number;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe(param => this.id = param["id"]);
  }

  ngOnInit() {
    let headers = new Headers({"content-type": "application/json"});
    let options = new RequestOptions({headers: headers});
    this.http.get("http://localhost:4000/api/clients/" + this.id, options)
      .map(result => result.json())
      .subscribe(result => {
        this.client = result.data;
      });
  }

}
