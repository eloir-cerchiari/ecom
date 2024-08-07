import { NgModule } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CommonModule } from '@angular/common';
import { InfraModule } from 'src/@core/infra/infra.module';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { CustomerFilterComponent } from './customer-filter/customer-filter.component';
import { CustomerPaginatorComponent } from './customer-paginator/customer-paginator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerPanelComponent,
    CustomerFilterComponent,
    CustomerPaginatorComponent,
  ],
  imports: [CustomerRoutingModule, CommonModule, InfraModule, FormsModule],
  providers: [],
})
export class CustomerModule {}
