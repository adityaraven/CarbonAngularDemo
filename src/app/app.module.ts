import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  BreadcrumbModule,
  ButtonModule,
  DropdownModule,
  FileUploaderModule,
  GridModule, IconModule,
  InputModule,
  ModalModule,
  PlaceholderModule,
  ProgressIndicatorModule,
  SkeletonModule,
  UIShellModule,
  NotificationModule,
  DialogModule,
  TagModule,
} from 'carbon-components-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileformComponent } from './profileform/profileform.component';
import { PromtComponent } from './promt/promt.component';
import { PromtFormComponent } from './promt/promt-form/promt-form.component';
import { NotificationComponent } from './notification/notification.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { CloudstorageComponent } from './cloudstorage/cloudstorage.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileformComponent,
    PromtComponent,
    PromtFormComponent,
    NotificationComponent,
    TooltipComponent,
    CloudstorageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
		IconModule,
    ButtonModule,
    FileUploaderModule,
    GridModule,
    SkeletonModule,
    BreadcrumbModule,
    ProgressIndicatorModule,
    ReactiveFormsModule,
    InputModule,
    DropdownModule,
    UIShellModule,
    ModalModule,
    PlaceholderModule,
    NotificationModule,
    DialogModule,
    TagModule
    // ModalService,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
