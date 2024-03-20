import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

export interface UserModele {
  Id: number;
  email: string;
  password:string;
  username: string;
}

@Injectable({
  providedIn: 'root'

})

export class DatabaseService {

  dataBaseURL = "http://localhost:8000/user-connexion";
  posts:any;

  constructor(private http:HttpClient) { }

  getAllUsers() {
    //this.posts = this.http.get(this.dataBaseURL);
  }

}
