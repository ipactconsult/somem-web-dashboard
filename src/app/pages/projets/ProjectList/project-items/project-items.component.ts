import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-project-items',
  templateUrl: './project-items.component.html',
  styleUrls: ['./project-items.component.scss']
})
export class ProjectItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Loaded Page.");
  }

}
