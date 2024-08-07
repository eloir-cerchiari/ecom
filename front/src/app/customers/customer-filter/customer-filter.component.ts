import { Component } from '@angular/core';
import { CustomerListUseCase } from 'src/@core/domain/usecase/customers-list.usecase';

@Component({
  selector: 'app-customer-filter',
  template: `
    <input [(ngModel)]="filterValue" placeholder="Filter by name" />
    <button (click)="filter()">Filter</button>
  `,
})
export class CustomerFilterComponent {
  constructor(private customerListUseCase: CustomerListUseCase) {}

  filterValue = '';

  filter(): void {
    this.customerListUseCase.handle({ filter: this.filterValue });
  }
}
