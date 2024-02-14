import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormCrudComponent } from './pages/crudSamples/template-form-crud/template-form-crud.component';
import { ReactiveFormCrudComponent } from './pages/crudSamples/reactive-form-crud/reactive-form-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormCrudComponent,
    ReactiveFormCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
