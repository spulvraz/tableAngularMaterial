import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class AppAngularMaterialModule { }
