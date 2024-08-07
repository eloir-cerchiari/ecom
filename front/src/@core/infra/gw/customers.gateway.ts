import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../domain/entities/customer';
import { CustomerGateway, PaginationDto } from '../../domain/gw/customer.gw';
import { LogService } from '../../domain/services/log.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerGatewayImpl implements CustomerGateway {
  constructor(private http: HttpClient, private logService: LogService) {}

  list({
    page = 1,
    filter,
    pageSize = 3,
  }: {
    page?: number;
    filter?: string;
    pageSize: number;
  }): Observable<PaginationDto<Customer>> {
    this.logService.trace(
      `CustomerGatewayImpl.list page=${page} filter=${filter}`
    );
    const filterString = filter ? `&name=${filter}` : '';

    return this.http.get<PaginationDto<Customer>>(
      `/customers?_page=${page}&_per_page=${pageSize}${filterString}`
    );
  }
}
