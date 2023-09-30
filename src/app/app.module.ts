import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleApiGetComponent } from './components/example-api-get/example-api-get.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosPageComponent } from './components/todos-page/todos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleApiGetComponent,
    TodosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
