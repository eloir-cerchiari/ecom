import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../entities/customer';
import { Subject } from 'rxjs';

export abstract class CustomerState {
  abstract customers: Subject<Customer[]>;
  abstract selectedCustomer: Subject<Customer | null>;

  abstract pagination: Subject<{
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
  }>;
}
