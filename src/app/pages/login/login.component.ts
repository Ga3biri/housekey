import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  public hide = true;
  constructor(public fb: UntypedFormBuilder, public router:Router,private auth:AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, ],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }


  public onLoginFormSubmit(values:Object):void {
    // if (this.loginForm.valid) {
    //   this.router.navigate(['/']);
    // }
    if(this.loginForm.invalid){return}
    this.auth.login(this.loginForm.value).pipe(map((res:any)=>{
      return res.Response.Data
    })).subscribe((res:any)=>{

      console.log('res')
      console.log(res)
      let url= `/login/${res.uuid}/${res.userId}`
      console.log(url)
      if(res){
        this.router.navigate([url])
      }
    })
  }

}
