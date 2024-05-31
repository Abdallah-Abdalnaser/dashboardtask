import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SidbarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule
  ],exports: [
    SidbarComponent
  ]
})
export class LayoutModule { }
