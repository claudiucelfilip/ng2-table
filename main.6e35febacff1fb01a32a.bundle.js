webpackJsonp([2],{

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var common_1 = __webpack_require__(47);
	var ng_table_component_1 = __webpack_require__(327);
	var ng_table_filtering_directive_1 = __webpack_require__(324);
	var ng_table_paging_directive_1 = __webpack_require__(325);
	var ng_table_sorting_directive_1 = __webpack_require__(326);
	var Ng2TableModule = (function () {
	    function Ng2TableModule() {
	    }
	    Ng2TableModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective],
	            exports: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective]
	        })
	    ], Ng2TableModule);
	    return Ng2TableModule;
	}());
	exports.Ng2TableModule = Ng2TableModule;


/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
	function setProperty(renderer, elementRef, propName, propValue) {
	    renderer.setElementProperty(elementRef, propName, propValue);
	}
	var NgTableFilteringDirective = (function () {
	    function NgTableFilteringDirective(element, renderer) {
	        this.ngTableFiltering = {
	            filterString: '',
	            columnName: 'name'
	        };
	        this.tableChanged = new core_1.EventEmitter();
	        this.element = element;
	        this.renderer = renderer;
	        // Set default value for filter
	        setProperty(this.renderer, this.element, 'value', this.ngTableFiltering.filterString);
	    }
	    Object.defineProperty(NgTableFilteringDirective.prototype, "config", {
	        get: function () {
	            return this.ngTableFiltering;
	        },
	        set: function (value) {
	            this.ngTableFiltering = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTableFilteringDirective.prototype.onChangeFilter = function (event) {
	        this.ngTableFiltering.filterString = event;
	        this.tableChanged.emit({ filtering: this.ngTableFiltering });
	    };
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object)
	    ], NgTableFilteringDirective.prototype, "ngTableFiltering", void 0);
	    __decorate([
	        core_1.Output(),
	        __metadata("design:type", core_1.EventEmitter)
	    ], NgTableFilteringDirective.prototype, "tableChanged", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object),
	        __metadata("design:paramtypes", [Object])
	    ], NgTableFilteringDirective.prototype, "config", null);
	    __decorate([
	        core_1.HostListener('input', ['$event.target.value']),
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", [Object]),
	        __metadata("design:returntype", void 0)
	    ], NgTableFilteringDirective.prototype, "onChangeFilter", null);
	    NgTableFilteringDirective = __decorate([
	        core_1.Directive({ selector: '[ngTableFiltering]' }),
	        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
	    ], NgTableFilteringDirective);
	    return NgTableFilteringDirective;
	}());
	exports.NgTableFilteringDirective = NgTableFilteringDirective;


/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var NgTablePagingDirective = (function () {
	    function NgTablePagingDirective() {
	        this.ngTablePaging = true;
	        this.tableChanged = new core_1.EventEmitter();
	    }
	    Object.defineProperty(NgTablePagingDirective.prototype, "config", {
	        get: function () {
	            return this.ngTablePaging;
	        },
	        set: function (value) {
	            this.ngTablePaging = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTablePagingDirective.prototype.onChangePage = function (event) {
	        // Object.assign(this.config, event);
	        if (this.ngTablePaging) {
	            this.tableChanged.emit({ paging: event });
	        }
	    };
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Boolean)
	    ], NgTablePagingDirective.prototype, "ngTablePaging", void 0);
	    __decorate([
	        core_1.Output(),
	        __metadata("design:type", core_1.EventEmitter)
	    ], NgTablePagingDirective.prototype, "tableChanged", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object),
	        __metadata("design:paramtypes", [Object])
	    ], NgTablePagingDirective.prototype, "config", null);
	    __decorate([
	        core_1.HostListener('pagechanged', ['$event']),
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", [Object]),
	        __metadata("design:returntype", void 0)
	    ], NgTablePagingDirective.prototype, "onChangePage", null);
	    NgTablePagingDirective = __decorate([
	        core_1.Directive({ selector: '[ngTablePaging]' })
	    ], NgTablePagingDirective);
	    return NgTablePagingDirective;
	}());
	exports.NgTablePagingDirective = NgTablePagingDirective;


/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var NgTableSortingDirective = (function () {
	    function NgTableSortingDirective() {
	        this.sortChanged = new core_1.EventEmitter();
	    }
	    Object.defineProperty(NgTableSortingDirective.prototype, "config", {
	        get: function () {
	            return this.ngTableSorting;
	        },
	        set: function (value) {
	            this.ngTableSorting = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTableSortingDirective.prototype.onToggleSort = function (event) {
	        if (event) {
	            event.preventDefault();
	        }
	        if (this.ngTableSorting && this.column && this.column.sort !== false) {
	            switch (this.column.sort) {
	                case 'asc':
	                    this.column.sort = 'desc';
	                    break;
	                case 'desc':
	                    this.column.sort = '';
	                    break;
	                default:
	                    this.column.sort = 'asc';
	                    break;
	            }
	            this.sortChanged.emit(this.column);
	        }
	    };
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object)
	    ], NgTableSortingDirective.prototype, "ngTableSorting", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object)
	    ], NgTableSortingDirective.prototype, "column", void 0);
	    __decorate([
	        core_1.Output(),
	        __metadata("design:type", core_1.EventEmitter)
	    ], NgTableSortingDirective.prototype, "sortChanged", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object),
	        __metadata("design:paramtypes", [Object])
	    ], NgTableSortingDirective.prototype, "config", null);
	    __decorate([
	        core_1.HostListener('click', ['$event']),
	        __metadata("design:type", Function),
	        __metadata("design:paramtypes", [Object]),
	        __metadata("design:returntype", void 0)
	    ], NgTableSortingDirective.prototype, "onToggleSort", null);
	    NgTableSortingDirective = __decorate([
	        core_1.Directive({ selector: '[ngTableSorting]' })
	    ], NgTableSortingDirective);
	    return NgTableSortingDirective;
	}());
	exports.NgTableSortingDirective = NgTableSortingDirective;


