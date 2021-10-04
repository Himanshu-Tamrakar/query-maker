import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRuleComponent } from './create-rule/create-rule.component';
import { BusinessRulesComponent } from './business-rules/business-rules.component';
import { QueryBuilderModule } from '../query-builder/query-builder.module';

@NgModule({
  declarations: [CreateRuleComponent, BusinessRulesComponent],
  imports: [CommonModule, QueryBuilderModule],
  exports: [CreateRuleComponent],
})
export class BusinessRuleManagementModule {}
