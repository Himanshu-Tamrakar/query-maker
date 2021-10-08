import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../service/helper.service';
import { QueryBuilderFormService } from '../service/query-builder-form.service';

@Component({
  selector: 'app-design-query',
  templateUrl: './design-query.component.html',
  styleUrls: ['./design-query.component.scss'],
})
export class DesignQueryComponent implements OnInit {
  @Input('query') queryObject: any;
  @Input('types') typeAndOperators: any;

  constructor(
    private _qbf: QueryBuilderFormService,
    private _helper: HelperService
  ) {}

  ngOnInit(): void {
    if (this.queryObject) {
      this.queryObject = this._qbf.initiate(this.queryObject);
    } else {
      this.queryObject = this._qbf.getGroupExpression();
    }

    this._qbf.types = this.typeAndOperators;
  }

  getQuery(obj) {
    var res = { query: '' };
    this._helper.objToQuery(obj, res);
    return res;
  }
}
