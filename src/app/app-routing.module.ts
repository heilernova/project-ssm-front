import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component:BodyComponent,
    children: [
      { path: 'atencion-a-la-comunidad', loadChildren:()=>import('./pages/pg-attention-community/pg-attention-community.module').then(m=>m.PgAttentionCommunityModule) },
      { path: 'configuraciones', loadChildren:()=>import('./pages/pg-config/pg-config.module').then(m=>m.PgConfigModule) }
    ]
  },
  { path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
