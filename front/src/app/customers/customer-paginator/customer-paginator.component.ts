import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/@core/domain/entities/customer';
import { PaginationDto } from 'src/@core/domain/gw/customer.gw';
import { CustomerState } from 'src/@core/domain/states/customer.state';
import { CustomerListUseCase } from 'src/@core/domain/usecase/customers-list.usecase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-paginator',
  template: `
    <div *ngIf="paginator.pages > 1" class="paginator">
      <div class="total-items">
        {{ counter.start }} - {{ counter.end }}: {{ paginator.items }} Items
      </div>
      <ul class="pages">
        <li class="page" *ngFor="let page of pages">
          <a *ngIf="page != currentPage" (click)="toPage(page)">{{ page }}</a>
          <span class="selected-page" *ngIf="page == currentPage">
            {{ page }}
          </span>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./customer-paginator.component.scss'],
})
export class CustomerPaginatorComponent implements OnInit, OnDestroy {
  paginator: PaginationDto = {} as PaginationDto;
  pages: number[] = [];
  currentPage = 1;
  pageSize = environment.customersToShowOnList;
  counter: {
    start: number;
    end: number;
  } = { start: 0, end: 0 };

  private subscriptions = new Subscription();
  constructor(
    private customerState: CustomerState,
    private listCustomerUseCase: CustomerListUseCase
  ) {}
  ngOnInit(): void {
    this.customerState.pagination.subscribe((pagination) => {
      this.paginator = pagination;
      this.refreshPages();
    });
  }
  private refreshPages(): void {
    this.pages = Array.from({ length: this.paginator.pages }, (_, i) => i + 1);

    this.counter.start = (this.paginator.prev || 0) * this.pageSize + 1;
    this.counter.end = this.paginator.items;

    if (!this.paginator?.pages || !this.paginator.prev) {
      this.currentPage = 1;

      this.counter.end = this.paginator.next ? this.pageSize : this.counter.end;
      return;
    }

    if (!this.paginator.next && this.paginator.pages > 1) {
      this.currentPage = this.paginator.pages;
      return;
    }

    this.currentPage = this.paginator.prev + 1;
    this.counter.end = this.currentPage * this.pageSize;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  toPage(page: number): void {
    this.currentPage = page;
    this.listCustomerUseCase.handle({ page });
  }
}
