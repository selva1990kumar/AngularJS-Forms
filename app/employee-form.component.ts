import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-form',
    templateUrl : 'app/employee-detail.component.html',
})
export class EmployeeFormComponent implements OnInit {

    userForm: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit(){
        this.userForm = this._formBuilder.group({
            name:['ModelDrivenFormWithFormBuilder', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
            email: [],
            address:this._formBuilder.group({
                street: [],
                city: [],
                postalcode: [null,[Validators.pattern('^[1-9][0-9]{4}$')]]
            })
        })
    }

    onSubmit(){
        console.log(this.userForm.value);
    }
}




