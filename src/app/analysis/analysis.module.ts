import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis.component';
import { HeaderComponent } from './components/header/header.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MatIconModule } from '@angular/material/icon';
import { GraphComponent } from './components/graph/graph.component';
import { SalesComponent } from './components/sales/sales.component';
import { HourlysalesComponent } from './components/sales/hourlysales/hourlysales.component';
import { SalesbystationComponent } from './components/sales/salesbystation/salesbystation.component';
import { BarcharComponent } from './components/graph/barchar/barchar.component';
import { ListComponent } from './components/graph/list/list.component';
import { TotalvalueComponent } from './components/totalvalue/totalvalue.component';
import { register } from 'swiper/element/bundle';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';

register();

@NgModule({
  declarations: [
    AnalysisComponent,
    HeaderComponent,
    GraphComponent,
    SalesComponent,
    HourlysalesComponent,
    SalesbystationComponent,
    BarcharComponent,
    ListComponent,
    TotalvalueComponent,
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    FloatLabelModule,
    MatIconModule,
    ChartModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],exports: [
    AnalysisComponent
  ]
})
export class AnalysisModule { }
