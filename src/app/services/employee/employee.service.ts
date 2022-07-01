import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any = [
    {
      'name': 'Aggy',
      'title': 'Dev',
      'gender': 'M',
      'tenure': 0,
      'salary': 15000,
      'display': true,
      'fresh': true
    }
  ];

  constructor() { }

  getEmployees(){
    return this.employees;
  }

  addEmployee(name: string, title: string, gender: string, tenure: number, salary: number, display: boolean){
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      display: display,
      fresh: true
    };
    this.employees.push(employee);
  }

  deleteEmployee(index:number){
    let employee = this.employees[index];
    this.employees.splice(index, 1);
    alert("Deleted " + employee.name);
  }

  updateEmployee(index:number, name: string, title: string, gender: string, tenure: number, salary: number, display: boolean){
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      display: display,
      fresh: false
    };
    this.employees[index] = employee;
  }

}
