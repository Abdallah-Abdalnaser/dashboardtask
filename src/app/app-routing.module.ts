import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './analysis/components/graph/list/list.component';
import { BarcharComponent } from './analysis/components/graph/barchar/barchar.component';

const routes: Routes = [
  {path:"List" ,component:ListComponent},
  {path:"chart" ,component:BarcharComponent},
  {path:"" ,redirectTo:"chart",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
