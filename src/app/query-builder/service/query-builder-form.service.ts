import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  TYPES,
  CONDITION_OPERATOR,
  IQuery,
  IStatement,
  IOperand,
} from '../modal/query-builder';

@Injectable()
export class QueryBuilderFormService {
  private _types: any;

  constructor(private _fb: FormBuilder) {}

  get types() {
    return this._types;
  }

  set types(typesAndOperators) {
    this._types = typesAndOperators;
  }

  getOperatorOfType(type) {
    return this.types[type];
  }

  public getExpression(): FormGroup {
    return this._fb.group({
      type: [TYPES[1]],
      operator: '<',
      lOperand: this.getOperandGroup(),
      rOperand: this.getOperandGroup(),
    });
  }

  public getGroupExpression(): FormGroup {
    return this._fb.group({
      type: [TYPES[0]],
      operator: [CONDITION_OPERATOR[0]],
      statements: this._fb.array([]),
    });
  }

  private getEmptyGroup(): FormGroup {
    return this._fb.group({
      type: '',
      operator: '',
    });
  }

  private getOperandGroup(
    opearand: IOperand = {
      displayName: 'user.lastName',
      type: 'integer',
      subType: '',
      value: '',
    }
  ): FormGroup {
    return this._fb.group({
      displayName: opearand.displayName,
      type: opearand.type,
      subType: opearand.subType,
      value: opearand?.value,
    });
  }

  public initiate(input: IQuery): FormGroup {
    var var0 = this.getEmptyGroup();
    this.objectToFormGroup(var0, input);
    return var0;
  }

  public objectToFormGroup(
    statementForm: FormGroup,
    queryObj: IQuery | IStatement
  ): void {
    statementForm.get('type').setValue(queryObj.type);
    statementForm.get('operator').setValue(queryObj.operator);

    if (queryObj?.type === TYPES[0]) {
      queryObj = queryObj as IQuery;

      let formArray = this._fb.array([]);
      statementForm.addControl('statements', formArray);

      for (const iterator of queryObj?.statements) {
        let formGroup = this.getEmptyGroup();
        formArray.push(formGroup);

        this.objectToFormGroup(formGroup, iterator);
      }
    } else if (queryObj?.type === TYPES[1]) {
      queryObj = queryObj as IStatement;

      let leftOparandGroup = this.getOperandGroup(queryObj?.lOperand);

      let rightOperandGroup = this.getOperandGroup(queryObj?.rOperand);

      statementForm.addControl('lOperand', leftOparandGroup);
      statementForm.addControl('rOperand', rightOperandGroup);
    }
  }
}
