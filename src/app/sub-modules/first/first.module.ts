import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first/first.component';
import { CustomModalModule } from 'src/app/custom-modal/custom-modal.module';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    CustomModalModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [FirstComponent]
})
export class FirstModule { }
