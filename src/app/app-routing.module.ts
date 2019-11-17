import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RaterComponent} from './rater/rater/rater.component';


const routes: Routes = [
  {path: '', component: RaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
