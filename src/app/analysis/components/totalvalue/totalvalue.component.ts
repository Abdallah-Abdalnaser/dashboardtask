import { Component } from '@angular/core';
import { data, TotalvalueService } from '../../services/totalvalue.service';
import { log } from 'console';

@Component({
  selector: 'app-totalvalue',
  templateUrl: './totalvalue.component.html',
  styleUrl: './totalvalue.component.scss'
})
export class TotalvalueComponent {
  data!:data[];
  constructor(private TotalvalueService:TotalvalueService) {
    this.data = this.TotalvalueService.data;
    console.log(this.data);
  }
}
