import { Component, OnInit } from '@angular/core';
import { CustomerListUseCase } from 'src/@core/domain/usecase/customers-list.usecase';

@Component({
  template: `
    <h1>Customers</h1>
    <app-customer-filter></app-customer-filter>
    <app-customer-list></app-customer-list>
    <app-customer-paginator></app-customer-paginator>
  `,
})
export class CustomerPanelComponent implements OnInit {
  constructor(private listCustomerUseCase: CustomerListUseCase) {}

  ngOnInit(): void {
    this.listCustomerUseCase.handle();
  }
}
