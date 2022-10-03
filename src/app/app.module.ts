import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { UserBannerComponent } from './components/user-banner/user-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialCardComponent,
    UserBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
