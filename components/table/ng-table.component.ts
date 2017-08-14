import { Component, EventEmitter, Input, Output, TemplateRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'ng-table',
    template: `
    <table class="table dataTable" ngClass="{{config.className || ''}}"
           role="grid" style="width: 100%;">
      <thead>

        <ng-template #defaultHeaderRowTpl>
            <tr role="row">
            <th *ngFor="let column of columns" [ngTableSorting]="config" [column]="column"
                (sortChanged)="onChangeTable($event)" ngClass="{{column.className || ''}}">
              {{column.title}}
              <i *ngIf="config && column.sort" class="pull-right fa"
                [ngClass]="{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}"></i>
            </th>
          </tr>
        </ng-template>
       <ng-container *ngTemplateOutlet="(headerRowTemplate ? headerRowTemplate : defaultHeaderRowTpl); context: ctx"></ng-container>
      </thead>
      <tbody>
      <tr *ngIf="showFilterRow" class="test">
        <td *ngFor="let column of columns">
          <input *ngIf="column.filtering" placeholder="{{column.filtering.placeholder}}"
                 [ngTableFiltering]="column.filtering"
                 class="form-control"
                 style="width: auto;"
                 (tableChanged)="onChangeTable(config)"/>
        </td>
      </tr>
        <ng-template #defaultRowTpl>
            <tr *ngFor="let row of rows">
                <td (click)="cellClick(row, column.name)" *ngFor="let column of columns" [innerHtml]="sanitize(getData(row, column.name))"></td>
            </tr>
        </ng-template>
        <ng-container *ngTemplateOutlet="(rowTemplate ? rowTemplate : defaultRowTpl); context: ctx"></ng-container>
      </tbody>
    </table>
  `
})
export class NgTableComponent implements AfterViewInit {
    // Table values
    @Input() public rows: Array<any> = [];
    @Input() rowTemplate: TemplateRef<any>;
    @Input() headerRowTemplate: TemplateRef<any>;
    @Input()
    public set config(conf: any) {
        if (!conf.className) {
            conf.className = 'table-striped table-bordered';
        }
        if (conf.className instanceof Array) {
            conf.className = conf.className.join(' ');
        }
        this._config = conf;
    }

    // Outputs (Events)
    @Output() public tableChanged: EventEmitter<any> = new EventEmitter();
    @Output() public initTable: EventEmitter<any> = new EventEmitter();
    @Output() public cellClicked: EventEmitter<any> = new EventEmitter();

    public showFilterRow: Boolean = false;

    @Input()
    public set columns(values: Array<any>) {
        values.forEach((value: any) => {
            if (value.filtering) {
                this.showFilterRow = true;
            }
            if (value.className && value.className instanceof Array) {
                value.className = value.className.join(' ');
            }
            let column = this._columns.find((col: any) => col.name === value.name);
            if (column) {
                Object.assign(column, value);
            }
            if (!column) {
                this._columns.push(value);
            }
        });
    }

    private _columns: Array<any> = [];
    private _config: any = {};
    ctx: any;
    public constructor(private sanitizer: DomSanitizer) {
        this.ctx = this;
    }

    public sanitize = (html: string): SafeHtml => {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public get columns(): Array<any> {
        return this._columns;
    }

    public get config(): any {
        return this._config;
    }

    ngAfterViewInit() {
      this.initTable.emit(true);
    }
    public get configColumns(): any {
        let sortColumns: Array<any> = [];

        this.columns.forEach((column: any) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });

        return { columns: sortColumns };
    }

    public onChangeTable(column: any): void {
        this._columns.forEach((col: any) => {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({ sorting: this.configColumns });
    }

    public getData(row: any, propertyName: string): string {
        return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
    }

    public cellClick(row: any, column: any): void {
        this.cellClicked.emit({ row, column });
    }
}
