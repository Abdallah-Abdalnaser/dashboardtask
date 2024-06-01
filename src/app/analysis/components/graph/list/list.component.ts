import { Component } from '@angular/core';
import { StationService } from '../../../services/station.service';
import { Station } from '../../station.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  data: Station[] = [];
  activeMenu: number | null = null;

  constructor(private stationService: StationService) {
    this.data = this.stationService.data;
  }

  change(index: number): void {
    this.activeMenu = this.activeMenu === index ? null : index;
  }
}
