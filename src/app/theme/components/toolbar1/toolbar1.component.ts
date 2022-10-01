import { environment } from 'src/environments/environment';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-toolbar1',
  templateUrl: './toolbar1.component.html'
})
export class Toolbar1Component implements OnInit {
  @Output() onMenuIconClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService:AppService,private auth:AuthService) { }

  currentUser;
  ngOnInit() { 
    this.getCurrentUser()
  }

  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }

  getCurrentUser(){
    this.currentUser = localStorage.getItem(environment.currentUserKey)
    this.currentUser = JSON.parse(this.currentUser)
  }

  LogOut(){
    this.auth.logout()
  }
}