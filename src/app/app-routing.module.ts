import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleApiGetComponent } from './components/example-api-get/example-api-get.component';
import { TodosPageComponent } from './components/todos-page/todos-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'api_data',
    pathMatch: 'full'
  },
  /* {
    path: '',
    component: AppComponent
  }, */
  {
    path: 'todos_page',
    component: TodosPageComponent
  },
  {
    path: 'api_data',
    component: ExampleApiGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
