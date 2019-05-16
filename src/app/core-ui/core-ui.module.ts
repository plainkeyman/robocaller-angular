import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { AuthModule } from '../auth/auth.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AuthModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreUiModule { }
