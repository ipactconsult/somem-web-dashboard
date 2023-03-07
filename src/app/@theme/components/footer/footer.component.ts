import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="d-flex justify-content-center align-items-center  text-center">
      Created by  <b><a href="https://www.ipactconsult.com" target="_blank">IPACT Consult</a></b> {{current}}
    </div>

  `,
})
export class FooterComponent {
   current = new Date().getFullYear();
}
