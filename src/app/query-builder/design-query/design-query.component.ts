import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  IQueryBuilder,
  TYPES,
  CONDITION_OPERATOR,
} from '../modal/query-builder';
import { QueryBuilderFormService } from '../service/query-builder-form.service';

@Component({
  selector: 'app-design-query',
  templateUrl: './design-query.component.html',
  styleUrls: ['./design-query.component.scss'],
})
export class DesignQueryComponent implements OnInit {
  statementObjectFormTODO: FormGroup;

  constructor(private _fb: FormBuilder, private _qbf: QueryBuilderFormService) {
    this.statementObjectFormTODO = this._fb.group({
      type: [TYPES[0]],
      operator: [CONDITION_OPERATOR[0]],
      statements: this._fb.array([]),
    });

    // this.statementObjectFormTODO = this._qbf.remove();
  }
  ngOnInit(): void {}
}
