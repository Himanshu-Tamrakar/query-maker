import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QueryBuilderModule } from './query-builder/query-builder.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, QueryBuilderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
