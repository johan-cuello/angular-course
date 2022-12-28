import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./views/details/details.component";
import { ListComponent } from "./views/list/list.component";
import { CreateComponent } from "./views/create/create.component";

const routes: Routes = [
  {
    path:'',
    component: ListComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'create',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }