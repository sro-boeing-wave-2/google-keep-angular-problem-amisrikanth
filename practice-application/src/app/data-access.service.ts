import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Note } from './note-component/note';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
private path: string = 'https://localhost:44399/api/Notes';
  constructor(private http:Http) { }

  getNotes()
  {
    return this.http.get(this.path);
  }
  getNoteById(Id:number){
     return this.http.get(this.path+'?Id='+Id);
  }
  put(note:Note, Id : number){
    var somevar = this.http.put(this.path+'/'+Id, note);
    console.log(somevar);
    return somevar;
  }
  post(note:Note){
    return this.http.post(this.path, note);
  }
  delete(Id:number)
  {
    return this.http.delete(this.path+'/'+Id);
  }
}
