import { LoggingInterceptor } from './logging.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
//import {HotkeyModule} from 'angular2-hotkeys';
//import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {ProjectService} from './service/project.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactService } from './service/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { MatMenuModule } from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectDetailComponent,
    PageNotFoundComponent,
    ThankYouComponent,
    FamilyDetailsComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    CheckoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //HotkeyModule.forRoot(),
    //NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [ProjectService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//{provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor}