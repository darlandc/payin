import { AngularMaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatRoutingModule } from './cat-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, FormComponent, DetailComponent],
  exports: [
    AngularMaterialModule

  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    AngularMaterialModule
  ]
})
export class CatModule { }
