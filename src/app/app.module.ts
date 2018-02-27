import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppAngularMaterialModule } from './app-angular-material.module';

import { TableCellComponent } from './components/table-cell/table-cell.component';

// import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    // the components added to /app/components
    TableCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppBootstrapModule,
    AppAngularMaterialModule
    // MatButtonModule       // here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
