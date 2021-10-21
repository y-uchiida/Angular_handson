import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* <app-root></app-root>という要素として利用できる */
  templateUrl: './app.component.html', /* テンプレートになるhtmlを指定 */
  styleUrls: ['./app.component.css'] /* 適用するcssを指定 */
})
export class AppComponent {
  /* ここに記載した内容が、html側に変数として渡される */
  title = 'Hello Angular!'
  ngIf_test1 = true
  ngIf_test2 = false
}
