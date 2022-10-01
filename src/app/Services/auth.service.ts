import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;



  
  constructor(private http:HttpClient,private router:Router) { }


  // login(form){
  //   this.http.post('url',form).subscribe(res=>{
  //     console.log(res)
  //   })
  // }



  public get currentUserValue(): any {
    return this.currentUserSubject 
  }


  login(form){
    console.log('form')
    console.log(form)
    const formData = {
      "Request": {
        "userName":`${form.username}`,
         "password":`${form.password}`
         }
    }

    // "Request": {
    //   "userName":"amr222",
    //    "password":123456789
    //    }
    return this.http.post(`${environment.endpoint}auth/login`, formData);
  }



    confirmCode(form){
      const formData = {
        "Request": {
          "uuid":`${form.uuid}`,
          "otp":`${form.otp}`,
          "userId":`${form.userId}`
        }
      }
      return this.http.post(`${environment.endpoint}auth/authenticateOtp`, formData)
    }

  logout() {
        localStorage.removeItem(`${environment.currentUserKey}`);
        this.router.navigate([''])
        setTimeout(() => {
          window.location.reload()
        }, 500);
  }

//   /** 
//    * register  apis
//   */
//  sendSMS(phone){
//    console.log('phone')
//    console.log(phone)
//    console.log(phone)
//   return this.http.get(`${environment.endpoint}/users/sms/send?phone=${phone}`)
//  }
//  confirmCode(phone,confirm_code){
//   return this.http.get(`${environment.endpoint}/users/sms/confirm?phone=${phone}&confirm_code=${confirm_code}`)
//  }
//   // 

//   register(form){
//     const formData: FormData = new FormData();
//     formData.append("name", form.name);
//     formData.append("email", form.email);
//     formData.append("phone", form.phone);
//     formData.append("password", form.password);
//     formData.append("confirm_password", form.confirm);
//     return this.http.post(`${environment.endpoint}/client-users/register`, formData)
//     .pipe( map((user:any) => {
//         if (user && user.data.access_token) {
//             localStorage.setItem(`${environment.currentUserKey}`, JSON.stringify(user));
//             this.currentUserSubject.next(user);
//         } return user;
//     })
//     );
//   }

//   resetPassword(form){
//     const formData:FormData = new FormData()
//     formData.append('phone', form.phone)
//     formData.append('password', form.password)
//       formData.append('verification_code', form.verification_code)
//       formData.append('confirm_password', form.confirm_password)
//     return this.http.post(`${environment.endpoint}/users/forget_reset_password`,formData)
//   }



}
