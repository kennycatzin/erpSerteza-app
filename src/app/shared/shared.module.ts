import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderComponent,
SidebarComponent,
BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
   
   
  ], 
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],

  providers: [],
  bootstrap: []
})
export class sharedModule { }
