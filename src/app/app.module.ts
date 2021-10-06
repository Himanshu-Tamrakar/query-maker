import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BusinessRuleManagementModule } from './business-rule-management/business-rule-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BusinessRuleManagementModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
