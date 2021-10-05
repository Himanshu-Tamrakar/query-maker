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
}
