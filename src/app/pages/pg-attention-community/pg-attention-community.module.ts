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
import { RequestInfoComponent } from './pg-attention-community-history/request-info/request-info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DlgRequestCommentComponent } from './pg-attention-community-history/dlg-request-comment/dlg-request-comment.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CellphonePipe } from 'src/app/pipes/cellphone.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  declarations: [
    PgAttentionCommunityComponent,
    PgAttentionCommunityHistoryComponent,
    RequestInfoComponent,
    DlgRequestCommentComponent,
    // CellphonePipe
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
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    PipesModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AttentionCommunityInterceptor, multi:true }
  ]
})
export class PgAttentionCommunityModule { }
