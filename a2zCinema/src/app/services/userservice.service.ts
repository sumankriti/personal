import { base_url } from './../global.variable';
import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import * as global from '../global.variable'
@Injectable()
export class UserService
{
  a2zCinema: string;
 private base_url:string
   private formData:any;
  constructor(private http: Http) {
    this.base_url = global.base_url;
  } 
     getUser(username): any {
          return this.http.get(`${this.base_url}/getUserByMobile/${username}`).map(res => res.json());
      }
      checkUser(username): any {
        return this.http.get(`${this.base_url}/checkUser/${username}`).map(res => res.json());
    }
      registerUser(resource):any{
        return this.http.post(`${this.base_url}/addUser`,resource);
      }
      getUserById(id):any{
        return this.http.get(`${this.base_url}/getUserById/${id}`).map(res=>res.json());
      }
      saveActorProfile(id,resource):any{
        return this.http.post(`${this.base_url}/saveActor/${id}`,resource).map(res=>res.json());
      }
      getActor(id):any{
        return this.http.get(`${this.base_url}/getActorById/${id}`).map(res=>res.json());
      }
      getEmail(email):any{
        return this.http.get(`${this.base_url}/forgotEmail/${email}`).map(res=>res.json());
      }
      saveActor(resource):any{
        return this.http.post(`${this.base_url}/updateActor`,resource).map(res=>res.json());
      }
      getUserByName(name):any{
        return this.http.get(`${this.base_url}/getUserByName/${name}`).map(res=>res.json());
      }
      changePassword(resource):any{
        return this.http.post(`${this.base_url}/changePassword`,resource).map(res=>res.json());
      }
  
}