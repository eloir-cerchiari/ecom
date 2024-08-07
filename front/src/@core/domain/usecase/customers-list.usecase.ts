import { Observable, Subscription } from 'rxjs';
import { Customer } from '../entities/customer';
import { CustomerState } from '../states/customer.state';
import { CustomerGateway } from '../gw/customer.gw';
import { environment } from 'src/environments/environment';
import { LogService } from '../services/log.service';

interface CustomerListUseCaseRequest {
  page?: number;
  filter?: string;
  pageSize?: number;
}

export class CustomerListUseCase {
  constructor(
    private customerGateway: CustomerGateway,
    private customerState: CustomerState,
    private logService: LogService
  ) {}
  private subscriptions = new Subscription();
  handle({
    page,
    filter,
    pageSize = environment.customersToShowOnList,
  }: CustomerListUseCaseRequest = {}): void {
    this.logService.trace(
      `CustomerListUseCase.handle page=${page} filter=${filter}`
    );
    try {
      this.subscriptions.add(
        this.customerGateway
          .list({ page, filter, pageSize })
          .subscribe((response) => {
            const { data, ...rest } = response;
            this.customerState.pagination.next(rest);
            if (data) this.customerState.customers.next(data);
          })
      );
    } catch (error) {
      this.logService.error(JSON.stringify(error));
      throw error;
    }
  }
}
