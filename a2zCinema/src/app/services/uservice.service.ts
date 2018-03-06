import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import { Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  a2zCinema: string;
   private formData:any;
  constructor(private http: Http) {
    this.a2zCinema = 'http://192.168.1.2:8090';
  } 
     getUser(username): any {
          return this.http.get(`${this.a2zCinema}/getUserByMobile/${username}`).map(res => res.json());
      }
      registerUser(resource):any{
        return this.http.post(`${this.a2zCinema}/addUser`,resource);
      }
      addUser(resource):any{
        return this.http.post(`${this.a2zCinema}/addUser`,resource);
      }
      getUserById(id):any{
        return this.http.get(`${this.a2zCinema}/getUserById/${id}`).map(res=>res.json());
      }
      saveActorProfile(id,resource):any{
        return this.http.post(`${this.a2zCinema}/saveActor/${id}`,resource).map(res=>res.json());
      }
      getActor(id)
      {
        return this.http.get(`${this.a2zCinema}/getActorById/${id}`).map(res=>res.json());
      }
}
