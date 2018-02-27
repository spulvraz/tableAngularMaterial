import { Component } from '@angular/core';
import * as $ from 'jquery';
import {CellConfiguration, CELL_TYPE} from './libraries/CellConfiguration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  status: { isopen: boolean } = { isopen: false };

  cellElement = CELL_TYPE.anchor;                                   // test
  cellValue = 'https://github.com/angular/angular-cli/wiki';        // 'francesca bertoncelli';      // test
  // ------ callback function
  private bazar = 0;
  public myFunction(transaction: any): number {
    console.log(transaction);
    this.bazar++;
    console.log(this.bazar.toString());
    return this.bazar;
  }

  // -------

  toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  change(value: boolean): void {
    this.status.isopen = value;
  }
}
