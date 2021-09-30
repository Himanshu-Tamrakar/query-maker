import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss'],
})
export class ExpressionComponent implements OnInit {
  @Input('expression') expressionForm: FormGroup;
  @Output('removeAt') removeEvt: EventEmitter<Number> =
    new EventEmitter<Number>();
  constructor() {}

  ngOnInit(): void {}

  remove() {
    this.removeEvt.emit();
  }
}
