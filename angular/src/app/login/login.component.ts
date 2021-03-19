import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Users} from './Users';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router) {
  }


  jmeno: string;
  email: string;
  heslo: string;
  post: Users;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache'
    }),
    Connection: 'Keep-Alive',
    withCredentials: true,
    observe: 'response' as 'response'
  };


  readonly serverUrl = '/api/users';


  ngOnInit() {
  }


  odeslat(): void {


    const user: Users = {username: this.jmeno, password: this.heslo};

    this.http.put(this.serverUrl, user, this.httpOptions).subscribe(( response ) => {
      console.log(response, 'logged in');

    }, (data: any) => {
      console.log(data, 'bad urername');

    });

    this.http.get(this.serverUrl, this.httpOptions).subscribe((response) => {
      console.log(response);
    });


    console.log(user, ` odeslano`);
  }


}
