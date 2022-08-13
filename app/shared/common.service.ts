import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  url:string="http://localhost:3000/Student/";

  constructor(public httclient:HttpClient) { }

  getData():Observable<Employee[]>
  {
   return this.httclient.get<Employee[]>(this.url)
  }
}
