import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourlysales',
  templateUrl: './hourlysales.component.html',
  styleUrls: ['./hourlysales.component.scss']
})
export class HourlysalesComponent implements OnInit {
  basicData: any;
  basicOptions: any;

  ngOnInit(): void {
    this.basicData = {
      labels: ["24:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
      datasets: [
        {
          data: [235, 478, 392, 250, 444, 317, 401, 270, 350, 290, 280, 300],
          backgroundColor: '#c7ede888',
          borderColor: '#4ED8D0',
          pointBackgroundColor: '#C7EDE8',
        },
        {
          data: [285, 160, 320, 300, 450, 200, 380, 490, 220, 410, 240, 330],
          backgroundColor: '#9fdde36e',
          borderColor: '#42B2D8',
          pointBackgroundColor: '#9FDDE3',
        }
      ]
    };

    // Remove the labels from the legend
    this.basicOptions = {
      plugins: {
        legend: {
          display: false
        }
      }
    };
  }
}
