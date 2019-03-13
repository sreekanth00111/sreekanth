import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    let response = this.http.get("http://localhost:3200/employee/getEmployeeDetailes")
    return response;

  }


  saveEmploye(model){
    // console.log(model)
    let response = this.http.post("http://localhost:3200/employee/saveEmployee",model)
    return response;
  }
  getName(searchEN){


 // console.log(model)
 let response = this.http.get("http://localhost:3200/employee/getName/"+searchEN)
 return response;

  }

}
