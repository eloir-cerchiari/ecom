import { Observable } from 'rxjs';
import { Customer } from '../entities/customer';

export type PaginationDto<T = unknown> = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data?: T[];
};

export abstract class CustomerGateway {
  abstract list({
    page,
    filter,
    pageSize,
  }: {
    page?: number;
    filter?: string;
    pageSize: number;
  }): Observable<PaginationDto<Customer>>;

  constructor() {}
}