/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var platform_browser_1 = __webpack_require__(48);
	var NgTableComponent = (function () {
	    function NgTableComponent(sanitizer) {
	        var _this = this;
	        this.sanitizer = sanitizer;
	        // Table values
	        this.rows = [];
	        // Outputs (Events)
	        this.tableChanged = new core_1.EventEmitter();
	        this.initTable = new core_1.EventEmitter();
	        this.cellClicked = new core_1.EventEmitter();
	        this.showFilterRow = false;
	        this._columns = [];
	        this._config = {};
	        this.sanitize = function (html) {
	            return _this.sanitizer.bypassSecurityTrustHtml(html);
	        };
	        this.ctx = this;
	    }
	    Object.defineProperty(NgTableComponent.prototype, "config", {
	        get: function () {
	            return this._config;
	        },
	        set: function (conf) {
	            if (!conf.className) {
	                conf.className = 'table-striped table-bordered';
	            }
	            if (conf.className instanceof Array) {
	                conf.className = conf.className.join(' ');
	            }
	            this._config = conf;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgTableComponent.prototype, "columns", {
	        get: function () {
	            return this._columns;
	        },
	        set: function (values) {
	            var _this = this;
	            this._columns = [];
	            values.forEach(function (value) {
	                if (value.filtering) {
	                    _this.showFilterRow = true;
	                }
	                if (value.className && value.className instanceof Array) {
	                    value.className = value.className.join(' ');
	                }
	                var column = _this._columns.find(function (col) { return col.name === value.name; });
	                if (column) {
	                    Object.assign(column, value);
	                }
	                if (!column) {
	                    _this._columns.push(value);
	                }
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTableComponent.prototype.ngAfterViewInit = function () {
	        this.initTable.emit(true);
	    };
	    Object.defineProperty(NgTableComponent.prototype, "configColumns", {
	        get: function () {
	            var sortColumns = [];
	            this.columns.forEach(function (column) {
	                if (column.sort) {
	                    sortColumns.push(column);
	                }
	            });
	            return { columns: sortColumns };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgTableComponent.prototype.onChangeTable = function (column) {
	        this._columns.forEach(function (col) {
	            if (col.name !== column.name && col.sort !== false) {
	                col.sort = '';
	            }
	        });
	        this.tableChanged.emit({ sorting: this.configColumns });
	    };
	    NgTableComponent.prototype.getData = function (row, propertyName) {
	        return propertyName.split('.').reduce(function (prev, curr) { return prev[curr]; }, row);
	    };
	    NgTableComponent.prototype.cellClick = function (row, column) {
	        this.cellClicked.emit({ row: row, column: column });
	    };
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Array)
	    ], NgTableComponent.prototype, "rows", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", core_1.TemplateRef)
	    ], NgTableComponent.prototype, "rowTemplate", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", core_1.TemplateRef)
	    ], NgTableComponent.prototype, "headerRowTemplate", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Object),
	        __metadata("design:paramtypes", [Object])
	    ], NgTableComponent.prototype, "config", null);
	    __decorate([
	        core_1.Output(),
	        __metadata("design:type", core_1.EventEmitter)
	    ], NgTableComponent.prototype, "tableChanged", void 0);
	    __decorate([
	        core_1.Output(),
	        __metadata("design:type", core_1.EventEmitter)
	    ], NgTableComponent.prototype, "initTable", void 0);
	    __decorate([
	        core_1.Output(),
	        __metadata("design:type", core_1.EventEmitter)
	    ], NgTableComponent.prototype, "cellClicked", void 0);
	    __decorate([
	        core_1.Input(),
	        __metadata("design:type", Array),
	        __metadata("design:paramtypes", [Array])
	    ], NgTableComponent.prototype, "columns", null);
	    NgTableComponent = __decorate([
	        core_1.Component({
	            selector: 'ng-table',
	            template: "\n    <table class=\"table dataTable\" ngClass=\"{{config.className || ''}}\"\n           role=\"grid\" style=\"width: 100%;\">\n      <thead>\n\n        <ng-template #defaultHeaderRowTpl>\n            <tr role=\"row\">\n            <th *ngFor=\"let column of columns\" [ngTableSorting]=\"config\" [column]=\"column\"\n                (sortChanged)=\"onChangeTable($event)\" ngClass=\"{{column.className || ''}}\">\n              {{column.title}}\n              <i *ngIf=\"config && column.sort\" class=\"pull-right fa\"\n                [ngClass]=\"{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}\"></i>\n            </th>\n          </tr>\n        </ng-template>\n       <ng-container *ngTemplateOutlet=\"(headerRowTemplate ? headerRowTemplate : defaultHeaderRowTpl); context: ctx\"></ng-container>\n      </thead>\n      <tbody>\n      <tr *ngIf=\"showFilterRow\" class=\"test\">\n        <td *ngFor=\"let column of columns\">\n          <input *ngIf=\"column.filtering\" placeholder=\"{{column.filtering.placeholder}}\"\n                 [ngTableFiltering]=\"column.filtering\"\n                 class=\"form-control\"\n                 style=\"width: auto;\"\n                 (tableChanged)=\"onChangeTable(config)\"/>\n        </td>\n      </tr>\n        <ng-template #defaultRowTpl>\n            <tr *ngFor=\"let row of rows\">\n                <td (click)=\"cellClick(row, column.name)\" *ngFor=\"let column of columns\" [innerHtml]=\"sanitize(getData(row, column.name))\"></td>\n            </tr>\n        </ng-template>\n        <ng-container *ngTemplateOutlet=\"(rowTemplate ? rowTemplate : defaultRowTpl); context: ctx\"></ng-container>\n      </tbody>\n    </table>\n  "
	        }),
	        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
	    ], NgTableComponent);
	    return NgTableComponent;
	}());
	exports.NgTableComponent = NgTableComponent;


/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports = "<h3 id=\"usage\">Usage</h3> <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Ng2TableModule <span class=\"token punctuation\">}</span> from <span class=\"token string\">'ng2-table/ng2-table'</span><span class=\"token punctuation\">;</span>\n</code></pre> <p>or if you want to import specified plugins (Table component is required, the others are optional):</p> <pre class=\"language-typescript\"><code class=\"language-typescript\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> NgTableComponent<span class=\"token punctuation\">,</span> NgTableFilteringDirective<span class=\"token punctuation\">,</span> NgTablePagingDirective<span class=\"token punctuation\">,</span> NgTableSortingDirective <span class=\"token punctuation\">}</span> from <span class=\"token string\">'ng2-table/ng2-table'</span><span class=\"token punctuation\">;</span>\n</code></pre> <p>in this case, don&#39;t forget to include all of the imported entities to your module</p> <h3 id=\"utilisation\">Utilisation</h3> <p>There are only simple table with 3 plugins/directives: <code>filtering</code>, <code>paging</code>, <code>sorting</code>. You don&#39;t need special <code>config</code> variable for storing settings for all plugins as is used in demo example. It&#39;s just showing usage sample.</p> <h3 id=\"inputs-properties-\">Inputs (Properties)</h3> <ul> <li><code>page</code> (<code>number</code>) - the default page after the table component loading</li> <li><code>itemsPerPage</code> (<code>number</code>) - number of the displaying items (rows) on a page</li> <li><code>maxSize</code> (<code>number</code>) - number of the displaying pages before <code>...</code></li> <li><code>numPages</code> (<code>number</code>) - total number of the pages</li> <li><p><code>length</code> (<code>number</code>) - total number of the items after filtering (of it&#39;s chosen)</p> </li> <li><p><code>config</code> (<code>?any</code>) - config for setup all plugins (filtering, sorting, paging):</p> <ul> <li><code>paging</code> (<code>?boolean</code>) - - switch on the paging plugin</li> <li><code>sorting</code> (<code>?any</code>) - switch on the sorting plugin<ul> <li><code>columns</code> (<code>Array&lt;any&gt;</code>) - only list of the columns for sorting</li> </ul> </li> <li><code>filtering</code> (<code>?any</code>) - switch on the filtering plugin<ul> <li><code>filterString</code> (<code>string</code>) - the default value for filter</li> <li><code>columnName</code> (<code>string</code>) - the property name in raw data</li> </ul> </li> <li><code>className</code> (<code>string|Array&lt;string&gt;</code>) - additional CSS classes that should be added to a <table></table></li> </ul> </li> <li><p><code>rows</code> (<code>?Array&lt;any&gt;</code>) - only list of the rows which should be displayed</p> </li> <li><code>columns</code> (<code>?Array&lt;any&gt;</code>) - config for columns (+ sorting settings if it&#39;s needed)<ul> <li><code>title</code> (<code>string</code>) - the title of column header</li> <li><code>name</code> (<code>string</code>) - the property name in data</li> <li><code>sort</code> (<code>?string|boolean</code>) - config for columns (+ sorting settings if it&#39;s needed), sorting is switched on by default for each column</li> <li><code>className</code> (<code>string|Array&lt;string&gt;</code>) - additional CSS classes that should be added to a column header</li> <li><code>filtering</code> (<code>?any</code>) - switch on the filtering plugin<ul> <li><code>filterString</code> (<code>string</code>) - the default value for filter</li> <li><code>columnName</code> (<code>string</code>) - the property name in raw data</li> </ul> </li> </ul> </li> </ul> <h3 id=\"outputs-events-\">Outputs (Events)</h3> <ul> <li><code>tableChanged</code>: data change event handler</li> <li><code>cellClicked</code>: onclick event handler</li> </ul> <h3 id=\"filter\">Filter</h3> <p>The responsibility of the filtering issue falls on user. You should choose on which columns the filter would be applied. You could add any number of different filters. Filter string - it&#39;s a string for matching values in raw data. Column name refers to the property name in raw data. The rest logic you could organize by yourself (the order of filters, data formats, etc). Even you could use filter for list of data columns.</p> <p>You can also set up <code>filtering</code> param for columns, in this case filter box will appear in first row of the table.</p> <h3 id=\"sorting\">Sorting</h3> <p>Data sorting could be in 3 modes: asc, desc and without sorting data (as it comes from backend or somewhere else). If you want to switch off the sorting for some of the columns then you should set it forcibly in columns config (set property sort to false value for each column you want)</p> <h3 id=\"paging\">Paging</h3> <p>Pagination could be used from <a href=\"https://github.com/valor-software/ng2-bootstrap\">ng2-bootstrap</a> - <a href=\"http://valor-software.github.io/ng2-bootstrap/#pagination\">pagination component</a>. When the page is changed, the pagination component will emit event <code>tableChanged</code> with an object {page, itemsPerPage}. Then you can easily subscribe on it and request corresponding raw data.</p> ";

/***/ },

/***/ 132:
/***/ function(module, exports) {

	module.exports = "";

/***/ },

/***/ 136:
/***/ function(module, exports) {

	module.exports = "<br>\n<section id=\"{{name.toLowerCase()}}\">\n  <div class=\"row\"><h1>{{name}}<small>(<a href=\"{{src}}\">src</a>)</small></h1></div>\n\n  <hr>\n\n  <div class=\"row\"><div class=\"col-md-12\" [innerHTML]=\"titleDoc\"></div></div>\n\n  <div class=\"row\">\n    <h2>Example</h2>\n    <div class=\"card card-block panel panel-default panel-body\">\n      <table-demo></table-demo>\n    </div>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <tabset>\n      <tab heading=\"Markup\">\n        <div class=\"card card-block panel panel-default panel-body\">\n          <pre class=\"language-html\"><code class=\"language-html\" [innerHTML]=\"html\"></code></pre>\n        </div>\n      </tab>\n      <tab heading=\"TypeScript\">\n        <div class=\"card card-block panel panel-default panel-body\">\n          <pre class=\"language-typescript\"><code class=\"language-typescript\" [innerHTML]=\"ts\"></code></pre>\n        </div>\n      </tab>\n    </tabset>\n  </div>\n\n  <br>\n\n  <div class=\"row\">\n    <h2>API</h2>\n    <div class=\"card card-block panel panel-default panel-body\" [innerHTML]=\"doc\"></div>\n  </div>\n</section>\n"

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	// webpack html imports
	var doc = __webpack_require__(131);
	var titleDoc = __webpack_require__(132);
	var ts = __webpack_require__(135);
	var html = __webpack_require__(134);
	var TableSectionComponent = (function () {
	    function TableSectionComponent() {
	        this.name = 'Table';
	        this.src = 'https://github.com/valor-software/ng2-table/tree/master/components/table';
	        this.ts = ts;
	        this.doc = doc;
	        this.titleDoc = titleDoc;
	        this.html = html;
	    }
	    TableSectionComponent = __decorate([
	        core_1.Component({
	            selector: 'table-section',
	            template: __webpack_require__(136)
	        })
	    ], TableSectionComponent);
	    return TableSectionComponent;
	}());
	exports.TableSectionComponent = TableSectionComponent;


/***/ },

/***/ 329:
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TableData = [
	    {
	        'name': 'Victoria Cantrell',
	        'position': 'Integer Corporation',
	        'office': 'Croatia',
	        'ext': "<strong>0839</strong>",
	        'startDate': '2015/08/19',
	        'salary': 208.178
	    }, {
	        'name': 'Pearl Crosby',
	        'position': 'In PC',
	        'office': 'Cambodia',
	        'ext': "<strong>8262</strong>",
	        'startDate': '2014/10/08',
	        'salary': 114.367
	    }, {
	        'name': 'Colette Foley',
	        'position': 'Lorem Inc.',
	        'office': 'Korea, North',
	        'ext': '8968',
	        'startDate': '2015/07/19',
	        'salary': 721.473
	    }, {
	        'name': 'Anastasia Shaffer',
	        'position': 'Dolor Nulla Semper LLC',
	        'office': 'Suriname',
	        'ext': '7980',
	        'startDate': '2015/04/20',
	        'salary': 264.620
	    }, {
	        'name': 'Gabriel Castro',
	        'position': 'Sed Limited',
	        'office': 'Bahrain',
	        'ext': '0757',
	        'startDate': '2015/03/04',
	        'salary': 651.350
	    }, {
	        'name': 'Cherokee Ware',
	        'position': 'Tincidunt LLC',
	        'office': 'United Kingdom (Great Britain)',
	        'ext': '3995',
	        'startDate': '2015/06/17',
	        'salary': 666.259
	    }, {
	        'name': 'Barry Moss',
	        'position': 'Sociis Industries',
	        'office': 'Western Sahara',
	        'ext': '6697',
	        'startDate': '2015/08/13',
	        'salary': 541.631
	    }, {
	        'name': 'Maryam Tucker',
	        'position': 'Elit Pede Malesuada Inc.',
	        'office': 'Brazil',
	        'ext': '5203',
	        'startDate': '2014/10/02',
	        'salary': 182.294
	    }, {
	        'name': 'Constance Clayton',
	        'position': 'Auctor Velit Aliquam LLP',
	        'office': 'United Arab Emirates',
	        'ext': '4204',
	        'startDate': '2015/08/01',
	        'salary': 218.597
	    }, {
	        'name': 'Rogan Tucker',
	        'position': 'Arcu Vestibulum Ante Associates',
	        'office': 'Jersey',
	        'ext': '0885',
	        'startDate': '2015/01/04',
	        'salary': 861.632
	    }, {
	        'name': 'Emery Mcdowell',
	        'position': 'Gravida Company',
	        'office': 'New Zealand',
	        'ext': '3951',
	        'startDate': '2015/06/02',
	        'salary': 413.568
	    }, {
	        'name': 'Yael Greer',
	        'position': 'Orci Limited',
	        'office': 'Madagascar',
	        'ext': '1416',
	        'startDate': '2014/12/04',
	        'salary': 121.831
	    }, {
	        'name': 'Jared Burgess',
	        'position': 'Auctor Incorporated',
	        'office': 'Burundi',
	        'ext': '4673',
	        'startDate': '2015/01/12',
	        'salary': 62.243
	    }, {
	        'name': 'Sharon Campbell',
	        'position': 'Elit Curabitur Sed Consulting',
	        'office': 'Comoros',
	        'ext': '6274',
	        'startDate': '2014/09/14',
	        'salary': 200.854
	    }, {
	        'name': 'Yeo Church',
	        'position': 'Donec Vitae Erat PC',
	        'office': 'Saudi Arabia',
	        'ext': '0269',
	        'startDate': '2015/06/07',
	        'salary': 581.193
	    }, {
	        'name': 'Kylie Barlow',
	        'position': 'Fermentum Risus Corporation',
	        'office': 'Papua New Guinea',
	        'ext': '2010',
	        'startDate': '2014/12/03',
	        'salary': 418.115
	    }, {
	        'name': 'Nell Leonard',
	        'position': 'Vestibulum Consulting',
	        'office': 'Saudi Arabia',
	        'ext': '4839',
	        'startDate': '2015/05/29',
	        'salary': 466.201
	    }, {
	        'name': 'Brandon Fleming',
	        'position': 'Donec Egestas Associates',
	        'office': 'Poland',
	        'ext': '0622',
	        'startDate': '2015/01/22',
	        'salary': 800.011
	    }, {
	        'name': 'Inga Pena',
	        'position': 'Et Magnis Dis Limited',
	        'office': 'Belgium',
	        'ext': '8140',
	        'startDate': '2015/05/18',
	        'salary': 564.245
	    }, {
	        'name': 'Arden Russo',
	        'position': 'Est Tempor Bibendum Corp.',
	        'office': 'Dominican Republic',
	        'ext': '6774',
	        'startDate': '2015/07/23',
	        'salary': 357.222
	    }, {
	        'name': 'Liberty Gallegos',
	        'position': 'Nec Diam LLC',
	        'office': 'Ghana',
	        'ext': '9266',
	        'startDate': '2015/06/18',
	        'salary': 554.375
	    }, {
	        'name': 'Dennis York',
	        'position': 'Nullam Suscipit Foundation',
	        'office': 'Namibia',
	        'ext': '3133',
	        'startDate': '2015/03/20',
	        'salary': 90.417
	    }, {
	        'name': 'Petra Chandler',
	        'position': 'Pede Nonummy Inc.',
	        'office': 'Namibia',
	        'ext': '3367',
	        'startDate': '2015/03/26',
	        'salary': 598.915
	    }, {
	        'name': 'Aurelia Marshall',
	        'position': 'Donec Consulting',
	        'office': 'Nicaragua',
	        'ext': '2690',
	        'startDate': '2015/08/18',
	        'salary': 201.680
	    }, {
	        'name': 'Rose Carter',
	        'position': 'Enim Consequat Purus Industries',
	        'office': 'Morocco',
	        'ext': '0619',
	        'startDate': '2015/03/06',
	        'salary': 220.187
	    }, {
	        'name': 'Denton Atkins',
	        'position': 'Non Vestibulum PC',
	        'office': 'Mali',
	        'ext': '5806',
	        'startDate': '2015/04/19',
	        'salary': 324.588
	    }, {
	        'name': 'Germaine Osborn',
	        'position': 'Tristique Aliquet PC',
	        'office': 'Lesotho',
	        'ext': '4469',
	        'startDate': '2015/01/19',
	        'salary': 351.108
	    }, {
	        'name': 'Nell Butler',
	        'position': 'Sit Amet Dapibus Industries',
	        'office': 'Cuba',
	        'ext': '7860',
	        'startDate': '2015/01/06',
	        'salary': 230.072
	    }, {
	        'name': 'Brent Stein',
	        'position': 'Eu Augue Porttitor LLP',
	        'office': 'Cyprus',
	        'ext': '4697',
	        'startDate': '2014/11/02',
	        'salary': 853.413
	    }, {
	        'name': 'Alexandra Shaw',
	        'position': 'Aenean Gravida Limited',
	        'office': 'Uruguay',
	        'ext': '1140',
	        'startDate': '2015/05/16',
	        'salary': 401.970
	    }, {
	        'name': 'Veronica Allison',
	        'position': 'Aliquet Diam Sed Institute',
	        'office': 'Samoa',
	        'ext': '9966',
	        'startDate': '2015/05/17',
	        'salary': 79.193
	    }, {
	        'name': 'Katelyn Gamble',
	        'position': 'Sed Associates',
	        'office': 'Mauritius',
	        'ext': '4767',
	        'startDate': '2015/03/20',
	        'salary': 484.299
	    }, {
	        'name': 'James Greer',
	        'position': 'A Dui Incorporated',
	        'office': 'Norway',
	        'ext': '5517',
	        'startDate': '2015/02/21',
	        'salary': 333.518
	    }, {
	        'name': 'Cain Vasquez',
	        'position': 'Nulla Facilisis Suspendisse Institute',
	        'office': 'China',
	        'ext': '3179',
	        'startDate': '2015/05/27',
	        'salary': 651.761
	    }, {
	        'name': 'Shaeleigh Barr',
	        'position': 'Eleifend Cras Institute',
	        'office': 'Ghana',
	        'ext': '5904',
	        'startDate': '2015/04/01',
	        'salary': 627.095
	    }, {
	        'name': 'Baker Mckay',
	        'position': 'Ut Sagittis Associates',
	        'office': 'Isle of Man',
	        'ext': '9840',
	        'startDate': '2015/01/12',
	        'salary': 742.247
	    }, {
	        'name': 'Jayme Pace',
	        'position': 'Cras Eu Tellus Associates',
	        'office': 'Bouvet Island',
	        'ext': '4580',
	        'startDate': '2015/08/12',
	        'salary': 591.588
	    }, {
	        'name': 'Reuben Albert',
	        'position': 'Lobortis Institute',
	        'office': 'Zambia',
	        'ext': '8725',
	        'startDate': '2015/04/04',
	        'salary': 791.408
	    }, {
	        'name': 'Idola Burns',
	        'position': 'Non Industries',
	        'office': 'Myanmar',
	        'ext': '3201',
	        'startDate': '2015/06/24',
	        'salary': 142.906
	    }, {
	        'name': 'Laura Macias',
	        'position': 'Phasellus Inc.',
	        'office': 'Mauritania',
	        'ext': '2033',
	        'startDate': '2014/11/21',
	        'salary': 226.591
	    }, {
	        'name': 'Nichole Salas',
	        'position': 'Duis PC',
	        'office': 'Madagascar',
	        'ext': '4397',
	        'startDate': '2015/01/18',
	        'salary': 234.196
	    }, {
	        'name': 'Hunter Walter',
	        'position': 'Ullamcorper Duis Cursus Foundation',
	        'office': 'Brazil',
	        'ext': '2227',
	        'startDate': '2015/02/28',
	        'salary': 655.052
	    }, {
	        'name': 'Asher Rich',
	        'position': 'Mauris Ipsum LLP',
	        'office': 'Paraguay',
	        'ext': '7288',
	        'startDate': '2015/08/08',
	        'salary': 222.946
	    }, {
	        'name': 'Angela Carlson',
	        'position': 'Donec Tempor Institute',
	        'office': 'Papua New Guinea',
	        'ext': '5416',
	        'startDate': '2015/02/12',
	        'salary': 562.194
	    }, {
	        'name': 'James Dorsey',
	        'position': 'Ipsum Leo Associates',
	        'office': 'Congo (Brazzaville)',
	        'ext': '6019',
	        'startDate': '2015/01/10',
	        'salary': 629.925
	    }, {
	        'name': 'Wesley Cobb',
	        'position': 'Nunc Est Incorporated',
	        'office': 'Australia',
	        'ext': '6466',
	        'startDate': '2015/01/30',
	        'salary': 343.476
	    }, {
	        'name': 'Meghan Stephens',
	        'position': 'Interdum PC',
	        'office': 'Turkey',
	        'ext': '8001',
	        'startDate': '2014/10/11',
	        'salary': 469.305
	    }, {
	        'name': 'Bertha Herrera',
	        'position': 'Amet Limited',
	        'office': 'Kenya',
	        'ext': '4799',
	        'startDate': '2014/11/22',
	        'salary': 56.606
	    }, {
	        'name': 'Karina Key',
	        'position': 'Quisque Varius Nam Company',
	        'office': 'France',
	        'ext': '3907',
	        'startDate': '2015/03/26',
	        'salary': 314.260
	    }, {
	        'name': 'Uriel Carson',
	        'position': 'Penatibus PC',
	        'office': 'Venezuela',
	        'ext': '5902',
	        'startDate': '2015/01/07',
	        'salary': 106.335
	    }, {
	        'name': 'Mira Baird',
	        'position': 'Felis Orci PC',
	        'office': 'Niue',
	        'ext': '4189',
	        'startDate': '2015/08/25',
	        'salary': 515.671
	    }, {
	        'name': 'Ursula Parrish',
	        'position': 'Ac Corporation',
	        'office': 'Macao',
	        'ext': '4771',
	        'startDate': '2015/06/30',
	        'salary': 72.295
	    }, {
	        'name': 'Josephine Sykes',
	        'position': 'Blandit Congue Limited',
	        'office': 'Holy See (Vatican City State)',
	        'ext': '4684',
	        'startDate': '2014/12/22',
	        'salary': 694.656
	    }, {
	        'name': 'Maggie Sims',
	        'position': 'Vulputate Posuere Industries',
	        'office': 'Sudan',
	        'ext': '6482',
	        'startDate': '2014/11/22',
	        'salary': 363.743
	    }, {
	        'name': 'Rogan Fuentes',
	        'position': 'Vestibulum Accumsan Neque Company',
	        'office': 'Jersey',
	        'ext': '4837',
	        'startDate': '2015/07/29',
	        'salary': 606.004
	    }, {
	        'name': 'Maya Haney',
	        'position': 'Ac Foundation',
	        'office': 'Falkland Islands',
	        'ext': '5752',
	        'startDate': '2015/09/03',
	        'salary': 745.500
	    }, {
	        'name': 'Aquila Battle',
	        'position': 'Sociis Natoque Penatibus Foundation',
	        'office': 'Azerbaijan',
	        'ext': '8470',
	        'startDate': '2015/03/06',
	        'salary': 582.265
	    }, {
	        'name': 'Connor Coleman',
	        'position': 'Orci Lacus Vestibulum Foundation',
	        'office': 'Croatia',
	        'ext': '6217',
	        'startDate': '2014/10/21',
	        'salary': 416.958
	    }, {
	        'name': 'Charity Thomas',
	        'position': 'Convallis Ligula Donec Inc.',
	        'office': 'Benin',
	        'ext': '6240',
	        'startDate': '2015/07/12',
	        'salary': 540.999
	    }, {
	        'name': 'Blythe Powers',
	        'position': 'Amet Orci Limited',
	        'office': 'Falkland Islands',
	        'ext': '5608',
	        'startDate': '2015/01/23',
	        'salary': 480.067
	    }, {
	        'name': 'Adria Battle',
	        'position': 'Ornare Lectus Incorporated',
	        'office': 'British Indian Ocean Territory',
	        'ext': '7419',
	        'startDate': '2015/05/28',
	        'salary': 257.937
	    }, {
	        'name': 'Melanie Mcintyre',
	        'position': 'Nunc Corp.',
	        'office': 'Mongolia',
	        'ext': '4326',
	        'startDate': '2015/01/06',
	        'salary': 359.737
	    }, {
	        'name': 'Keely Bauer',
	        'position': 'Nec Tempus Institute',
	        'office': 'Somalia',
	        'ext': '8372',
	        'startDate': '2015/03/09',
	        'salary': 99.718
	    }, {
	        'name': 'Noelani Strong',
	        'position': 'Nec LLP',
	        'office': 'Iran',
	        'ext': '0049',
	        'startDate': '2015/08/24',
	        'salary': 480.718
	    }, {
	        'name': 'Jeanette Henderson',
	        'position': 'Eu Elit Nulla Corporation',
	        'office': 'Italy',
	        'ext': '7586',
	        'startDate': '2015/06/19',
	        'salary': 253.772
	    }, {
	        'name': 'Candace Huber',
	        'position': 'Sed Institute',
	        'office': 'Uganda',
	        'ext': '7183',
	        'startDate': '2015/06/16',
	        'salary': 388.879
	    }, {
	        'name': 'Bethany Potter',
	        'position': 'Vivamus Nibh Dolor Incorporated',
	        'office': 'Puerto Rico',
	        'ext': '3354',
	        'startDate': '2014/11/12',
	        'salary': 747.310
	    }, {
	        'name': 'Whoopi Burks',
	        'position': 'Justo Inc.',
	        'office': 'Fiji',
	        'ext': '2185',
	        'startDate': '2014/09/24',
	        'salary': 803.037
	    }, {
	        'name': 'Sheila Long',
	        'position': 'Diam Associates',
	        'office': 'Sao Tome and Principe',
	        'ext': '7760',
	        'startDate': '2014/12/21',
	        'salary': 674.379
	    }, {
	        'name': 'Sonya Church',
	        'position': 'Laoreet Institute',
	        'office': 'Grenada',
	        'ext': '8920',
	        'startDate': '2015/06/03',
	        'salary': 625.147
	    }, {
	        'name': 'Shaine Forbes',
	        'position': 'Eu Arcu LLP',
	        'office': 'Cyprus',
	        'ext': '2369',
	        'startDate': '2015/01/18',
	        'salary': 208.100
	    }, {
	        'name': 'Alexandra Patrick',
	        'position': 'Ligula Donec Inc.',
	        'office': 'Viet Nam',
	        'ext': '8531',
	        'startDate': '2015/04/09',
	        'salary': 104.063
	    }, {
	        'name': 'Patience Vincent',
	        'position': 'Sem Molestie Associates',
	        'office': 'Philippines',
	        'ext': '8888',
	        'startDate': '2015/07/04',
	        'salary': 673.556
	    }, {
	        'name': 'Evelyn Smith',
	        'position': 'Fusce Industries',
	        'office': 'Togo',
	        'ext': '5051',
	        'startDate': '2015/08/15',
	        'salary': 737.284
	    }, {
	        'name': 'Kieran Gonzalez',
	        'position': 'Non Corp.',
	        'office': 'Equatorial Guinea',
	        'ext': '4834',
	        'startDate': '2015/08/24',
	        'salary': 90.195
	    }, {
	        'name': 'Molly Oneil',
	        'position': 'Non Dui Consulting',
	        'office': 'Belize',
	        'ext': '7501',
	        'startDate': '2014/10/28',
	        'salary': 140.767
	    }, {
	        'name': 'Nigel Davenport',
	        'position': 'Ullamcorper Velit In Industries',
	        'office': 'Vanuatu',
	        'ext': '0976',
	        'startDate': '2015/03/16',
	        'salary': 70.536
	    }, {
	        'name': 'Thor Young',
	        'position': 'Malesuada Consulting',
	        'office': 'French Southern Territories',
	        'ext': '0211',
	        'startDate': '2015/01/28',
	        'salary': 75.501
	    }, {
	        'name': 'Finn Delacruz',
	        'position': 'Lorem Industries',
	        'office': 'Cocos (Keeling) Islands',
	        'ext': '2980',
	        'startDate': '2014/12/11',
	        'salary': 754.967
	    }, {
	        'name': 'Lane Henderson',
	        'position': 'Pede Foundation',
	        'office': 'Kazakhstan',
	        'ext': '1446',
	        'startDate': '2015/07/02',
	        'salary': 842.050
	    }, {
	        'name': 'Shea Potter',
	        'position': 'Curabitur Limited',
	        'office': 'Timor-Leste',
	        'ext': '4654',
	        'startDate': '2015/05/07',
	        'salary': 263.629
	    }, {
	        'name': 'Brynn Yang',
	        'position': 'Ut Limited',
	        'office': 'Mayotte',
	        'ext': '4668',
	        'startDate': '2015/01/17',
	        'salary': 74.292
	    }, {
	        'name': 'Kylan Fuentes',
	        'position': 'Sapien Aenean Associates',
	        'office': 'Brazil',
	        'ext': '6623',
	        'startDate': '2014/12/28',
	        'salary': 108.632
	    }, {
	        'name': 'Lionel Mcbride',
	        'position': 'Ipsum PC',
	        'office': 'Portugal',
	        'ext': '3978',
	        'startDate': '2015/07/11',
	        'salary': 34.244
	    }, {
	        'name': 'Paul Lucas',
	        'position': 'Eget LLP',
	        'office': 'Nicaragua',
	        'ext': '8890',
	        'startDate': '2014/09/30',
	        'salary': 690.834
	    }, {
	        'name': 'Lareina Williamson',
	        'position': 'Imperdiet Ullamcorper Ltd',
	        'office': 'Cocos (Keeling) Islands',
	        'ext': '9489',
	        'startDate': '2014/12/01',
	        'salary': 603.498
	    }, {
	        'name': 'Amy Acevedo',
	        'position': 'Id Institute',
	        'office': 'Cook Islands',
	        'ext': '5592',
	        'startDate': '2015/02/04',
	        'salary': 125.165
	    }, {
	        'name': 'Nomlanga Silva',
	        'position': 'Eget LLC',
	        'office': 'Belize',
	        'ext': '3110',
	        'startDate': '2015/01/31',
	        'salary': 268.509
	    }, {
	        'name': 'Amena Stone',
	        'position': 'Enim Incorporated',
	        'office': 'Guinea',
	        'ext': '1211',
	        'startDate': '2014/09/23',
	        'salary': 214.381
	    }, {
	        'name': 'Danielle Coffey',
	        'position': 'Feugiat Placerat Corp.',
	        'office': 'Sao Tome and Principe',
	        'ext': '8176',
	        'startDate': '2015/06/17',
	        'salary': 137.423
	    }, {
	        'name': 'Buffy Russell',
	        'position': 'Lacus Quisque Ltd',
	        'office': 'Ecuador',
	        'ext': '6741',
	        'startDate': '2014/10/17',
	        'salary': 612.184
	    }, {
	        'name': 'Kaitlin Lamb',
	        'position': 'Malesuada Fringilla Est Associates',
	        'office': 'Algeria',
	        'ext': '5054',
	        'startDate': '2014/10/18',
	        'salary': 327.367
	    }, {
	        'name': 'Leilani Yates',
	        'position': 'Mus Proin LLC',
	        'office': 'South Sudan',
	        'ext': '1550',
	        'startDate': '2015/05/27',
	        'salary': 743.493
	    }, {
	        'name': 'Jemima Moon',
	        'position': 'Phasellus Corp.',
	        'office': 'South Georgia and The South Sandwich Islands',
	        'ext': '7582',
	        'startDate': '2015/05/21',
	        'salary': 496.067
	    }, {
	        'name': 'Hiroko Schwartz',
	        'position': 'Neque Institute',
	        'office': 'Saint Vincent and The Grenadines',
	        'ext': '9368',
	        'startDate': '2015/03/13',
	        'salary': 178.782
	    }, {
	        'name': 'Nathaniel Jensen',
	        'position': 'Mi Tempor Limited',
	        'office': 'Dominica',
	        'ext': '8331',
	        'startDate': '2014/12/05',
	        'salary': 37.441
	    }, {
	        'name': 'Silas Sweeney',
	        'position': 'Ultrices Institute',
	        'office': 'Turkmenistan',
	        'ext': '0746',
	        'startDate': '2014/11/13',
	        'salary': 152.980
	    }, {
	        'name': 'Jermaine Barry',
	        'position': 'Dapibus Corporation',
	        'office': 'Uzbekistan',
	        'ext': '1545',
	        'startDate': '2015/03/06',
	        'salary': 409.463
	    }, {
	        'name': 'Tatiana Nichols',
	        'position': 'Nec Diam Industries',
	        'office': 'Cook Islands',
	        'ext': '4395',
	        'startDate': '2015/05/22',
	        'salary': 51.155
	    }, {
	        'name': 'Rama Waller',
	        'position': 'Sem Pellentesque LLC',
	        'office': 'Andorra',
	        'ext': '2973',
	        'startDate': '2014/12/01',
	        'salary': 223.227
	    }
	];


/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports = "<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>row<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>div</span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>col-md-4<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n    <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>input</span> <span class=\"token attr-name\" >*ngIf</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.filtering<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >placeholder</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>Filter all columns<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >[ngTableFiltering]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.filtering<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>form-control<span class=\"token punctuation\" >\"</span></span>\n           <span class=\"token attr-name\" >(tableChanged)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable(config)<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >/></span></span>\n  <span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>div</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>br</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>ng-table</span> <span class=\"token attr-name\" >[config]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config<span class=\"token punctuation\" >\"</span></span>\n          <span class=\"token attr-name\" >(tableChanged)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable(config)<span class=\"token punctuation\" >\"</span></span>\n          <span class=\"token attr-name\" >(cellClicked)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onCellClick($event)<span class=\"token punctuation\" >\"</span></span>\n          <span class=\"token attr-name\" >[rows]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>rows<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >[columns]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>columns<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>ng-table</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pagination</span> <span class=\"token attr-name\" >*ngIf</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>pagination-sm<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[(ngModel)]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>page<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[totalItems]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>length<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[itemsPerPage]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>itemsPerPage<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[maxSize]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>maxSize<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[boundaryLinks]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>true<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >[rotate]</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>false<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >(pageChanged)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>onChangeTable(config, $event)<span class=\"token punctuation\" >\"</span></span>\n            <span class=\"token attr-name\" >(numPages)</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>numPages <span class=\"token punctuation\" >=</span> $event<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pagination</span><span class=\"token punctuation\" >></span></span>\n<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;</span>pre</span> <span class=\"token attr-name\" >*ngIf</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>config.paging<span class=\"token punctuation\" >\"</span></span> <span class=\"token attr-name\" >class</span><span class=\"token attr-value\" ><span class=\"token punctuation\" >=</span><span class=\"token punctuation\" >\"</span>card card-block card-header<span class=\"token punctuation\" >\"</span></span><span class=\"token punctuation\" >></span></span>Page: {{page}} / {{numPages}}<span class=\"token tag\" ><span class=\"token tag\" ><span class=\"token punctuation\" >&lt;/</span>pre</span><span class=\"token punctuation\" >></span></span>\n"

/***/ },

/***/ 137:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <input *ngIf=\"config.filtering\" placeholder=\"Filter all columns\"\n           [ngTableFiltering]=\"config.filtering\"\n           class=\"form-control\"\n           (tableChanged)=\"onChangeTable(config)\"/>\n  </div>\n</div>\n<br>\n<ng-table [config]=\"config\"\n          (tableChanged)=\"onChangeTable(config)\"\n          (cellClicked)=\"onCellClick($event)\"\n          [rows]=\"rows\" [columns]=\"columns\">\n</ng-table>\n<pagination *ngIf=\"config.paging\"\n            class=\"pagination-sm\"\n            [(ngModel)]=\"page\"\n            [totalItems]=\"length\"\n            [itemsPerPage]=\"itemsPerPage\"\n            [maxSize]=\"maxSize\"\n            [boundaryLinks]=\"true\"\n            [rotate]=\"false\"\n            (pageChanged)=\"onChangeTable(config, $event)\"\n            (numPages)=\"numPages = $event\">\n</pagination>\n<pre *ngIf=\"config.paging\" class=\"card card-block card-header\">Page: {{page}} / {{numPages}}</pre>\n"

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var table_data_1 = __webpack_require__(329);
	// webpack html imports
	var template = __webpack_require__(137);
	var TableDemoComponent = (function () {
	    function TableDemoComponent() {
	        this.rows = [];
	        this.columns = [
	            { title: 'Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' } },
	            {
	                title: 'Position',
	                name: 'position',
	                sort: false,
	                filtering: { filterString: '', placeholder: 'Filter by position' }
	            },
	            { title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc' },
	            { title: 'Extn.', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' } },
	            { title: 'Start date', className: 'text-warning', name: 'startDate' },
	            { title: 'Salary ($)', name: 'salary' }
	        ];
	        this.page = 1;
	        this.itemsPerPage = 10;
	        this.maxSize = 5;
	        this.numPages = 1;
	        this.length = 0;
	        this.config = {
	            paging: true,
	            sorting: { columns: this.columns },
	            filtering: { filterString: '' },
	            className: ['table-striped', 'table-bordered']
	        };
	        this.data = table_data_1.TableData;
	        this.length = this.data.length;
	    }
	    TableDemoComponent.prototype.ngOnInit = function () {
	        this.onChangeTable(this.config);
	    };
	    TableDemoComponent.prototype.changePage = function (page, data) {
	        if (data === void 0) { data = this.data; }
	        var start = (page.page - 1) * page.itemsPerPage;
	        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
	        return data.slice(start, end);
	    };
	    TableDemoComponent.prototype.changeSort = function (data, config) {
	        if (!config.sorting) {
	            return data;
	        }
	        var columns = this.config.sorting.columns || [];
	        var columnName = void 0;
	        var sort = void 0;
	        for (var i = 0; i < columns.length; i++) {
	            if (columns[i].sort !== '' && columns[i].sort !== false) {
	                columnName = columns[i].name;
	                sort = columns[i].sort;
	            }
	        }
	        if (!columnName) {
	            return data;
	        }
	        // simple sorting
	        return data.sort(function (previous, current) {
	            if (previous[columnName] > current[columnName]) {
	                return sort === 'desc' ? -1 : 1;
	            }
	            else if (previous[columnName] < current[columnName]) {
	                return sort === 'asc' ? -1 : 1;
	            }
	            return 0;
	        });
	    };
	    TableDemoComponent.prototype.changeFilter = function (data, config) {
	        var _this = this;
	        var filteredData = data;
	        this.columns.forEach(function (column) {
	            if (column.filtering) {
	                filteredData = filteredData.filter(function (item) {
	                    return item[column.name].match(column.filtering.filterString);
	                });
	            }
	        });
	        if (!config.filtering) {
	            return filteredData;
	        }
	        if (config.filtering.columnName) {
	            return filteredData.filter(function (item) {
	                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
	            });
	        }
	        var tempArray = [];
	        filteredData.forEach(function (item) {
	            var flag = false;
	            _this.columns.forEach(function (column) {
	                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
	                    flag = true;
	                }
	            });
	            if (flag) {
	                tempArray.push(item);
	            }
	        });
	        filteredData = tempArray;
	        return filteredData;
	    };
	    TableDemoComponent.prototype.onChangeTable = function (config, page) {
	        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
	        if (config.filtering) {
	            Object.assign(this.config.filtering, config.filtering);
	        }
	        if (config.sorting) {
	            Object.assign(this.config.sorting, config.sorting);
	        }
	        var filteredData = this.changeFilter(this.data, this.config);
	        var sortedData = this.changeSort(filteredData, this.config);
	        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
	        this.length = sortedData.length;
	    };
	    TableDemoComponent.prototype.onCellClick = function (data) {
	        console.log(data);
	    };
	    TableDemoComponent = __decorate([
	        core_1.Component({
	            selector: 'table-demo',
	            template: template
	        }),
	        __metadata("design:paramtypes", [])
	    ], TableDemoComponent);
	    return TableDemoComponent;
	}());
	exports.TableDemoComponent = TableDemoComponent;


/***/ },

