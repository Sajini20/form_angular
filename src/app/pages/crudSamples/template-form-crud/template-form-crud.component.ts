import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-crud',
  templateUrl: './template-form-crud.component.html',
  styleUrls: ['./template-form-crud.component.css']
})
export class TemplateFormCrudComponent implements OnInit {

  formData: any = {
    todayDate: '',
    supervisorName: '',
    serviceNumber: '',
    sub1: false,
    sub2: false,
    sub3: false,
    sub4: false,
    sub5: false
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm() {
    // Handle form submission logic here
    console.log(this.formData);
    // You can send the form data to your server using HTTP requests
  }
}
