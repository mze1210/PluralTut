import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>Tadaaa!!! Welcome to {{pageTitle}}!!</h1>
      <pm-products></pm-products>
</div>
`
})
export class AppComponent {
  pageTitle: string = 'Product Management'
}
