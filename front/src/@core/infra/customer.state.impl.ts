import { BehaviorSubject, Subject } from 'rxjs';
import { Customer } from '../domain/entities/customer';
import { CustomerState } from '../domain/states/customer.state';

export class CustomerStateImpl extends CustomerState {
  customers = new BehaviorSubject<Customer[]>([]);
  selectedCustomer = new BehaviorSubject<Customer | null>(null);
  loading = new BehaviorSubject<boolean>(false);
  error = new BehaviorSubject<string | null>(null);
  pagination: Subject<{
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
  }> = new Subject();
}
