import { Component } from '@angular/core';
import { CustomerState } from 'src/@core/domain/states/customer.state';

@Component({
  selector: 'app-customer-list',
  template: `
    <ul>
      <li *ngFor="let customer of customerState.customers | async" class="row">
        <div class="xs-12 sm-5 lg-3">{{ customer.name }}</div>
        <div class="xs-0 sm-4 lg-3">{{ customer.email }}</div>
        <div class="xs-0 sm-3 lg-3">{{ customer.phone }}</div>
        <div class="xs-0 sm-0  lg-3">{{ customer.address }}</div>
      </li>
    </ul>
  `,
})
export class CustomerListComponent {
  constructor(public customerState: CustomerState) {}
}
