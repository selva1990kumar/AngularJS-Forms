import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'employee-detail',
  templateUrl : 'app/employee-detail.component.html',
  providers: [EmployeeService]
})
export class EmployeeDetailComponent {
      userForm = new FormGroup({
      name: new FormControl('modelDrivenFormUserName', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
      email: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))

  });
  private  errorMessage : string;
  constructor(private _employeeserv: EmployeeService) { }

  onSubmit(){

    this._employeeserv.createFood(this.userForm.value).subscribe();
    this.errorMessage ="User has been created sucessfully";

  }
}
