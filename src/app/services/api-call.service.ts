import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }}
