import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: 'app/app.component.html',
  styles: [`
    input.ng-invalid{border-left: 5px solid red;}
    .ng-valid[required]{border-left: 5px solid green;}
  `],
  providers: [EmployeeService]
})
export class EmployeeListComponent  {

private  errorMessage : string;
constructor(private _employeeserv: EmployeeService) { }



  createFood(value : any){
   this._employeeserv.createFood(value).subscribe();
   this.errorMessage ="User has been created sucessfully";
    console.log(value);

  }






}

