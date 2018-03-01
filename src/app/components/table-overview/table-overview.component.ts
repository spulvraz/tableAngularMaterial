import {Component, OnInit, Input, Output, EventEmitter, ViewChild, Directive, AfterViewInit, ElementRef, Renderer} from '@angular/core';
import {CellConfiguration, CELL_TYPE} from '../../libraries/CellConfiguration';

import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {FormControl} from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';    // ?
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css']
})
export class TableOverviewComponent implements OnInit {

  displayedColumns = ['Id', 'PackageId', 'Email', 'Firstname', 'Lastname', 'DateTimeCreated',
  'DateTimeSigned', 'SignedDocumentUrl', 'AuditUrl', 'Status'];

  // dataSourceOverview = TEST_OVERVIEW_DATA;     // old
  exampleDatabase = new ExampleDatabase();
  selection = new SelectionModel<string>(true, []);
  dataSourceOverview: ExampleDataSource | null;

  public setColor(element) {
    switch (element.Status) {
      case ('Sent'):
      return COLORS.orange;
      case ('Signed'):
      return COLORS.green;
      default:
      return COLORS.default;
    }
  }

  public hideColumn(): boolean {
    // some logic - now hidden e-mail
    return true;
  }

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
      this.dataSourceOverview = new ExampleDataSource(this.exampleDatabase);
    }
}

export interface OverviewData {
  Id:	number;
  PackageId: string;
  Email: string;
  Firstname: string;
  Lastname:	string;
  DateTimeCreated: string;		      // "2018-02-21T14:10:34"
  DateTimeSigned?: string;
  SignedDocumentUrl?:	string;
  AuditUrl?: string;
  Status: string;
}

const TEST_OVERVIEW_DATA: OverviewData[] = [
  {Id: 1, PackageId: '1bJJJ', Email: 'xy@sii.be', Firstname: 'Carmela', Lastname: 'Soprano',
    DateTimeCreated: new Date('2018-02-20T07:58:34').toDateString(), DateTimeSigned: null, AuditUrl: null, Status: 'Sent'},

  {Id: 2, PackageId: '1bf8aGGC', Email: 'xy@sii.be', Firstname: 'Viktor',  Lastname: 'Stain',
  DateTimeCreated: new Date('2018-02-22T07:58:34').toLocaleDateString(),
  DateTimeSigned: new Date('2018-02-25T07:59:31').toLocaleDateString(),
  SignedDocumentUrl: 'https://angular.io/tutorial', AuditUrl: 'https://angular.io/tutorial', Status: 'Signed'},

  {Id: 3, PackageId: '1bf8ahh', Email: 'xy@sii.be', Firstname: 'Rosemary', Lastname: 'Schuller',
  DateTimeCreated: new Date('2018-02-23T07:58:34').toLocaleDateString(),
  DateTimeSigned: new Date('2018-02-28T07:59:31').toLocaleDateString(), SignedDocumentUrl: 'https://angular.io/tutorial',
  AuditUrl: 'https://angular.io/tutorial', Status: 'Signed'},

  {Id: 4, PackageId: '1bf8sbf', Email: 'xy@sii.be', Firstname: 'Petra',
  Lastname: 'Vratilova', DateTimeCreated: new Date('2018-02-24T07:58:34').toLocaleDateString(),
  DateTimeSigned: null, SignedDocumentUrl: null, AuditUrl: null, Status: 'Sent'}
];

// todo map colours to status columns for dynamic colours
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const COLORS = {
  orange: 'orange',
  green: 'green',
  default: 'black',
  red: 'red'};

// https://github.com/angular/material2/issues/6178
// https://plnkr.co/edit/oQOYQgW0vCx8tfAgb1w9?p=preview
// database creation

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<OverviewData[]> = new BehaviorSubject<OverviewData[]>([]);
  get data(): OverviewData[] { return this.dataChange.value; }

  constructor() {
    // Fill up the database with overview rows.
    for (let i = 0, len = TEST_OVERVIEW_DATA.length; i < len; i++) {
      this.addOverview(TEST_OVERVIEW_DATA[i]);
    }
  }

  /** Adds a new addOverview to the database. */
  addOverview(row) {
    const copiedData = this.data.slice();
    copiedData.push(row);
    this.dataChange.next(copiedData);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {

  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<OverviewData[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange
      // add filter, paginator, sorting
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice();
    });
  }

  disconnect() {}
}
