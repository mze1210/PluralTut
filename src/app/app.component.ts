import { Component } from "@angular/core";
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>Tadaaa!!! Welcome to {{pageTitle}}!!</h1>
      <pm-products></pm-products>
</div>
`,
providers: [ ProductService ]
})
export class AppComponent {
  pageTitle: string = 'Product Management'
}
