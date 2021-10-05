import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignQueryComponent } from './design-query/design-query.component';
import { ExpressionComponent } from './expression/expression.component';
import { ConditionComponent } from './condition/condition.component';
import { QueryBuilderFormService } from './service/query-builder-form.service';
import { HelperService } from './service/helper.service';

@NgModule({
  declarations: [DesignQueryComponent, ExpressionComponent, ConditionComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DesignQueryComponent],
  providers: [QueryBuilderFormService, HelperService],
})
export class QueryBuilderModule {}
