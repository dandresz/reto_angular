import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tareas', component: TareasComponent},
  {path: '**', pathMatch: 'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
