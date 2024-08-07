import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private titleElement: Title, private router: Router) {}
  ngOnInit() {
    this.useRouterTitleOnPageChange();
  }

  private useRouterTitleOnPageChange() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const childRoute = this.router.routerState.snapshot.root.firstChild;
        const title = childRoute?.data['title'];

        if (title) {
          this.titleElement.setTitle(title + ' - Ecom');
        }
      }
    });
  }
}
