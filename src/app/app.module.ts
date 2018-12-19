import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutComponent } from './about/about.component';
import { NatureComponent } from './nature/nature.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomeComponent,
    TopbarComponent,
    AboutComponent,
    NatureComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