/***/ 135:
/***/ function(module, exports) {

	module.exports = "<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> Component<span class=\"token punctuation\" >,</span> OnInit <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'@angular/core'</span><span class=\"token punctuation\" >;</span>\n<span class=\"token keyword\" >import</span> <span class=\"token punctuation\" >{</span> TableData <span class=\"token punctuation\" >}</span> from <span class=\"token string\" >'./table-data'</span><span class=\"token punctuation\" >;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// webpack html imports</span>\n<span class=\"token keyword\" >let</span> template <span class=\"token operator\" >=</span> <span class=\"token function\" >require</span><span class=\"token punctuation\" >(</span><span class=\"token string\" >'./table-demo.html'</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n@<span class=\"token function\" >Component</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >{</span>\n  selector<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'table-demo'</span><span class=\"token punctuation\" >,</span>\n  template\n<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span>\n<span class=\"token keyword\" >export</span> <span class=\"token keyword\" >class</span> <span class=\"token class-name\" >TableDemoComponent</span> <span class=\"token keyword\" >implements</span> <span class=\"token class-name\" >OnInit</span> <span class=\"token punctuation\" >{</span>\n  <span class=\"token keyword\" >public</span> rows<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> columns<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Name'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'name'</span><span class=\"token punctuation\" >,</span> filtering<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>filterString<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> placeholder<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Filter by name'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>\n      title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Position'</span><span class=\"token punctuation\" >,</span>\n      name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'position'</span><span class=\"token punctuation\" >,</span>\n      sort<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >,</span>\n      filtering<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>filterString<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> placeholder<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Filter by position'</span><span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Office'</span><span class=\"token punctuation\" >,</span> className<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'office-header'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'text-success'</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'office'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'asc'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Extn.'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'ext'</span><span class=\"token punctuation\" >,</span> sort<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> filtering<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>filterString<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >,</span> placeholder<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Filter by extn.'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Start date'</span><span class=\"token punctuation\" >,</span> className<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'text-warning'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'startDate'</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    <span class=\"token punctuation\" >{</span>title<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'Salary ($)'</span><span class=\"token punctuation\" >,</span> name<span class=\"token punctuation\" >:</span> <span class=\"token string\" >'salary'</span><span class=\"token punctuation\" >}</span>\n  <span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> itemsPerPage<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >10</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> maxSize<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >5</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> numPages<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token keyword\" >public</span> length<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >number</span> <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >public</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>\n    paging<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >,</span>\n    sorting<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>columns<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    filtering<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >{</span>filterString<span class=\"token punctuation\" >:</span> <span class=\"token string\" >''</span><span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >,</span>\n    className<span class=\"token punctuation\" >:</span> <span class=\"token punctuation\" >[</span><span class=\"token string\" >'table-striped'</span><span class=\"token punctuation\" >,</span> <span class=\"token string\" >'table-bordered'</span><span class=\"token punctuation\" >]</span>\n  <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >private</span> data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> TableData<span class=\"token punctuation\" >;</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token keyword\" >constructor</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >ngOnInit</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >void</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >onChangeTable</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >changePage</span><span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> start <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >.</span>page <span class=\"token operator\" >-</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >*</span> page<span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> end <span class=\"token operator\" >=</span> page<span class=\"token punctuation\" >.</span>itemsPerPage <span class=\"token operator\" >></span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token operator\" >?</span> <span class=\"token punctuation\" >(</span>start <span class=\"token operator\" >+</span> page<span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> data<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >slice</span><span class=\"token punctuation\" >(</span>start<span class=\"token punctuation\" >,</span> end<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >changeSort</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> columns <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >.</span>columns <span class=\"token operator\" >||</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> columnName<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >string</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >void</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> sort<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >string</span> <span class=\"token operator\" >=</span> <span class=\"token keyword\" >void</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >for</span> <span class=\"token punctuation\" >(</span><span class=\"token keyword\" >let</span> i <span class=\"token operator\" >=</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span> i <span class=\"token operator\" >&lt;</span> columns<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span> i<span class=\"token operator\" >++</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort <span class=\"token operator\" >!==</span> <span class=\"token string\" >''</span> <span class=\"token operator\" >&amp;&amp;</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort <span class=\"token operator\" >!==</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        columnName <span class=\"token operator\" >=</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >;</span>\n        sort <span class=\"token operator\" >=</span> columns<span class=\"token punctuation\" >[</span>i<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span>sort<span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>columnName<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// simple sorting</span>\n    <span class=\"token keyword\" >return</span> data<span class=\"token punctuation\" >.</span><span class=\"token function\" >sort</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> current<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >></span> current<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> sort <span class=\"token operator\" >===</span> <span class=\"token string\" >'desc'</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span> <span class=\"token keyword\" >else</span> <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>previous<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span> <span class=\"token operator\" >&lt;</span> current<span class=\"token punctuation\" >[</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >return</span> sort <span class=\"token operator\" >===</span> <span class=\"token string\" >'asc'</span> <span class=\"token operator\" >?</span> <span class=\"token operator\" >-</span><span class=\"token number\" >1</span> <span class=\"token punctuation\" >:</span> <span class=\"token number\" >1</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n      <span class=\"token keyword\" >return</span> <span class=\"token number\" >0</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >changeFilter</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >let</span> filteredData<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> data<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>column<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>column<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        filteredData <span class=\"token operator\" >=</span> filteredData<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n          <span class=\"token keyword\" >return</span> item<span class=\"token punctuation\" >[</span>column<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >match</span><span class=\"token punctuation\" >(</span>column<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>filterString<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span><span class=\"token operator\" >!</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> filteredData<span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>columnName<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >return</span> filteredData<span class=\"token punctuation\" >.</span><span class=\"token function\" >filter</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span>\n        item<span class=\"token punctuation\" >[</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>columnName<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >match</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>filterString<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> tempArray<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >Array</span><span class=\"token operator\" >&lt;</span><span class=\"token keyword\" >any</span><span class=\"token operator\" >></span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >[</span><span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >;</span>\n    filteredData<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n      <span class=\"token keyword\" >let</span> flag <span class=\"token operator\" >=</span> <span class=\"token keyword\" >false</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>columns<span class=\"token punctuation\" >.</span><span class=\"token function\" >forEach</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >(</span>column<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span> <span class=\"token operator\" >=</span><span class=\"token operator\" >></span> <span class=\"token punctuation\" >{</span>\n        <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >[</span>column<span class=\"token punctuation\" >.</span>name<span class=\"token punctuation\" >]</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >toString</span><span class=\"token punctuation\" >(</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >match</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >.</span>filterString<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n          flag <span class=\"token operator\" >=</span> <span class=\"token keyword\" >true</span><span class=\"token punctuation\" >;</span>\n        <span class=\"token punctuation\" >}</span>\n      <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>flag<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n        tempArray<span class=\"token punctuation\" >.</span><span class=\"token function\" >push</span><span class=\"token punctuation\" >(</span>item<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n      <span class=\"token punctuation\" >}</span>\n    <span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    filteredData <span class=\"token operator\" >=</span> tempArray<span class=\"token punctuation\" >;</span>\n\n    <span class=\"token keyword\" >return</span> filteredData<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >onChangeTable</span><span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span><span class=\"token punctuation\" >,</span> page<span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token operator\" >=</span> <span class=\"token punctuation\" >{</span>page<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>page<span class=\"token punctuation\" >,</span> itemsPerPage<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>itemsPerPage<span class=\"token punctuation\" >}</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span><span class=\"token keyword\" >any</span> <span class=\"token punctuation\" >{</span>\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >.</span>filtering<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >if</span> <span class=\"token punctuation\" >(</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >{</span>\n      Object<span class=\"token punctuation\" >.</span><span class=\"token function\" >assign</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >,</span> config<span class=\"token punctuation\" >.</span>sorting<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token punctuation\" >}</span>\n\n    <span class=\"token keyword\" >let</span> filteredData <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changeFilter</span><span class=\"token punctuation\" >(</span><span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>data<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >let</span> sortedData <span class=\"token operator\" >=</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changeSort</span><span class=\"token punctuation\" >(</span>filteredData<span class=\"token punctuation\" >,</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>config<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>rows <span class=\"token operator\" >=</span> page <span class=\"token operator\" >&amp;&amp;</span> config<span class=\"token punctuation\" >.</span>paging <span class=\"token operator\" >?</span> <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span><span class=\"token function\" >changePage</span><span class=\"token punctuation\" >(</span>page<span class=\"token punctuation\" >,</span> sortedData<span class=\"token punctuation\" >)</span> <span class=\"token punctuation\" >:</span> sortedData<span class=\"token punctuation\" >;</span>\n    <span class=\"token keyword\" >this</span><span class=\"token punctuation\" >.</span>length <span class=\"token operator\" >=</span> sortedData<span class=\"token punctuation\" >.</span>length<span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n\n  <span class=\"token keyword\" >public</span> <span class=\"token function\" >onCellClick</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >any</span><span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >:</span> <span class=\"token keyword\" >any</span> <span class=\"token punctuation\" >{</span>\n    console<span class=\"token punctuation\" >.</span><span class=\"token function\" >log</span><span class=\"token punctuation\" >(</span>data<span class=\"token punctuation\" >)</span><span class=\"token punctuation\" >;</span>\n  <span class=\"token punctuation\" >}</span>\n<span class=\"token punctuation\" >}</span>\n"

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var gettingStarted = __webpack_require__(133);
	var DemoComponent = (function () {
	    function DemoComponent() {
	    }
	    DemoComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n    <main class=\"bd-pageheader\">\n      <div class=\"container\">\n        <h1>ng2-table</h1>\n        <p>Native Angular2 directives for Table</p>\n        <a class=\"btn btn-primary\" href=\"https://github.com/valor-software/ng2-table\">View on GitHub</a>\n        <div class=\"row\">\n         <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=star&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n          <div class=\"col-lg-1\"><iframe src=\"https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=fork&count=true\" frameborder=\"0\" scrolling=\"0\" width=\"170px\" height=\"20px\"></iframe></div>\n        </div>\n      </div>\n    </main>\n  \n    <div class=\"container\">\n      <section id=\"getting-started\">" + gettingStarted + "</section>\n  \n      <table-section class=\"col-md-12\"></table-section>\n    </div>\n  \n    <footer class=\"footer\">\n      <div class=\"container\">\n        <p class=\"text-muted text-center\"><a href=\"https://github.com/valor-software/ng2-table\">ng2-table</a> is maintained by <a href=\"https://github.com/valor-software\">valor-software</a>.</p>\n      </div>\n    </footer>\n  "
	        })
	    ], DemoComponent);
	    return DemoComponent;
	}());
	exports.DemoComponent = DemoComponent;


