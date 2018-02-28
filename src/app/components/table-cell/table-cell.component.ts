// import { Component, OnInit } from '@angular/core';
import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {CellConfiguration, CELL_TYPE} from '../../libraries/CellConfiguration';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {

  @Input()
  public cellType: string;
   // public mediumOptions: SelectionValueIcon<string>[];

   @Input()
   public cellDisplayValue: any;    // string number, enum, url, double...

  //  @Input()
  //  public theFunction: Function;
   @Output()
   callbackFunction: EventEmitter<any> = new EventEmitter();

  private displayValue = false;
  private displayCheckbox = false;
  private displayButton = false;
  private displayLink = false;
  // private checkModel: any = { left: false, middle: true, right: false };

  constructor() {
  }

  ngOnInit() {
    this.getDisplay(this.cellType);
  }

  private getDisplay(celltype: string): void {

    if (celltype === CELL_TYPE.value) {
      this.displayValue = true;
    }
    if (celltype === CELL_TYPE.checkbox) {
      this.displayCheckbox = true;
    }
    if (celltype === CELL_TYPE.button) {
      this.displayButton = true;
    }
    if (celltype === CELL_TYPE.anchor) {
      this.displayLink = true;
    }
  }

  private onClickCheckBox(event: any, me: any): void {
    console.log('hello from checkbox');
    // console.log(event);
    // console.log(me);
    this.callbackFunction.emit();
  }

  private onClickButton(event: any, me: any): void {
    console.log('hello from button');
    // console.log(event);
    // console.log(me);

    // test callback function acting on parent passing the object from the child
    const obj = {
      name: 'Francesca',
      surnae: 'bertoncelli'
    };
    // this.callbackFunction.emit(obj);
    this.callbackFunction.emit();
  }
}

// export const LOCATIONRANKING_MEDIUMICONS = {
//   electricity: new Medium("E", "Electricity", "#f48642", "fa-bolt", "fa-circle-o"),
//   fuel: new Medium("F", "Fuel", "#67d3c8", "fa-free-code-camp", "fa-circle-o"),
//   gas: new Medium("G", "Gas", "#c981f9", "fa-fire",  "fa-circle-o"),
//   water: new Medium("W", "Water", "#5d9afc", "fa-tint", "fa-circle-o")
// };

// notes:
// prebuilt style imported in style.css for angular/materials -  https://github.com/angular/material2/issues/4455
// https://material.angular.io/components/checkbox/overview
// call back function with Emitter as Output in the child coponet to the parent
// https://toddmotto.com/component-events-event-emitter-output-angular-2
// https://stackoverflow.com/questions/35328652/angular-pass-callback-function-to-child-component-as-input
