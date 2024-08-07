import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CustomerListUseCase } from '../domain/usecase/customers-list.usecase';
import { CustomerGatewayImpl } from './gw/customers.gateway';
import { HttpConfigInterceptor } from 'src/app/http-config.interceptor';
import { CustomerState } from '../domain/states/customer.state';
import { CustomerStateImpl } from './customer.state.impl';
import { CustomerGateway } from '../domain/gw/customer.gw';
import { LogService } from '../domain/services/log.service';
import { environment } from 'src/environments/environment';
import { LogServiceImpl } from './services/log.service.impl';

const listCustomersUseProvider = {
  provide: CustomerListUseCase,
  useFactory: (
    customerGateway: CustomerGateway,
    customerState: CustomerState,
    logService: LogService
  ) => new CustomerListUseCase(customerGateway, customerState, logService),
  deps: [CustomerGateway, CustomerState, LogService],
};

const interceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true,
  },
];

const statesProviders = [
  {
    provide: CustomerState,
    useFactory: () => new CustomerStateImpl(),
  },
];

const gatewayProviders = [
  {
    provide: CustomerGateway,
    useClass: CustomerGatewayImpl,
  },
];

const servicesProviders = [
  {
    provide: LogService,
    useFactory: () => new LogServiceImpl(environment.logLevel),
  },
];

@NgModule({
  providers: [
    ...servicesProviders,
    ...interceptorsProviders,
    ...gatewayProviders,
    ...statesProviders,
    listCustomersUseProvider,
  ],
  imports: [HttpClientModule],
})
export class InfraModule {}
