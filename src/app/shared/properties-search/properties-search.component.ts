import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppService } from '../../app.service'; 

@Component({
  selector: 'app-properties-search',
  templateUrl: './properties-search.component.html',
  styleUrls: ['./properties-search.component.scss']
})
export class PropertiesSearchComponent implements OnInit {
  @Input() variant:number = 1;
  @Input() vertical:boolean = false;
  @Input() searchOnBtnClick:boolean = false;
  @Input() removedSearchField:string;
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchClick: EventEmitter<any> = new EventEmitter<any>();
  public showMore: boolean = false;
  public form: UntypedFormGroup;
  public propertyTypes = [];
  public serviceTypes = [];
  public cities = [];
  public neighborhoods = [];
  public streets = [];
  public features = [];

  constructor(public appService:AppService, public fb: UntypedFormBuilder) { }

  ngOnInit() {
    if(this.vertical){
      this.showMore = true;
    };
    this.propertyTypes = this.appService.getPropertyTypes();
    this.serviceTypes = this.appService.getServiceTypes();
    this.cities = this.appService.getCities();
    this.neighborhoods = this.appService.getNeighborhoods();
    this.streets = this.appService.getStreets();
    this.features = this.appService.getFeatures();
    this.form = this.fb.group({
      propertyType: null,
      serviceType: null, 
     
      city: null,
      zipCode: null,
      neighborhood: null,
      street: null,
   
    }); 

    this.onSearchChange.emit(this.form);
  }
 
  public buildFeatures() {
    const arr = this.features.map(feature => { 
      return this.fb.group({
        id: feature.id,
        name: feature.name,
        selected: feature.selected
      });
    })   
    return this.fb.array(arr);
  }
  

  ngOnChanges(){ 
    if(this.removedSearchField){ 
      if(this.removedSearchField.indexOf(".") > -1){
        let arr = this.removedSearchField.split(".");
        this.form.controls[arr[0]]['controls'][arr[1]].reset();
      } 
      else if(this.removedSearchField.indexOf(",") > -1){        
        let arr = this.removedSearchField.split(","); 
        this.form.controls[arr[0]]['controls'][arr[1]]['controls']['selected'].setValue(false);  
      }
      else{
        this.form.controls[this.removedSearchField].reset();
      }  
    }  
  }

  public reset(){     
    this.form.reset({ 
      propertyType: null,
      serviceType: null, 
 
      city: null,
      zipCode: null,
      neighborhood: null,
      street: null,
    }); 
  }

  public search(){
    this.onSearchClick.emit(); 
  }

  public onSelectCity(){
    this.form.controls['neighborhood'].setValue(null, {emitEvent: false});
    this.form.controls['street'].setValue(null, {emitEvent: false});
  }
  public onSelectNeighborhood(){
    this.form.controls['street'].setValue(null, {emitEvent: false});
  }

  public getAppearance(){
    return (this.variant != 3) ? 'outline' : '';
  }
  public getFloatLabel(){
    return (this.variant == 1) ? 'always' : '';
  }


}