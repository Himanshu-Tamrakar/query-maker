import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TYPES, CONDITION_OPERATOR } from '../modal/query-builder';

@Injectable({
  providedIn: 'root',
})
export class QueryBuilderFormService {
  constructor(private _fb: FormBuilder) {
    this.remove();
  }

  public getExpression() {
    return this._fb.group({
      type: [TYPES[1]],
      operator: '',
      lOperand: this.getOperandGroup(),
      rOperand: this.getOperandGroup(),
    });
  }

  public getGroupExpression() {
    return this._fb.group({
      type: [TYPES[0]],
      operator: [CONDITION_OPERATOR[0]],
      statements: this._fb.array([]),
    });
  }

  private getEmptyGroup() {
    return this._fb.group({
      type: '',
      operator: '',
    });
  }

  private getOperandGroup(
    opearand = { display: '', type: '', subType: '', value: '' }
  ) {
    return this._fb.group({
      display: opearand.display,
      type: opearand.type,
      subType: opearand.subType,
      value: opearand?.value,
    });
  }

  remove() {
    var var0 = {
      type: 'CONDITION',
      operator: 'OR',
      statements: [
        {
          type: 'EXPRESSION',
          operator: 'GT',
          lOperand: {
            display: '$user.username',
            type: 'Operend',
            subType: 'data',
            value: 'var(emp.age)',
          },
          rOperand: {
            display: '$user.age',
            type: 'Operend',
            subType: 'data',
            value: 21,
          },
        },
        {
          type: 'CONDITION',
          operator: 'OR',
          statements: [
            {
              type: 'EXPRESSION',
              operator: 'GT',
              lOperand: {
                display: '$user.username',
                type: 'Operend',
                subType: 'data',
                value: 'var(emp.age)',
              },
              rOperand: {
                display: '$user.age',
                type: 'Operend',
                subType: 'data',
                value: 21,
              },
            },
            {
              type: 'EXPRESSION',
              operator: 'GT',
              lOperand: {
                display: '$user.username',
                type: 'Operend',
                subType: 'data',
                value: 'var(emp.age)',
              },
              rOperand: {
                display: '$user.age',
                type: 'Operend',
                subType: 'data',
                value: 21,
              },
            },
            {
              type: 'CONDITION',
              operator: 'OR',
              statements: [],
            },
          ],
        },
        {
          type: 'EXPRESSION',
          operator: 'GT',
          lOperand: {
            display: '$user.username',
            type: 'Operend',
            subType: 'data',
            value: 'var(emp.age)',
          },
          rOperand: {
            display: '$user.age',
            type: 'Operend',
            subType: 'data',
            value: 21,
          },
        },
      ],
    };

    var var1 = this.getEmptyGroup();

    this.formObjectToForm(var1, var0);

    return var1;
  }

  public formObjectToForm(statementForm: FormGroup, inputTODO): any {
    statementForm.get('type').setValue(inputTODO.type);
    statementForm.get('operator').setValue(inputTODO.operator);

    if (inputTODO?.type === TYPES[0]) {
      let formArray = this._fb.array([]);
      statementForm.addControl('statements', formArray);

      for (const iterator of inputTODO?.statements) {
        let formGroup = this.getEmptyGroup();
        formArray.push(formGroup);

        this.formObjectToForm(formGroup, iterator);
      }
    } else if (inputTODO?.type === TYPES[1]) {
      let leftOparandGroup = this.getOperandGroup(inputTODO?.lOperand);

      let rightOperandGroup = this.getOperandGroup(inputTODO?.rOperand);

      statementForm.addControl('lOperand', leftOparandGroup);
      statementForm.addControl('rOperand', rightOperandGroup);
    }
  }
}
