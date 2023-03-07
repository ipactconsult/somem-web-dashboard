import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { TicketItemsComponent } from "./tickets/ticket-items/ticket-items.component";
import { HistoriqueClientItemsComponent } from "./historique-client/historique-client-items/historique-client-items.component";
import { ClientProjectsComponent } from "./projets/ProjectsClient/client-projects/client-projects.component";
import { TicketsTechnicienComponent } from "./tickets/tickets-technicien/tickets-technicien.component";
import { TechniciensListComponent } from "./techniciens/techniciens-list/techniciens-list.component";
import { AgentListComponent } from "./agents/agent-list/agent-list.component";
import { AddAgentComponent } from "./agents/add-agent/add-agent.component";
import { AddTechnicienComponent } from "./techniciens/add-technicien/add-technicien.component";
import { EditTechnicienComponent } from "./techniciens/edit-technicien/edit-technicien.component";
import { ListChefAgenceComponent } from "./chef-agence/list-chef-agence/list-chef-agence.component";
import { EditChefAgenceComponent } from "./chef-agence/edit-chef-agence/edit-chef-agence.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent,
      },
      {
        path: "gestion-ressources-humaines",
        children: [
          {
            path: "techniciens",
            component: TechniciensListComponent,
          },
          {
            path :"technicien",
            children : [
              {path:"create",component: AddTechnicienComponent},
              {path:"edit",component: EditTechnicienComponent},
            ]
          },
          {
            path: "agents",
            component: AgentListComponent,
          },
          {
            path: "chefs-agence",
            component: ListChefAgenceComponent,
          },
          {
            path :"chef-agence",
            children : [
              {path:"create",component: AddTechnicienComponent},
              {path:"edit",component: EditChefAgenceComponent},
            ]
          },
          {
            path: "agent",
            children: [
              { path: "create", component: AddAgentComponent }
            ],
          },
        ],
      },
      {
        path: "gestion-projet",
        children: [
          {
            path: "tickets",
            component: TicketItemsComponent,
          },
          {
            path: "client-projects",
            component: ClientProjectsComponent,
          },
          {
            path: "tickets-technicien",
            component: TicketsTechnicienComponent,
          },
        ],
      },
      {
        path: "historique",
        children: [
          {
            path: "par-client",
            component: HistoriqueClientItemsComponent,
          },
        ],
      },

      {
        path: "iot-dashboard",
        component: DashboardComponent,
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then((m) => m.LayoutModule),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then((m) => m.FormsModule),
      },
      {
        path: "ui-features",
        loadChildren: () =>
          import("./ui-features/ui-features.module").then(
            (m) => m.UiFeaturesModule
          ),
      },
      {
        path: "modal-overlays",
        loadChildren: () =>
          import("./modal-overlays/modal-overlays.module").then(
            (m) => m.ModalOverlaysModule
          ),
      },
      {
        path: "extra-components",
        loadChildren: () =>
          import("./extra-components/extra-components.module").then(
            (m) => m.ExtraComponentsModule
          ),
      },
      {
        path: "maps",
        loadChildren: () =>
          import("./maps/maps.module").then((m) => m.MapsModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "editors",
        loadChildren: () =>
          import("./editors/editors.module").then((m) => m.EditorsModule),
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then((m) => m.TablesModule),
      },
      {
        path: "miscellaneous",
        loadChildren: () =>
          import("./miscellaneous/miscellaneous.module").then(
            (m) => m.MiscellaneousModule
          ),
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
