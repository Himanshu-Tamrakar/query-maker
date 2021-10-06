import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRuleComponent } from './create-rule/create-rule.component';
import { BusinessRulesComponent } from './business-rules/business-rules.component';
import { QueryBuilderModule } from '../query-builder/query-builder.module';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { RuleDetailsComponent } from './rule-details/rule-details.component';
import { BrmService } from './service/brm.service';

@NgModule({
  declarations: [
    CreateRuleComponent,
    BusinessRulesComponent,
    CardViewComponent,
    ListViewComponent,
    RuleDetailsComponent,
  ],
  imports: [CommonModule, QueryBuilderModule],
  exports: [CreateRuleComponent],
  providers: [BrmService],
})
export class BusinessRuleManagementModule {}
