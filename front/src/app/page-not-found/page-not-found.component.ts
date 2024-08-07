import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="container">
      <h1 class="text-center">404</h1>
      <h2 class="text-center">Page Not Found</h2>
      <p class="text-center">
        Sorry, but the page you were trying to view does not exist.
      </p>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
      }
      h1 {
        font-size: 150px;
        padding: 2vh 0 2vh 0;
        margin: 0;
      }
      h2 {
        font-size: 36px;
      }
      p {
        font-size: 18px;
      }
      .text-center {
        text-align: center;
      }
    `,
  ],
})
export class PageNotFoundComponent {
  constructor() {}
}
