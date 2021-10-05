import {
  AfterViewInit,
  Component,
  EventEmitter,
  Host,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QueryBuilderFormService } from '../service/query-builder-form.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss'],
})
export class ConditionComponent implements OnInit {
  @Input('condition') conditionForm: FormGroup;

  @Output('removeAt') removeEvt: EventEmitter<null> = new EventEmitter<null>();

  removebtn = 'false';

  constructor(
    private qbform: QueryBuilderFormService,
    private container: ViewContainerRef
  ) {}

  ngOnInit(): void {
    console.log('aaa', this.container.element.nativeElement.dataset.remove);
    this.removebtn = this.container.element.nativeElement.dataset.remove;
  }

  getRule(): FormGroup {
    return this.qbform.getExpression();
  }

  getRuleset(): FormGroup {
    return this.qbform.getGroupExpression();
  }

  addRule() {
    var crtl: FormArray = this.conditionForm.get('statements') as FormArray;
    crtl.push(this.getRule());
  }

  addRuleset() {
    var crtl: FormArray = this.conditionForm.get('statements') as FormArray;
    crtl.push(this.getRuleset());
  }

  removeExpression(i: number) {
    var crtl: FormArray = this.conditionForm?.get('statements') as FormArray;
    crtl.removeAt(i);
  }

  // For removing fieldGroup: start
  removeCondition(i: number) {
    var crtl: FormArray = this.conditionForm?.get('statements') as FormArray;
    crtl.removeAt(i);
  }

  remove() {
    this.removeEvt.emit();
  }
  // For removing fieldGroup: end
}
