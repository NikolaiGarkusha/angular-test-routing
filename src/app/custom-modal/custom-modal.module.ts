import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from '../modal/modal/modal.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [CustomModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule
  ],
  entryComponents: [CustomModalComponent],
  exports: [CustomModalComponent]
})
export class CustomModalModule { }
