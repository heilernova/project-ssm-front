import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgAttentionCommunityRoutingModule } from './pg-attention-community-routing.module';
import { PgAttentionCommunityComponent } from './pg-attention-community.component';
import { PgAttentionCommunityNewModule } from './pg-attention-community-new/pg-attention-community-new.module';
import { PgAttentionCommunityHistoryComponent } from './pg-attention-community-history/pg-attention-community-history.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AttentionCommunityInterceptor } from './services/attention-community.interceptor';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    PgAttentionCommunityComponent,
    PgAttentionCommunityHistoryComponent
  ],
  imports: [
    CommonModule,
    PgAttentionCommunityRoutingModule,
    PgAttentionCommunityNewModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AttentionCommunityInterceptor, multi:true }
  ]
})
export class PgAttentionCommunityModule { }
