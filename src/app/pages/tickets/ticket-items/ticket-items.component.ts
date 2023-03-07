import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ticket-items',
  templateUrl: './ticket-items.component.html',
  styleUrls: ['./ticket-items.component.scss']
})
export class TicketItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Page loaded.");
    
  }

}
