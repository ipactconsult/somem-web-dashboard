import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-historique-client-items',
  templateUrl: './historique-client-items.component.html',
  styleUrls: ['./historique-client-items.component.scss']
})
export class HistoriqueClientItemsComponent implements OnInit {

  selectedItem = "nothing"
  constructor() { }

  ngOnInit(): void {
  }

}
