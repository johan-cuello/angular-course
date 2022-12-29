import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./views/details/details.component";
import { ListComponent } from "./views/list/list.component";
import { CreateComponent } from "./views/create/create.component";
import { EditComponent } from "./views/edit/edit.component";

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
  },
  {
    path:'edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }