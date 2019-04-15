import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../modal/modal.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [CustomModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    MatButtonModule
  ],
  // entryComponents: [CustomModalComponent],
  exports: [CustomModalComponent]
})
export class CustomModalModule { }
