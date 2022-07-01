import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges, OnDestroy {
  @Input() employee: any

  constructor() { }

  ngOnInit() {
    console.log(this.employee)
  }

  ngOnChanges(): void {
    console.log("Employee Updated");
    console.log(this.employee);
  }

  ngOnDestroy(): void {
    console.log("Employee Deleted");
    console.log(this.employee);
  }

}
