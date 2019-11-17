import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaterRoutingModule } from './rater-routing.module';
import { RaterComponent } from './rater/rater.component';


@NgModule({
  declarations: [RaterComponent],
  exports: [
    RaterComponent
  ],
  imports: [
    CommonModule,
    RaterRoutingModule
  ]
})
export class RaterModule { }
