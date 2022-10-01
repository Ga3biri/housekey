import { AuthService } from './../../../Services/auth.service';
// import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
// import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  public uuid = this.route.snapshot.paramMap.get('uuid')
  public userId = this.route.snapshot.paramMap.get('userId')
  
  form:FormGroup;
  submitted=false;
  // myminute=60;
  // city_id;
  constructor(public route: ActivatedRoute,private auth:AuthService,private formbuilder:FormBuilder,private router:Router) { }
  
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      code1: ['', Validators.required],
      code2: ['', Validators.required],
      code3: ['', Validators.required],
      code4: ['', Validators.required],
    });

    // setInterval(()=>{
    //   this.myminute--
    // },1000)
  }
  

  get f(){ return this.form.controls}
  

  // resendAgain(){
  //   this.spinner.show()
  //   this.auth.sendSMS(this.phone_number).subscribe(res=>{
  //     this.spinner.hide()
  //     console.log(res)
  //     Swal.fire(
  //       'نجاح',
  //       'تم ارسال رسالة تأكيدية بنجاح',
  //       'success'
  //       )
  //       // this.router.navigate(['/app/register',form.phone])
  //   })
  // }

  
  submit(){
    if(this.form.invalid){return}
    // console.log(this.form.value)
    const code = this.form.value['code1'] + this.form.value['code2']  + this.form.value['code3'] + this.form.value['code4'] 
    const formData = {
        "uuid":this.uuid,
        "otp":code,
        "userId":this.userId
    }


    console.log('formData')
    console.log(formData)
    this.auth.confirmCode(formData).subscribe(response=>{
      console.log(response)
      Swal.fire(
        'نجاح',
        'تم التحقق بنجاح',
        'success'
        )
        this.router.navigate([''])
    })
  }










































  nextStep(event, step: number): void {
    if (this.form.valid) {
      this.onSubmit()
    }
    const prevElement = document.getElementById('code' + (step - 1));
    const nextElement = document.getElementById('code' + (step + 1));
    console.log(event)
    if (event.code == 'Backspace' && event.target.value === '') {
      event.target.parentElement.parentElement.children[step - 2 > 0 ? step - 2 : 0].children[0].value = ''
      if (prevElement) {
        prevElement.focus()
        return
      }
    } else {
      if (nextElement) {
        nextElement.focus()
        return
      } else {

      }
    }


  }

  paste(event) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData('text');
    this.form.setValue({
      code1: pastedText.charAt(0),
      code2: pastedText.charAt(1),
      code3: pastedText.charAt(2),
      code4: pastedText.charAt(3)
    });
    this.onSubmit()
    debugger
  }

  focused(step) {
    if (step === 2) {
      if (this.form.controls.code1.value === '') {
        document.getElementById('code1').focus();
      }
    }
    if (step === 3) {
      if (this.form.controls.code1.value === '' || this.form.controls.code2.value === '') {
        document.getElementById('code2').focus();
      }
    }

    if (step === 4) {
      if (this.form.controls.code1.value === '' || this.form.controls.code2.value === '' || this.form.controls.code3.value === '') {
        document.getElementById('code3').focus();
      }
    }
  }
  
    onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // ...
    }
}