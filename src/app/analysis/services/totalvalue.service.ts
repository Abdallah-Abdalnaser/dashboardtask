import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface data {
  name:string,
  value:string,
  status:string,
  present:string,
  Unit?:string,
  degree?:number
}
@Injectable({
  providedIn: 'root'
})
export class TotalvalueService {
  data:data[]=[
    {name:'Total Value',value:"71,028",status:"decrease",present:"2%",Unit:"EGP"},
    {name:'Total Sales',value:"20,000",status:"increase",present:"50m",Unit:"m",degree:3},
    {name:'Avg Sales',value:"20,000",status:"decrease",present:"50m",Unit:"m",degree:3},
    {name:'Total Transcation',value:"1567",status:"increase",present:"20"},
  ];
  constructor() {

  }
}
