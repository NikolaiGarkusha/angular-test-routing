import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatTabsModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FirstModule } from './sub-modules/first/first.module';
import { SecondModule } from './sub-modules/second/second.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ModalModule } from './modal/modal.module';
import { CustomModalModule } from './custom-modal/custom-modal.module';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FirstModule,
    SecondModule,
    ModalModule,
    MatDialogModule,
    CustomModalModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
