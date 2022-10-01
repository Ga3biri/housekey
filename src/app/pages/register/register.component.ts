import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { MatSnackBar } from '@angular/material/snack-bar';
import { matchingPasswords, emailValidator } from 'src/app/theme/utils/app-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: UntypedFormGroup;
  public hide = true;
  public userTypes = [
    { id: 1, name: 'Agent' },
    { id: 2, name: 'Agency' },
    { id: 3, name: 'Buyer' }
  ];
  constructor(public fb: UntypedFormBuilder, public router:Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      partyId: ['', Validators.required],
      username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      password: ['', Validators.required],
    });
  }

  public onRegisterFormSubmit(values:Object):void {
    if (this.registerForm.valid) {
      console.log(values);
      this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }
  }




  // "Request":{
  //   "firstName":"amr",
  //   "lastName":"Nahas",
  //   "email":"amrelnahas44@gmail.com",
  //   "userName":"amr222",
  //   "password":123456789,
  //   "phoneNumber":504167212,
  //   "partyId":3
}
