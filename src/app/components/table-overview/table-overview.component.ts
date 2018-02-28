import {Component, OnInit, Input, Output, EventEmitter, ViewChild, Directive, AfterViewInit, ElementRef} from '@angular/core';
import {CellConfiguration, CELL_TYPE} from '../../libraries/CellConfiguration';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css']
})
export class TableOverviewComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['Id', 'PackageId', 'Email', 'Firstname', 'Lastname', 'DateTimeCreated', 'DateTimeSigned', 'SignedDocumentUrl', 'AuditUrl', 'Status'];
  dataSourceOverview = TEST_OVERVIEW_DATA;
  isOk = true;

  public callbackCheckBox(event: any, overview: any): void {
    console.log('checkbox');
    console.log(overview);
    // todo
  }

  public callBackButton(transaction: any, overview: any): void {
    console.log('button');
    console.log(overview);
    // todo
  }

  constructor() { }

  ngOnInit() {
  }
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[showCoulmn]'
})
export class ShowColumnDirective implements AfterViewInit {
  @Input() showInput: string;
  constructor(private elRef: ElementRef) {
  }
  ngAfterViewInit(): void {
    console.log(this.showInput);
  this.elRef.nativeElement.style.display = this.showInput;
 }
}

// // create constant with 2 arrays: 1) calculated for the column placeholder 2) for the header placeholder
// export const displayedColumns = ['position', 'name', 'weight', 'symbol'];


// // rowItem
// export interface Element {
//   // data: {
//   //   name: string;
//   //   position: number;
//   //   weight: number;
//   //   symbol: string;
//   // };
//   // metadata: {
//   //   // cellType="{{ cellElement }}" cellDisplayValue="{{ cellValue }}"  (callbackFunction)= all imput values and output
//   //   patat: string
//   // };

//   name: {
//     data: string,
//     metadata: {
//       cellElement: string,    // cellType: string value, button, checkbox, url...
//       cellValue?: any,        // cellDisplayValue content of the cellule in term of value or URL
//       myFunction?: Function   // callbackFunction
//     }
//   };
//   // position: {}; etc
// }

// const ELEMENT_DATA: Element[] = [
//   // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'}
// ];

export interface OverviewData {
  Id:	number;
  PackageId:	string;			        // "33045835-ed12-447c-bf33-09750431add2"
  Email: string;					        // "x.x@stage.com"
  Firstname: string;
  Lastname:	string;
  DateTimeCreated: string;		    // "2018-02-21T14:10:34"
  DateTimeSigned?: string;
  SignedDocumentUrl?:	string;
  AuditUrl?: string;
  Status: string;					        // "Sent"
}

const TEST_OVERVIEW_DATA: OverviewData[] = [
// tslint:disable:max-line-length
  {Id: 1, PackageId: '1bJJJ', Email: 'xy@sii.be', Firstname: 'Carmela', Lastname: 'Soprano', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'},
  {Id: 2, PackageId: '1bf8aGGC', Email: 'xy@sii.be', Firstname: 'Viktor',  Lastname: 'Stain', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://angular.io/tutorial', AuditUrl: 'https://angular.io/tutorial', Status: 'Signed'},
  {Id: 3, PackageId: '1bf8ahh', Email: 'xy@sii.be', Firstname: 'Rosemary', Lastname: 'Schuller', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://angular.io/tutorial', AuditUrl: 'https://angular.io/tutorial', Status: 'Signed'},
  {Id: 4, PackageId: '1bf8sbf', Email: 'xy@sii.be', Firstname: 'Petra', Lastname: 'Vratilova', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'}
  // tslint:disable:max-line-length
  // {Id: 0, PackageId: '1bf8a76a', Email: 'xy@sii.be', Firstname: 'Antony', Lastname: 'Soprano', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 1, PackageId: '1bJJJ', Email: 'xy@sii.be', Firstname: 'Carmela', Lastname: 'Soprano', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'},
  // {Id: 2, PackageId: '1bf8aGGC', Email: 'xy@sii.be', Firstname: 'Viktor', Lastname: 'Stain', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 3, PackageId: '1bf8ahh', Email: 'xy@sii.be', Firstname: 'Rosemary', Lastname: 'Schuller', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 4, PackageId: '1bf8sbf', Email: 'xy@sii.be', Firstname: 'Petra', Lastname: 'Vratilova', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'}
  // {Id: 5, PackageId: '1bfxza76a', Email: 'xy@sii.be', Firstname: 'Marco', Lastname: 'Marzio', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 6, PackageId: 'aee6a', Email: 'xy@sii.be', Firstname: 'Ugo', Lastname: 'Le Compte', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 7, PackageId: '1bxsfrt76a', Email: 'xy@sii.be', Firstname: 'Manuel', Lastname: 'Garroso', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'},
  // {Id: 8, PackageId: '1bfregr6a', Email: 'xy@sii.be', Firstname: 'Paul', Lastname: 'Soteby', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 9, PackageId: '1bxafer6a', Email: 'xy@sii.be', Firstname: 'Selma', Lastname: 'Valle', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 10, PackageId: '1bazar76a', Email: 'xy@sii.be', Firstname: 'Samantha', Lastname: 'Price', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'},
  // {Id: 11, PackageId: '1bnsjhd76a', Email: 'xy@sii.be', Firstname: 'Tessa', Lastname: 'Anders', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 12, PackageId: '1bfhhhe76a', Email: 'xy@sii.be', Firstname: 'Cloe', Lastname: 'De Mauris', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 13, PackageId: '1bhhdz76a', Email: 'xy@sii.be', Firstname: 'Antony', Lastname: 'Soprano', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'},
  // {Id: 14, PackageId: '1czrfe76a', Email: 'xy@sii.be', Firstname: 'Alex', Lastname: 'Porter', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 15, PackageId: '1bfjzay76a', Email: 'xy@sii.be', Firstname: 'Robert', Lastname: 'Smile', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 16, PackageId: '1bzfa76a', Email: 'xy@sii.be', Firstname: 'Ulrich', Lastname: 'Thomson', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 17, PackageId: '1bf8dze6a', Email: 'xy@sii.be', Firstname: 'Eric', Lastname: 'Santander', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 18, PackageId: '1bf8klfz6a', Email: 'xy@sii.be', Firstname: 'Patricia', Lastname: 'Moore', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 19, PackageId: '1bcrezga76a', Email: 'xy@sii.be', Firstname: 'Barbara', Lastname: 'Seller', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 20, PackageId: 'fegz8a76a', Email: 'xy@sii.be', Firstname: 'Patrick', Lastname: 'Vos', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 22, PackageId: '1bfmoej76a', Email: 'xy@sii.be', Firstname: 'Tyler', Lastname: 'BoB', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'},
  // {Id: 23, PackageId: '1cretha76a', Email: 'xy@sii.be', Firstname: 'Steven', Lastname: 'Sob', DateTimeCreated: '2018-02-21T07:58:34', DateTimeSigned: '2018-02-21T07:59:31', SignedDocumentUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/signed_20180221065932_TestDocument2.pdf', AuditUrl: 'https://digisiignstore.blob.core.windows.net/1bf8a76a-8da9-4e09-a20f-693408fb7f35/AuditSummary_20180221065933.pdf', Status: 'Signed'}
];

