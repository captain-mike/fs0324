import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
