import { Component, Input, OnInit } from '@angular/core';
import { QueryBuilderFormService } from '../service/query-builder-form.service';

@Component({
  selector: 'app-design-query',
  templateUrl: './design-query.component.html',
  styleUrls: ['./design-query.component.scss'],
})
export class DesignQueryComponent implements OnInit {
  @Input('query') queryObject: any;
  constructor(private _qbf: QueryBuilderFormService) {}

  ngOnInit(): void {
    if (this.queryObject) {
      this.queryObject = this._qbf.initiate(this.queryObject);
    } else {
      this.queryObject = this._qbf.getGroupExpression();
    }
  }
}
