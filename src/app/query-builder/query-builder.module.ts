import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignQueryComponent } from './design-query/design-query.component';
import { ExpressionComponent } from './expression/expression.component';
import { ConditionComponent } from './condition/condition.component';

@NgModule({
  declarations: [DesignQueryComponent, ExpressionComponent, ConditionComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DesignQueryComponent],
})
export class QueryBuilderModule {}
