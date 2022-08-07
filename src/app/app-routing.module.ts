import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirebaseComponent} from "./firebase/firebase.component";
import {CreateComponent} from "./create/create.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "list" },
  { path: "list", component: FirebaseComponent },
  { path: "create", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
