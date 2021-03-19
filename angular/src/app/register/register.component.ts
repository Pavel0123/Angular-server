import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Users} from './Users';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  jmeno: string;
  email: string;
  heslo: string;
  post: Users;
  postdata = {
    username: 'fjvvel',
    password: 'pdvel'
  };


  readonly serverUrl = '/api/users';

  ngOnInit() {
  }


  odeslat(): void {
    const user: Users = {username: this.jmeno, password: this.heslo};

    this.http.post(this.serverUrl, user, {withCredentials: true}).subscribe((data: any) => {
      console.log(data, 'registered');
      this.router.navigateByUrl('/play');
    }, (data: any) => {
      console.log(data, 'userexist');

    });

    this.http.get(this.serverUrl, {withCredentials: true}).subscribe((data: any) => {
      console.log(data);
    });


    console.log(user, `odeslano`);
  }


}
