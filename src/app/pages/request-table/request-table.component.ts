import { AppService } from './../../app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Property } from './../../app.models';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'request-table',
  templateUrl: './request-table.component.html'
})
export class RequestTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'buyer_name', 'broker_name','budget', 'status','action' ];
  dataSource: MatTableDataSource<Property>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public appService:AppService) { }

  ngOnInit() {
    this.appService.getProperties().subscribe(res => {
      console.log('res')
      console.log(res)
      this.initDataSource(res);
    });    
  }

  public initDataSource(data:any){
    this.dataSource = new MatTableDataSource<Property>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 


}
