import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbMenuModule, NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProjectItemsComponent } from './projets/ProjectList/project-items/project-items.component';
import { TicketItemsComponent } from './tickets/ticket-items/ticket-items.component';
import { HistoriqueClientItemsComponent } from './historique-client/historique-client-items/historique-client-items.component';
import { ClientProjectsComponent } from './projets/ProjectsClient/client-projects/client-projects.component';
import { TicketsTechnicienComponent } from './tickets/tickets-technicien/tickets-technicien.component';
import { TechniciensListComponent } from './techniciens/techniciens-list/techniciens-list.component';
import { AgentListComponent } from './agents/agent-list/agent-list.component';
import { AddAgentComponent } from './agents/add-agent/add-agent.component';
import { AddTechnicienComponent } from './techniciens/add-technicien/add-technicien.component';
import { EditTechnicienComponent } from './techniciens/edit-technicien/edit-technicien.component';
import { ListChefAgenceComponent } from './chef-agence/list-chef-agence/list-chef-agence.component';
import { EditChefAgenceComponent } from './chef-agence/edit-chef-agence/edit-chef-agence.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbSelectModule,
    NbInputModule,
    NbCheckboxModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ProjectItemsComponent,
    TicketItemsComponent,
    HistoriqueClientItemsComponent,
    ClientProjectsComponent,
    TicketsTechnicienComponent,
    TechniciensListComponent,
    AgentListComponent,
    AddAgentComponent,
    AddTechnicienComponent,
    EditTechnicienComponent,
    ListChefAgenceComponent,
    EditChefAgenceComponent,
  ],
})
export class PagesModule {
}
