import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormCrudComponent } from './pages/crudSamples/reactive-form-crud/reactive-form-crud.component';
import { TemplateFormCrudComponent } from './pages/crudSamples/template-form-crud/template-form-crud.component';



const routes: Routes = [
 
  {
    path:'template-form',
    component: TemplateFormCrudComponent
  },
  {
    path:'reactive-form',
    component: ReactiveFormCrudComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