/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(9);
	var forms_1 = __webpack_require__(89);
	var platform_browser_1 = __webpack_require__(48);
	var common_1 = __webpack_require__(47);
	var ng2_bootstrap_1 = __webpack_require__(129);
	var ng2_bootstrap_2 = __webpack_require__(129);
	var ng_table_module_1 = __webpack_require__(323);
	var table_demo_1 = __webpack_require__(330);
	var table_section_1 = __webpack_require__(328);
	var demo_component_1 = __webpack_require__(331);
	var Ng2TableDemoModule = (function () {
	    function Ng2TableDemoModule() {
	    }
	    Ng2TableDemoModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                demo_component_1.DemoComponent,
	                table_demo_1.TableDemoComponent,
	                table_section_1.TableSectionComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                ng_table_module_1.Ng2TableModule,
	                ng2_bootstrap_1.PaginationModule,
	                ng2_bootstrap_2.TabsModule,
	                common_1.CommonModule
	            ],
	            providers: [],
	            bootstrap: [demo_component_1.DemoComponent]
	        })
	    ], Ng2TableDemoModule);
	    return Ng2TableDemoModule;
	}());
	exports.Ng2TableDemoModule = Ng2TableDemoModule;


/***/ },

/***/ 133:
/***/ function(module, exports) {

	module.exports = "<h1 id=\"getting-started\">Getting started</h1> <h3 id=\"first-of-all-welcome-\">First of all, Welcome!</h3> ";

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var platform_browser_dynamic_1 = __webpack_require__(90);
	var core_1 = __webpack_require__(9);
	if (true) {
	    core_1.enableProdMode();
	}
	var demo_module_1 = __webpack_require__(332);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(demo_module_1.Ng2TableDemoModule);


/***/ },

/***/ 129:
/***/ function(module, exports) {

	console.warn('DEPRECATED: please replace import of `ng2-bootstrap/ng2-bootstrap` with `ng2-bootstrap`');
	export * from './index';


/***/ }

});
//# sourceMappingURL=main.6e35febacff1fb01a32a.bundle.map