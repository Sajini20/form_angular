import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-crud',
  templateUrl: './reactive-form-crud.component.html',
  styleUrls: ['./reactive-form-crud.component.css']
})
export class ReactiveFormCrudComponent implements OnInit {

  dealersArray: any[]= [];
  dealerForm: FormGroup;

  constructor(private http: HttpClient) {
    this.dealerForm = new FormGroup({
      Name: new FormControl(''),
      Service_id: new FormControl(''),
      Manager: new FormControl('')
    });
  }
  
  ngOnInit(): void {
    this.loadDealers();
  }

  initializeForm() {
    this.dealerForm.reset();
  }

  onEdit(dealer: any) {
    this.dealerForm.patchValue({
      Name: dealer.Name,
      Service_id: dealer.Service_id,
      Manager: dealer.Manager
    });
  } 

  loadDealers() {
    this.http.get('http://onlinetestapi.gerasim.in/api/StockApp/GetAllDealerMasters').subscribe((res:any)=> {
      this.dealersArray = res.data;
    });
  }

  saveDealer() {
    this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/AddDealerMasters", this.dealerForm.value).subscribe((result: any) => {
      this.initializeForm();
      this.loadDealers();
    },
    error => {
      // Handle error
    });
  }

  updateDealer() {
    this.http.post("http://onlinetestapi.gerasim.in/api/StockApp/UpdateDealerMasters", this.dealerForm.value).subscribe((result: any) => {
      this.initializeForm();
      this.loadDealers();
    },
    error => {
      // Handle error
    });
  }
}
