import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  jmeno: string;
  email: string;
  heslo: string;
  posts: Observable<Post[]>;
  postdata: {
    username: 'pavel';
    password: 'pavel';
  };
  readonly serverUrl = 'http://127.0.0.1:8080/Register/api/users';

  ngOnInit() {
  }

  odeslat() {


    this.http.post(this.serverUrl, this.postdata).toPromise().then(data => {
      console.log(data);
    });


    console.log(this.jmeno, this.email, this.heslo, ` odeslano`);
  }


}
