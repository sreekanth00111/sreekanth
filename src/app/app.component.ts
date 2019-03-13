import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee';
  searchText:any
  searchEN: any
  employeeData;
  response: any = {
    message: '',
    result: {},
    error: '',
    status: ''
  }

  model = {
    EmployeeName: '',
    salary: '',
    EmployeeId: ''
  }


  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getemployeeDetailes()
  }


  getemployeeDetailes() {
    this.service.getEmployee().subscribe(data => {
      console.log(data)
      this.employeeData = data['result']
    })

  }


  onSubmit() {
    // console.log(this.model)
    this.service.saveEmploye(this.model).subscribe(data => {
      console.log(data)
      this.response = data;
      this.getemployeeDetailes()
    })

  }

  getDataTwo() {

    this.service.getName(this.searchEN).subscribe(data => {

      this.employeeData = data

      console.log(data)
    })

  }

}
