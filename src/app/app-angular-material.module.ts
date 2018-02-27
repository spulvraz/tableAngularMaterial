import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table/';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class AppAngularMaterialModule { }
