import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfraModule } from 'src/@core/infra/infra.module';
import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerPanelComponent,
    CustomerFilterComponent,
    CustomerPaginationComponent,
  ],
  imports: [CustomerRoutingModule, CommonModule, InfraModule, FormsModule],
  providers: [],
})
export class CustomerModule {}
