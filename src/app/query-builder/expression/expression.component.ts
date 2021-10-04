import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QueryBuilderFormService } from '../service/query-builder-form.service';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss'],
})
export class ExpressionComponent implements OnInit {
  @Input('expression') expressionForm: FormGroup;
  @Output('removeAt') removeEvt: EventEmitter<Number> =
    new EventEmitter<Number>();

  constructor(
    private _qbf: QueryBuilderFormService,
    private hostContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.displayAndSelectOperators();
  }

  private displayAndSelectOperators() {
    var selectElem =
      this.hostContainer.element.nativeElement.querySelector('select');
    var leftOperand = this.expressionForm.get('lOperand').value;
    var operators = this.getOperators(leftOperand.type);

    var selectedOperator = this.expressionForm.get('operator').value;

    operators.forEach((oprt) => {
      let optionsElem = document.createElement('option');
      optionsElem.value = oprt;
      optionsElem.textContent = oprt;
      optionsElem.selected = oprt === selectedOperator;
      selectElem.appendChild(optionsElem);
    });
  }

  private getOperators(type) {
    return this._qbf.getOperatorOfType(type) || [];
  }

  remove() {
    this.removeEvt.emit();
  }
}
