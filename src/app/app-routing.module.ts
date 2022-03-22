import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AuthenticateGuard } from './guards/authenticate.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component:BodyComponent,
    canActivate:[AuthenticateGuard],
    children: [
      { path: '', redirectTo:'servicio-de-atencion-al-ciudadano', pathMatch:'full'},
      { path: 'servicio-de-atencion-al-ciudadano', loadChildren:()=>import('./pages/pg-attention-community/pg-attention-community.module').then(m=>m.PgAttentionCommunityModule) },
      { path: 'configuraciones', loadChildren:()=>import('./pages/pg-config/pg-config.module').then(m=>m.PgConfigModule) }
    ]
  },
  { path:'login', component:LoginComponent},
  { path: 'encuesta-de-satisfaccion', loadChildren:()=>import('./pages/pg-serveys/pg-serveys.module').then(m=>m.PgServeysModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
