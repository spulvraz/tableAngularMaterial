import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap.module';
import { AppAngularMaterialModule } from './app-angular-material.module';

import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { TableComponent } from './components/table/table.component';
import { TableOverviewComponent } from './components/table-overview/table-overview.component';

// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    // the components added to /app/components
    TableCellComponent,
    TableRowComponent,
    TableComponent,
    TableOverviewComponent
  ],
  imports: [
    // NgModule,       // ????
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    AppBootstrapModule,
    AppAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
