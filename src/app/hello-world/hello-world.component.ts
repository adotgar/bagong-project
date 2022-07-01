import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message = 'Hello Hello World';
  color = 'red';
  isBig = true;
  isDisplayed = true;
  alertMessage = '';
  content = '';
  className = '';

  name = '';
  gender = '';
  title = '';
  tenure = 0;
  salary = 0;
  display = true;
  employees:any = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    // This runs when the component has been CREATED
    this.fetchEmployees();
  }

  switchSize(className) {
    this.isBig = !this.isBig;
    this.className = className
  }

  switchDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }

  displayAlert(message: string) {
    alert(message);
  }

  clearEmployeeInputs(){
    this.name = '';
    this.title = '';
    this.gender = '';
    this.tenure = 0;
    this.salary = 0;
  }

  fetchEmployees(){
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(name: string, title: string, gender: string, tenure: number, salary: number, display: boolean) {
    this.employeeService.addEmployee(name, title, gender, tenure, salary, display)
    this.clearEmployeeInputs();
    this.display = true;
    console.log(this.employees);
  }

  updateEmployee(index:number, name: string, title: string, gender: string, tenure: number, salary: number, display: boolean) {
   
    this.employeeService.updateEmployee(index, name, title, gender, tenure, salary , display)
    this.clearEmployeeInputs();
    this.display = true;

  }

  deleteEmployee(index: number){
    this.employeeService.deleteEmployee(index)
  }



}
