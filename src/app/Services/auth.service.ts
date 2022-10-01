import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  // login(form){
  //   this.http.post('url',form).subscribe(res=>{
  //     console.log(res)
  //   })
  // }



//   public get currentUserValue(): any {
//     if(this.currentUserSubject.value != null) { return this.currentUserSubject.value }        
//   }

//   login(form){
//     const formData: FormData = new FormData();
//     formData.append("email_or_phone", form.phone);
//     // formData.append("phone", form.email);
//     formData.append("password", form.password);
//     return this.http.post(`${environment.endpoint}/users/login`, formData)
//     .pipe( map((user:any) => {
//         if (user && user.data.access_token) {
//             localStorage.setItem(`${environment.currentUserKey}`, JSON.stringify(user));
//             this.currentUserSubject.next(user);
//         } return user;
//     }));
//     }
//   logout() {
//     // return this.http.post(`${environment.endpoint}/users/logout`,{})
      
//         localStorage.removeItem(`${environment.currentUserKey}`);
//         this.currentUserSubject.next(null);
//         this.router.navigate([''])
//   }

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
