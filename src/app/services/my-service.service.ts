import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any[]> {
    debugger
    return this.http.get<any[]>('http://localhost:3000/players');
  }
}
