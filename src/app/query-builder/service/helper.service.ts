import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  constructor() {}

  appendOptions(elem, values, selectedValue) {
    values.forEach((oprt) => {
      let optionsElem = document.createElement('option');
      optionsElem.value = oprt;
      optionsElem.textContent = oprt;
      optionsElem.selected = oprt === selectedValue;
      elem.appendChild(optionsElem);
    });
  }

  objToQuery(queryObj, res) {
    var type = queryObj.type;
    res.query += '(';
    if (type === 'CONDITION') {
      queryObj.statements.forEach((query, i) => {
        this.objToQuery(query, res);
        if (i < queryObj.statements.length - 1) {
          res.query += ' ' + queryObj.operator + ' ';
        }
      });
    } else {
      res.query += queryObj?.lOperand.displayName;
      res.query += ' ' + queryObj?.operator + ' ';
      res.query += queryObj?.rOperand.displayName;
    }
    res.query += ')';
  }
}
