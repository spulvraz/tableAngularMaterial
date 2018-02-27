// import { Component, OnInit } from '@angular/core';
import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {

  @Input()
  public cellType: string;
   // public mediumOptions: SelectionValueIcon<string>[];

  private displayValue: boolean;
  private displayCheckbox: boolean;
  private displayButton: boolean;
  private displayLink: boolean;
  private checkModel: any = { left: false, middle: true, right: false };

  constructor() {
  }

  ngOnInit() {
    this.getDisplay(this.cellType);
  }

  // private getDisplay(celltype: string): boolean {
  private getDisplay(celltype: string): void {
    this.displayValue = false;
    this.displayCheckbox = false;
    this.displayButton = false;
    this.displayLink = false;

    if (celltype === 'value') {
      this.displayValue = true;
    }
    if (celltype === 'checkbox') {
      this.displayCheckbox = true;
    }
    if (celltype === 'button') {
      this.displayButton = true;
    }
    if (celltype === 'link') {
      this.displayLink = true;
    }
    // return true;
  }

  private onClickCheckBox(event: any, me: any): void {
    console.log('hello from checkbox');
    console.log(event);
    console.log(me);
  }

  private onClickButton(event: any, me: any): void {
    console.log('hello from button');
    console.log(event);
    console.log(me);
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
