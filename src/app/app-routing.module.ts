import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./paginas/paginas.module').then((m) => m.PaginasModule),
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
