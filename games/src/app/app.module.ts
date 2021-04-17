import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SelectionComponent } from './selection/selection.component';
import { GamecardComponent } from './gamecard/gamecard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RestService } from './rest.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SelectionComponent,
    GamecardComponent,
    LoginPageComponent,
    AdminPanelComponent,
    RegisterationComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }