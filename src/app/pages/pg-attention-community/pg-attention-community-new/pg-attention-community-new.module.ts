import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgAttentionCommunityNewComponent } from './pg-attention-community-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    PgAttentionCommunityNewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class PgAttentionCommunityNewModule { }
