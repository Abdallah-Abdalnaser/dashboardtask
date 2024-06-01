import { Component } from '@angular/core';
import { StationService } from '../../../services/station.service';
import { Station } from '../../station.model';

@Component({
  selector: 'app-salesbystation',
  templateUrl: './salesbystation.component.html',
  styleUrl: './salesbystation.component.scss'
})
export class SalesbystationComponent {
  data:Station[]=[];
  constructor(private StationService:StationService) {
    this.data = this.StationService.data
  }
}
