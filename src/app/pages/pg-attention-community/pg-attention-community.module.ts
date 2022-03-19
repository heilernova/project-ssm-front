import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PgAttentionCommunityRoutingModule } from './pg-attention-community-routing.module';
import { PgAttentionCommunityComponent } from './pg-attention-community.component';
import { CasesActiveModule } from './components/cases-active/cases-active.module';
import { CaseNewModule } from './components/case-new/case-new.module';


@NgModule({
  declarations: [
    PgAttentionCommunityComponent
  ],
  imports: [
    CommonModule,
    PgAttentionCommunityRoutingModule,
    CasesActiveModule,
    CaseNewModule
  ]
})
export class PgAttentionCommunityModule { }
