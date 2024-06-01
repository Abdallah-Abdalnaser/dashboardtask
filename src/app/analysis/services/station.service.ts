import { Injectable } from '@angular/core';
import { Station } from '../components/station.model';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  data:Station[]=[
    new Station("62,721",550,"Compression",5161,20,"8-1-2021 | 10:16 PM" , "active"),
    new Station("62,721",550,"Compression",5161,20,"8-1-2021 | 10:16 PM" , "active"),
    new Station("62,721",550,"Compression",5161,20,"8-1-2021 | 10:16 PM" , "noactive"),
  ]
  constructor() { }
}
