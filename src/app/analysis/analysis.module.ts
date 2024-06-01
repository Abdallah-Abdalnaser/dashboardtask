import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AnalysisComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    FloatLabelModule,
    MatIconModule
  ],exports: [
    AnalysisComponent
  ]
})
export class AnalysisModule { }
