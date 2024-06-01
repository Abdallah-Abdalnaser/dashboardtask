import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchar',
  templateUrl: './barchar.component.html',
  styleUrl: './barchar.component.scss'
})
export class BarcharComponent implements OnInit {
  basicData:any;

  ngOnInit(): void {
    this.basicData = {
      labels:["station Name Dummy 1" , "station Name Dummy 1","station Name Dummy 1","station Name Dummy 1","station Name Dummy 1"],
      datasets:[
      {
        label:['SALES'],
        data:[255,140,190,220,140],
        backgroundColor:['#FF7F5C'],
      },
      {
        label:['TRANSACTION'],
        data:[285,160,120,220,130],
        backgroundColor:['#663325'],
      },
      {
        label:['SALES'],
        data:[265,120,130,290,130],
        backgroundColor:['#D96C4E'],
      },{
        label:['SALES'],
        data:[265,160,100,230,150],
        backgroundColor:['#8C4633'],
      }]
    }
  }
}
