import { Component, OnInit } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public common:CommonService) { }

  empList:any;


  ngOnInit(): void 
  {
    this.common.getData().subscribe(data=>{this.empList=data})
  }

}
