import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksContactoComponent } from './books-contacto/books-contacto.component';
import { BooksPorParametroComponent } from './books-por-parametro/books-por-parametro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: BooksListComponent,
  },
  {
    path: 'contacto',
    component:  BooksContactoComponent,
  },

  {
    path: 'Borges',
    component: BooksPorParametroComponent,
  },

  {
    path: 'Cortazar',
    component: BooksPorParametroComponent,
  },

  {
    path: 'drama',
    component: BooksPorParametroComponent,
  },
  {
    path: 'suspenso',
    component: BooksPorParametroComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

