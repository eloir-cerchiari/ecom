import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ProductListComponent],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'page1',
            component: ProductListComponent,
            data: { title: 'Produtos 1' },
          },
        ]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ecom'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ecom');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ecom');
  });

  it('should render correct page title', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const appComponentInstance = fixture.componentInstance;
    const router = TestBed.inject(Router);
    const titleService = TestBed.inject(Title);
    fixture.detectChanges();

    expect(appComponentInstance).toBeTruthy();

    router.navigate(['page1']);
    tick();
    expect(titleService.getTitle()).toBe('Produtos 1 - Ecom');

    // const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('app-product-list')).toBeTruthy();
    // expect(compiled.querySelector('p')?.textContent).toContain(
    //   'product-list works!'
    // );
  }));
});
